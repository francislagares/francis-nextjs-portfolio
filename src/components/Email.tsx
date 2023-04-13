import { motion } from 'framer-motion';
import React from 'react';

const Email = () => {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <a href='mailto:francis.lagares@gmail.com' className='email-link'>
        francislagares@gmail.com
      </a>
    </motion.div>
  );
};

export default Email;
