import { useEffect, useState } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'BUILD&DEPLOY',
      role: 'Frontend React Developer',
      url: 'https://www.infojobs.net/build-deploy-sl./em-i98485754515552668573768022266156902682/',
      start: 'May 2023',
      end: 'Current',
      shortDescription: [
        'Developing new UI features using latest technologies React, HTML5, CSS3, JavaScript & TypeScript.',
        'Translating designs and wireframes into high quality code.',
        'Optimizing components for maximum performance across multiple devices and browsers.',
        'Integration with headless CMS for content authoring with a RESTful API.',
        'Optimizing components for maximum performance across multiple devices and browsers.',
      ],
    },
    {
      name: 'PRIMION DIGITEK',
      role: 'Software Engineer',
      url: 'https://www.primion-digitek.es/',
      start: 'February 2023',
      end: 'April 2023',
      shortDescription: [
        'Working on enterprise distributed system under Clean Architecture with the NestJS framework, PostgreSQL, TypeORM and RabbitMQ.',
        'Implemented secure authentication and authorization solutions.',
        'Writing optimized complex queries with TypeORM.',
        'Worked in an agile team that includes Frontend Developers, Backend Developers, and UI/UX Developers.',
      ],
    },
    {
      name: 'CIKLUM',
      role: 'JavaScript Node.js Developer',
      url: 'http://www.ciklum.com',
      start: 'September 2022',
      end: 'December 2022',
      shortDescription: [
        'Working on web crawlers to gather data across retailers, with the aim of enhancing my skills.',
        'Improve data acquisition software built with NodeJS and TypeScript.',
        'Research and monitor the gathered statistics.',
        'Working with the latest technologies, specifically JavaScript, TypeScript, Node.js, Docker and Kubernetes.',
      ],
    },
    {
      name: 'iNUBA',
      role: 'Backend Node.js Developer',
      url: 'https://inuba.com/',
      start: 'May 2022',
      end: 'June 2022',
      shortDescription: [
        'Writing server-side application logic in JavaScript.',
        'Connecting external applications and manage exchange of data with Socket.io.',
      ],
    },
    {
      name: 'COINSCRAP FINANCE',
      role: 'Front End / Full Stack Developer',
      url: 'https://coinscrapfinance.com/es/',
      start: 'Aug 2021',
      end: 'May 2022',
      shortDescription: [
        'Writing front-end modern, performant, maintainable code for a diverse array of clients and internal projects',
        'Work with a variety of different technologies such as JavaScript and React.',
        'E2E testing suit cases implemented with Playwright.js',
      ],
    },
    {
      name: 'LOCALHOST',
      role: 'Front End / Full Stack Developer',
      url: '',
      start: 'Feb 2019',
      end: 'Aug 2021',
      shortDescription: [
        'During this period I was brushing and building up my skills with the new technologies coming up.',
        'Updating knowledge as a Full Stack Developer with front-end and back-end technologies.',
        'Developing personal projects with Node - Express - NestJS , MongoDB - Prisma, React - Redux - TypeScript - Next.js and GraphQL.',
      ],
    },
  ];
  return (
    <motion.div
      className='experience'
      id='experience'
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
        <h2>Experience History</h2>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div className='underline'></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && 'exp-slider-item-selected'
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              <span>{experiences[selected].role}</span>
              <span className='exp-details-position-company'>
                &nbsp;@&nbsp;
                <Link
                  href={experiences[selected].url}
                  className='link'
                  target='_blank'
                >
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className='exp-details-range'>
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className='exp-details-list'>
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
