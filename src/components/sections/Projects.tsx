import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: 'Employee Tracker Management System',
    description: 'A high-performance enterprise tool for managing staff, project assignments, and operational workflows using a relational database.',
    tech: ['React', 'Node.js', 'MySQL'],
    features: ['Employee CRUD', 'Project Assignment', 'Relational Data Design', 'Admin Dashboard'],
    link: 'https://github.com/sadamani',
    color: 'border-neonCyan'
  },
  {
    title: 'Instagram Clone',
    description: 'A feature-rich social media replica focusing on real-time feed updates, story interaction, and seamless user navigation.',
    tech: ['React', 'REST APIs', 'React Router'],
    features: ['Stories', 'Feed Algorithm', 'Follow System', 'Dynamic Profiles'],
    link: 'https://github.com/sadamani',
    color: 'border-neonPurple'
  },
  {
    title: 'User Management System',
    description: 'Secure backend-driven user administrative tool with complete authentication flow and RESTful API integration.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    features: ['Auth Systems', 'Axios Integration', 'CRUD Operations', 'Secure API Endpoints'],
    link: 'https://github.com/sadamani',
    color: 'border-neonBlue'
  },
  {
    title: 'Product & Order Management System',
    description: 'Full-scale e-commerce backbone implementing MVC architecture for scalable product and order processing.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['MVC Architecture', 'Order Processing', 'Inventory Management', 'NoSQL Optimization'],
    link: 'https://github.com/sadamani',
    color: 'border-neonCyan'
  },
  {
    title: 'YouTube Data Harvesting',
    description: 'Data engineering pipeline that harvests YouTube metrics for analysis and visualization using a multi-database approach.',
    tech: ['Python', 'MongoDB', 'PostgreSQL', 'Streamlit'],
    features: ['YouTube API', 'Data Analysis', 'SQL Queries', 'Visualization Dashboard'],
    link: 'https://github.com/sadamani',
    color: 'border-neonPurple'
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group p-1 rounded-3xl transition-all duration-500 ${project.color}`}
    >
      <div className="glass p-6 rounded-[22px] h-full flex flex-col transition-all duration-500 group-hover:bg-opacity-20">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/10 rounded-xl text-neonCyan">
            <FaCode className="text-2xl" />
          </div>
          <div className="flex gap-3">
            <a href={project.link} className="p-2 hover:text-neonCyan transition-colors"><FaGithub /></a>
            <a href={project.link} className="p-2 hover:text-neonCyan transition-colors"><FaExternalLinkAlt /></a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-mono uppercase tracking-tighter px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-1 h-1 bg-neonCyan rounded-full" />
              {f}
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-neonCyan hover:text-darkBg transition-all duration-300"
        >
          View Case Study
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-24 px-6 bg-darkBg overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Featured <span className="text-neonCyan text-glow">Works</span>
          </h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
