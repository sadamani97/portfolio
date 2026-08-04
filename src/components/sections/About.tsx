import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDatabase, FaSitemap } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Projects', value: '10+', icon: <FaCode /> },
    { label: 'Tech Stack', value: '15+', icon: <FaDatabase /> },
    { label: 'Experience', value: 'Full Stack', icon: <FaSitemap /> },
    { label: 'Education', value: 'EE', icon: <FaGraduationCap /> },
  ];

  const timeline = [
    {
      year: 'The Beginning',
      title: 'Electrical Engineering',
      description: 'Started with a strong foundation in Electrical Engineering, developing a keen interest in how systems operate.',
      color: 'text-neonBlue'
    },
    {
      year: 'The Pivot',
      title: 'Software Transition',
      description: 'Discovered the power of code. Shifted focus to software development, mastering React and Node.js.',
      color: 'text-neonPurple'
    },
    {
      year: 'Current Focus',
      title: 'Full Stack Specialist',
      description: 'Dedicated to building scalable web applications with clean code, optimized APIs, and relational database design.',
      color: 'text-neonCyan'
    },
  ];

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
            About <span className="text-neonCyan text-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Side */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-2xl relative group hover:border-neonCyan transition-all duration-500"
              >
                <span className={`text-sm font-mono font-bold ${item.color} mb-2 block`}>
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute -left-4 top-1/2 w-2 h-2 bg-neonCyan rounded-full group-hover:scale-150 transition-transform" />
              </motion.div>
            ))}
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl text-center group hover:neon-glow-cyan transition-all duration-300"
              >
                <div className="text-3xl text-neonCyan mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-500 uppercase text-xs tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
