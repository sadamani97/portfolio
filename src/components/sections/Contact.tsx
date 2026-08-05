import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="relative py-24 px-6 bg-darkBg overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Get In <span className="text-neonCyan text-glow">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:sadamanism97@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#bc13ff] transition-colors group"
                >
                  <div className="p-3 bg-[#bc13ff]/10 border border-[#bc13ff]/30 rounded-xl text-[#bc13ff] group-hover:shadow-[0_0_16px_rgba(188,19,255,0.45)] transition-all">
                    <FaEnvelope />
                  </div>
                  <span>sadamanism97@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sadamani-s-8b3067364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#5b9bd5] transition-colors group"
                >
                  <div className="p-3 bg-[#0a66c2]/15 border border-[#0a66c2]/40 rounded-xl text-[#5b9bd5] group-hover:shadow-[0_0_16px_rgba(10,102,194,0.45)] transition-all">
                    <FaLinkedin />
                  </div>
                  <span>linkedin.com/in/sadamani-s</span>
                </a>
                <a
                  href="https://github.com/sadamani97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neonCyan transition-colors group"
                >
                  <div className="p-3 bg-[#00f3ff]/10 border border-[#00f3ff]/30 rounded-xl text-neonCyan group-hover:neon-glow-cyan transition-all">
                    <FaGithub />
                  </div>
                  <span>github.com/sadamani97</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                  status === 'success' ? 'bg-green-500' : 'bg-neonCyan text-darkBg hover:bg-white hover:text-darkBg'
                }`}
              >
                {status === 'idle' && 'Initiate Transmission'}
                {status === 'sending' && 'Transmitting...'}
                {status === 'success' && 'Transmission Successful!'}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
