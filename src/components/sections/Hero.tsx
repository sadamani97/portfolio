import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Backend Engineer",
    "Node.js Developer",
    "REST API Developer"
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-darkBg flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
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
            sequence={[
              ...roles.flatMap(role => [`${role}`, 2000, ' ', 50]),
            ]}
            repeat={Infinity}
            className="text-neonCyan"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <button className="glass px-8 py-3 rounded-full font-bold text-white hover:text-neonCyan transition-all duration-300 flex items-center gap-2 neon-glow-cyan">
            <FaFileDownload /> Resume
          </button>
          <button className="glass px-8 py-3 rounded-full font-bold text-white hover:text-neonCyan transition-all duration-300 flex items-center gap-2">
            <FaGithub /> GitHub
          </button>
          <button className="glass px-8 py-3 rounded-full font-bold text-white hover:text-neonCyan transition-all duration-300 flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </button>
          <button className="glass px-8 py-3 rounded-full font-bold text-white hover:text-neonCyan transition-all duration-300 flex items-center gap-2">
            <FaEnvelope /> Contact
          </button>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-20"></div>
    </section>
  );
};

export default Hero;
