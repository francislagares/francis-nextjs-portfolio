import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>
      <motion.h1
        className='hero-title'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        Hey! my name is
      </motion.h1>
      <motion.h2
        className='hero-title-large'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.75,
        }}
      >
        Francis Lagares.
      </motion.h2>
      <motion.h3
        className='hero-title-large hero-title-sub'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.05,
        }}
      >
        I build things for the web.
      </motion.h3>
      <motion.p
        className='hero-text'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      >
        Full Stack Engineer with a strong foundation in front-end & back-end
        development. Currently, I&apos;m focused on building high quality &
        professional software that scales.
      </motion.p>
    </div>
  );
};

export default Hero;
