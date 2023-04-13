import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);
  return (
    <motion.div
      className='about'
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className='title'>
        <h2>About Me</h2>
      </div>
      <div className='about-grid'>
        <div className='about-grid-info'>
          <p className='about-grid-info-text'>
            I am a Fullstack developer with 4 years of experience. I am
            passionate about developing web applications that are both
            functional and visually appealing.
          </p>
          <p className='about-grid-info-text'>
            I specialize in building web applications using the MERN stack -
            MongoDB, Express.js, React, and Node.js - with a solid understanding
            of each component and how they interact with each other.
          </p>
          <p className='about-grid-info-text'>
            I also have experience with popular front-end and back-end
            technologies such as HTML, CSS, JavaScript, RESTful APIs, GraphQL
            and Git.
          </p>
          <p className='about-grid-info-text'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='about-grid-info-list'>
            <li className='about-grid-info-list-item'>NestJS</li>
            <li className='about-grid-info-list-item'>Typescript</li>
            <li className='about-grid-info-list-item'>TypeORM</li>
            <li className='about-grid-info-list-item'>React</li>
            <li className='about-grid-info-list-item'>Next.js</li>
            <li className='about-grid-info-list-item'>PostgreSQL</li>
            <li className='about-grid-info-list-item'>Node.js</li>
            <li className='about-grid-info-list-item'>MongoDB</li>
            <li className='about-grid-info-list-item'>Prisma</li>
          </ul>
        </div>
        <div className='about-grid-photo'>
          <div className='overlay'></div>
          <div className='overlay-border'></div>
          <div className='about-grid-photo-container'>
            <Image src='/francis.jpeg' alt='profile' fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
