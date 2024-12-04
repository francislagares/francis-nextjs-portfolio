import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type ProjectCardProps = {
  project: {
    projectName: string;
    projectImage: string;
    projectDescription: string;
    projectTech: string[];
    projectExternalLinks: {
      github: string;
      externalLink: string;
    };
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    projectName,
    projectImage,
    projectDescription,
    projectTech,
    projectExternalLinks,
  } = project;

  return (
    <motion.div
      className='project'
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
          <Image
            fill
            src={projectImage}
            objectFit='cover'
            alt={`${projectName} screenshot`}
            quality={100}
          />
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
              aria-label={`View ${projectName} on GitHub`}
            >
              <FiGithub />
            </Link>
          </li>
          <li className='project-info-links-item'>
            <Link
              href={projectExternalLinks.externalLink}
              className='project-info-links-item-link'
              target='_blank'
              aria-label={`Visit ${projectName} live`}
            >
              <FiExternalLink />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
