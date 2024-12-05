import React, { useEffect } from 'react';

interface FollowCursorProps {
  color?: string; // Color del borde externo
  innerColor?: string; // Color del punto interno
}

const FollowCursor: React.FC<FollowCursorProps> = ({
  color = '#495670',
  innerColor = '#495670',
}) => {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      console.log('Touch device detected, cursor effect skipped.');
      return;
    }

    // Crear elementos HTML para los cursores
    const cursorOuter = document.createElement('div');
    const cursorInner = document.createElement('div');

    // Estilo del cursor externo (círculo)
    Object.assign(cursorOuter.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '40px',
      height: '40px',
      border: `2px solid ${color}`,
      borderRadius: '50%',
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      zIndex: '10000',
      transition: 'transform 0.3s cubic-bezier(.31,.56,.54,.82)',
    });

    // Estilo del cursor interno (punto)
    Object.assign(cursorInner.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '8px',
      height: '8px',
      backgroundColor: innerColor,
      borderRadius: '50%',
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      zIndex: '10000',
    });

    // Añadir los cursores al DOM
    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorInner);

    // Ocultar el cursor predeterminado
    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMoving = false;
    let timeout: NodeJS.Timeout;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Actualizar posición del cursor interno (punto)
      cursorInner.style.top = `${mouseY}px`;
      cursorInner.style.left = `${mouseX}px`;

      // Mientras el mouse se mueve, el círculo externo sigue al punto interno
      cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      isMoving = true;

      // Reiniciar el temporizador para detectar inactividad
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMoving = false;

        // Cuando el mouse deja de moverse, el círculo externo se alinea suavemente al punto
        // Cuando el mouse deja de moverse, el círculo externo se centra suavemente respecto al punto interno
        if (!isMoving) {
          cursorOuter.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
        }
      }, 300);
    };

    // Listener para ajustar el tamaño en caso de que se redimensione la ventana
    const onWindowResize = () => {
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
    };

    // Escuchar eventos del mouse y redimensionar ventana
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.cursor = '';
      cursorOuter.remove();
      cursorInner.remove();
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [color, innerColor]);

  return null; // Este componente no tiene representación visible
};

export default FollowCursor;
