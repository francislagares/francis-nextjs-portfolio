import { motion } from 'framer-motion';

import { projects } from '@/data/projects';

import ProjectCard from './components/ProjectCard';

const Projects = () => {
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
        {projects.map(project => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
