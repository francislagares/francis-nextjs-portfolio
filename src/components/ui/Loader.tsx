import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  isLoading: boolean;
  setIsLoading: () => void;
}

const Loader = ({ isLoading, setIsLoading }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='loader'
          exit={{ scale: 0 }}
          key='motiondivleave'
          transition={{
            duration: 0.45,
            ease: 'easeInOut',
          }}
        >
          <motion.svg
            id='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <title>Logo</title>
            <g>
              <g id='K' transform='translate(44.000000, 35.000000)'>
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill='currentColor'
                  d='M 18.518 3.96 L 5.22 3.96 L 5.22 13.837 L 16.898 13.837 L 16.898 17.798 L 5.22 17.798 L 5.22 31.05 L 0 31.05 L 0 0 L 19.103 0 L 18.518 3.96 Z'
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                exit={{
                  scale: 2,
                }}
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z'
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
