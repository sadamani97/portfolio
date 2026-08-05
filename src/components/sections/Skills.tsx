import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaCode, FaTerminal, FaServer, FaLayerGroup } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import type { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  name: string;
  level: number;
  color: string;
}

const SkillCard = ({ icon: Icon, name, level, color }: SkillCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -10 }}
    className="glass p-6 rounded-2xl relative overflow-hidden group cursor-default"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${color}`} />
    <div className="flex flex-col items-center text-center">
      <div className={`text-4xl mb-4 ${color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform duration-300`}>
        <Icon />
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{name}</h3>

      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-1.5 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`absolute left-0 top-0 h-full ${color.replace('bg-', 'bg-')} rounded-full`}
        />
      </div>
      <span className="text-xs font-mono text-gray-500 mt-2">{level}% Mastery</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillSets = [
    {
      title: 'Frontend Architecture',
      color: 'bg-neonCyan',
      skills: [
        { icon: FaReact, name: 'React JS', level: 95 },
        { icon: SiTypescript, name: 'TypeScript', level: 85 },
        { icon: SiTailwindcss, name: 'Tailwind CSS', level: 90 },
        { icon: FaCode, name: 'JavaScript', level: 92 },
      ]
    },
    {
      title: 'Backend Engineering',
      color: 'bg-neonPurple',
      skills: [
        { icon: FaNodeJs, name: 'Node.js', level: 90 },
        { icon: FaServer, name: 'Express.js', level: 88 },
        { icon: FaTerminal, name: 'REST APIs', level: 95 },
        { icon: FaLayerGroup, name: 'MVC Pattern', level: 85 },
      ]
    },
    {
      title: 'Database Systems',
      color: 'bg-neonBlue',
      skills: [
        { icon: SiMysql, name: 'MySQL', level: 85 },
        { icon: SiMongodb, name: 'MongoDB', level: 80 },
        { icon: FaDatabase, name: 'SQL Design', level: 82 },
      ]
    },
    {
      title: 'Engineering Tools',
      color: 'bg-gray-500',
      skills: [
        { icon: FaGithub, name: 'Git/GitHub', level: 90 },
        { icon: SiPostman, name: 'Postman', level: 95 },
        { icon: FaCode, name: 'VS Code', level: 98 },
      ]
    }
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
            Technical <span className="text-neonCyan text-glow">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillSets.map((set, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className={`text-xl font-bold text-center mb-6 ${set.color.replace('bg-', 'text-')}`}>
                {set.title}
              </h3>
              <div className="flex flex-col gap-4">
                {set.skills.map((skill, sIdx) => (
                  <SkillCard
                    key={sIdx}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                    color={set.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
