import { motion } from 'framer-motion';

import { FORMSPREE_KEY } from '@/constants';

import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <motion.div
      className='contact'
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className='contact-title'>What&apos;s Next?</h2>
      <h2 className='contact-sub-title'>Get In Touch</h2>
      <p className='contact-text'>
        I&apos;m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <ContactForm formspreeKey={FORMSPREE_KEY} />
    </motion.div>
  );
};

export default Contact;
