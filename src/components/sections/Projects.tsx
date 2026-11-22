import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaTimes, FaBullseye, FaLightbulb } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link: string;
  deploymentLink?: string;
  color: string;
  motto: string;
  why: string;
  details: string;
}

const projects: Project[] = [
  {
    title: 'StockFlow',
    description:
      'A modern inventory management dashboard for tracking stock levels, product movement, and business operations in real time.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    features: ['Stock Tracking', 'Inventory Alerts', 'Order Management', 'Analytics Dashboard'],
    link: 'https://inventory-management-frontend-git-fedpb-008-sadamanis-projects.vercel.app/',
    deploymentLink: 'https://inventory-management-frontend-git-fedpb-008-sadamanis-projects.vercel.app/',
    color: 'border-[#34d399]',
    motto: 'Inventory management built for smarter stock decisions.',
    why: 'Created to solve the common pain of managing stock manually, reducing understock and overstock issues while improving daily operations.',
    details:
      'StockFlow gives businesses a clear view of inventory movement, product availability, and operational activity. The system is designed to simplify product tracking, reduce errors, and offer actionable visibility for faster decision-making.',
  },
  {
    title: 'Hostel Management App (NPD)',
    description:
      'Full-stack hostel management dashboard with role-based access, food menus, confirmations, complaints, and announcements for residents and admins.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    features: ['Role-Based Auth', 'Food Management', 'Complaint Tracking', 'Admin Dashboard'],
    link: '',
    color: 'border-neonPurple',
    motto: 'Digitize hostel operations for residents and admins.',
    why: 'Used to solve real hostel pain points — food planning, complaint handling, and announcements — with role-based dashboards.',
    details:
      'Residents view menus, confirm meals, raise complaints, and read circulars. Admins manage rooms, food confirmations, complaint status, and communications. JWT auth and MySQL keep workflows secure and structured.',
  },
  {
    title: 'Rate Monitor',
    description:
      'Live rate monitoring dashboard that tracks pricing trends with charts and automated data collection for clear market visibility.',
    tech: ['React', 'Vite', 'Recharts', 'Puppeteer'],
    features: ['Live Rate Tracking', 'Interactive Charts', 'Data Scraping', 'Trend Visualization'],
    link: '',
    color: 'border-[#3b82f6]',
    motto: 'See market rate changes the moment they matter.',
    why: 'Built to automate rate collection and visualize trends so decisions are based on live data instead of manual checks.',
    details:
      'Rate Monitor scrapes and tracks pricing signals, then presents them through interactive charts. The dashboard helps compare trends over time and surface meaningful movement quickly.',
  },
  {
    title: 'Instagram Clone',
    description:
      'A feature-rich social media replica focusing on real-time feed updates, story interaction, and seamless user navigation.',
    tech: ['React', 'REST APIs', 'React Router'],
    features: ['Stories', 'Feed Algorithm', 'Follow System', 'Dynamic Profiles'],
    link: '',
    color: 'border-neonPurple',
    motto: 'Recreate social engagement with clean UI and API-driven flows.',
    why: 'Used to practice production-style frontend architecture — routing, feed UX, and REST-backed social interactions.',
    details:
      'The clone covers core social experiences: browsing feeds, viewing stories, following users, and visiting dynamic profiles. It focuses on responsive navigation and API integration patterns common in modern social apps.',
  },
  {
    title: 'Product & Order Management System',
    description:
      'Full-scale e-commerce backbone implementing MVC architecture for scalable product and order processing.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['MVC Architecture', 'Order Processing', 'Inventory Management', 'NoSQL Optimization'],
    link: '',
    color: 'border-neonCyan',
    motto: 'Turn products into orders with a scalable commerce core.',
    why: 'Built to learn end-to-end e-commerce fundamentals — catalog, inventory, and order lifecycle using MVC and NoSQL.',
    details:
      'The app models products, stock, and order processing in a modular architecture. MVC structure keeps logic maintainable, while MongoDB supports flexible product data and efficient order workflows.',
  },
  {
    title: 'Employee Tracker Management System',
    description:
      'A high-performance enterprise tool for managing staff, project assignments, and operational workflows using a relational database.',
    tech: ['React', 'Node.js', 'MySQL'],
    features: ['Employee CRUD', 'Project Assignment', 'Relational Data Design', 'Admin Dashboard'],
    link: '',
    color: 'border-neonCyan',
    motto: 'Organize people and projects in one reliable system.',
    why: 'Built to replace scattered spreadsheets with a structured employee and assignment workflow that scales with team growth.',
    details:
      'This system centralizes employee records, project mapping, and admin operations. Relational data design keeps assignments consistent, while CRUD flows and dashboards help managers track staffing and delivery status quickly.',
  },
  {
    title: 'User Management System',
    description:
      'Secure backend-driven user administrative tool with complete authentication flow and RESTful API integration.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    features: ['Auth Systems', 'Axios Integration', 'CRUD Operations', 'Secure API Endpoints'],
    link: '',
    color: 'border-[#3b82f6]',
    motto: 'Secure identity and access management made practical.',
    why: 'Created to demonstrate full authentication, authorization, and admin CRUD over a real Express + MySQL stack.',
    details:
      'Users can be registered, authenticated, and managed through protected REST endpoints. Axios powers frontend-backend communication, while secure APIs and role-aware flows keep administrative actions controlled.',
  },
  {
    title: 'Countries Weather and Population Application',
    description:
      'Explore country data with search, charts, and authenticated APIs — a full-stack app for browsing and analyzing global information.',
    tech: ['React', 'Redux', 'Express.js', 'MySQL'],
    features: ['Country Search', 'Data Charts', 'JWT Auth', 'REST API'],
    link: '',
    color: 'border-neonCyan',
    motto: 'Make global country data searchable and insightful.',
    why: 'Used to practice full-stack data apps — authenticated APIs, Redux state, and visual analytics over structured country records.',
    details:
      'Users can search countries, explore detailed information, and review chart-based insights. Express + MySQL power the backend, while React/Redux deliver a responsive authenticated frontend experience.',
  },
];

const CaseStudyDialog = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const liveUrl = project.deploymentLink || project.link;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close case study"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className={`relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border ${project.color} bg-[#0a0a0f] shadow-[0_0_60px_rgba(0,243,255,0.12)]`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#0a0a0f]/95 px-6 py-5 backdrop-blur">
          <div>
            <p className="mb-1 text-xs font-mono uppercase tracking-[0.2em] text-neonCyan">Case Study</p>
            <h3 id="case-study-title" className="text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 transition-colors hover:border-neonCyan/40 hover:text-neonCyan"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="rounded-2xl border border-[#00f3ff]/20 bg-gradient-to-br from-[#00f3ff]/10 to-transparent p-5">
            <div className="mb-2 flex items-center gap-2 text-neonCyan">
              <FaBullseye />
              <span className="text-xs font-bold uppercase tracking-widest">Major Motto</span>
            </div>
            <p className="text-lg font-semibold text-white leading-snug">{project.motto}</p>
          </div>

          <div className="rounded-2xl border border-[#bc13ff]/25 bg-gradient-to-br from-[#bc13ff]/10 to-transparent p-5">
            <div className="mb-2 flex items-center gap-2 text-[#bc13ff]">
              <FaLightbulb />
              <span className="text-xs font-bold uppercase tracking-widest">Why It Was Used</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{project.why}</p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">Description</h4>
            <p className="text-gray-300 leading-relaxed">{project.details}</p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neonCyan/30 bg-neonCyan/10 px-3 py-1 text-xs font-mono uppercase tracking-wide text-neonCyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-neonCyan py-3 font-bold text-darkBg transition-all hover:bg-white"
            >
              <FaExternalLinkAlt /> Open Live Demo
            </a>
          ) : (
            <div className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 py-3 font-bold text-gray-400">
              Demo Coming Soon
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}) => {
  const liveUrl = project.deploymentLink || project.link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group p-1 rounded-3xl transition-all duration-500 ${project.color}`}
    >
      <div className="glass p-6 rounded-[22px] h-full flex flex-col transition-all duration-500 group-hover:bg-opacity-20">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/10 rounded-xl text-neonCyan">
            <FaCode className="text-2xl" />
          </div>
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-neonCyan transition-colors"
                aria-label={`Open ${project.title} live project`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono uppercase tracking-tighter px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-1 h-1 bg-neonCyan rounded-full" />
              {f}
            </div>
          ))}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenCaseStudy(project)}
          className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-neonCyan hover:text-darkBg transition-all duration-300"
        >
          View Case Study
        </motion.button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpenCaseStudy={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CaseStudyDialog project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
