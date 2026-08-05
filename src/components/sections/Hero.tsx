import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00f3ff" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#bc13ff" intensity={2} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#00f3ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>
    </>
  );
};

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/sadamani97',
    icon: FaGithub,
    className:
      'border-[#00f3ff]/40 text-[#00f3ff] hover:bg-[#00f3ff] hover:text-darkBg hover:shadow-[0_0_24px_rgba(0,243,255,0.55)]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sadamani-s-8b3067364',
    icon: FaLinkedin,
    className:
      'border-[#0a66c2]/50 text-[#5b9bd5] hover:bg-[#0a66c2] hover:text-white hover:shadow-[0_0_24px_rgba(10,102,194,0.55)]',
  },
  {
    label: 'Email',
    href: 'mailto:sadamanism97@gmail.com',
    icon: FaEnvelope,
    className:
      'border-[#bc13ff]/40 text-[#bc13ff] hover:bg-[#bc13ff] hover:text-white hover:shadow-[0_0_24px_rgba(188,19,255,0.55)]',
  },
];

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'React Developer',
    'Backend Engineer',
    'Node.js Developer',
    'REST API Developer',
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-darkBg flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Top social bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-0 right-0 z-20 flex justify-center px-4"
      >
        <div className="glass flex items-center gap-2 sm:gap-3 rounded-full px-3 py-2 sm:px-4 border border-white/15 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 sm:px-4 text-sm font-semibold transition-all duration-300 ${className}`}
              aria-label={label}
            >
              <Icon className="text-base sm:text-lg" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            SADAMANI <span className="text-neonCyan text-glow">S</span>
          </h1>
        </motion.div>

        <div className="text-xl md:text-3xl font-mono text-gray-400 h-12">
          <TypeAnimation
            sequence={[...roles.flatMap((role) => [`${role}`, 2000, ' ', 50])]}
            repeat={Infinity}
            className="text-neonCyan"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="mailto:sadamanism97@gmail.com"
            className="glass px-8 py-3 rounded-full font-bold text-white border border-[#00f3ff]/30 hover:text-darkBg hover:bg-[#00f3ff] transition-all duration-300 flex items-center gap-2 neon-glow-cyan"
          >
            <FaFileDownload /> Resume
          </a>
          <a
            href="https://github.com/sadamani97"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-full font-bold border border-[#00f3ff]/40 text-[#00f3ff] hover:bg-[#00f3ff] hover:text-darkBg transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sadamani-s-8b3067364"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-full font-bold border border-[#0a66c2]/50 text-[#5b9bd5] hover:bg-[#0a66c2] hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:sadamanism97@gmail.com"
            className="glass px-8 py-3 rounded-full font-bold border border-[#bc13ff]/40 text-[#bc13ff] hover:bg-[#bc13ff] hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(188,19,255,0.5)]"
          >
            <FaEnvelope /> Contact
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-20"></div>
    </section>
  );
};

export default Hero;
