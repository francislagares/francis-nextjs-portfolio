import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      image: '/gamehub.png',
      projectName: 'GameHub - React Application',
      projectDescription:
        'GameHub is a React Web Application that makes use of the popular RAWG Video Games Database API. This project also makes use of the most top-notch technologies up until now.',
      projectTech: [
        'React',
        'TypeScript',
        'ChakraUI',
        'React Router',
        'React Query',
        'Zustand',
      ],
      projectExternalLinks: {
        github: 'https://github.com/francislagares/game-hub',
        externalLink: 'https://game-hub-francis.vercel.app',
      },
    },
    {
      image: '/krypt.png',
      projectName: 'Krypt - Web 3.0 Application',
      projectDescription:
        'Krypt is a Web3.0 blockchain application that enables users to send transactions over the blockchain, with each transaction being permanently recorded on the blockchain.',
      projectTech: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'Solidity',
        'Ethereum',
      ],
      projectExternalLinks: {
        github: 'https://github.com/francislagares/krypt-blockchain-app',
        externalLink: 'https://krypt-blockchain-app.pages.dev',
      },
    },
    {
      image: '/furrow.png',
      projectName: 'Awwwards Furrow Website',
      projectDescription:
        'This project is based on the outstanding Awwwards website from where I picked up this one and built it with React and TypeScript. The main purpose of this project was intended as a learning project.',
      projectTech: [
        'React',
        'TypeScript',
        'Framer Motion',
        'Styled Components',
      ],
      projectExternalLinks: {
        github: 'https://github.com/francislagares/awwwards-furrow-studio',
        externalLink: 'https://awwwards-rebuilt-furrow.vercel.app',
      },
    },
    {
      image: '/bankist.png',
      projectName: 'Bankist Website App',
      projectDescription:
        'The Bankist App website ( built using HTML, CSS & Javascript/Typescript ) with the purpose of training and showing advanced DOM events within vanilla JS, screen transitions, sliders, lazy-loading and some other features can be found in the code/site.',
      projectTech: [
        'JavaScript',
        'TypeScript',
        'HTML5',
        'Scss',
        'Node.js',
        'Express',
      ],
      projectExternalLinks: {
        github: 'https://github.com/francislagares/bankist-website',
        externalLink: 'https://bankist-website-francislagares.netlify.app',
      },
    },
  ];
  return (
    <div className='projects' id='work'>
      <motion.div
        className='title'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Projects I’ve Built</h2>
      </motion.div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className='project'
                key={projectName}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className='project-info'>
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map(tech => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.github}
                        className='project-info-links-item-link'
                        target='_blank'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className='project-info-links-item-link'
                        target='_blank'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Projects;
