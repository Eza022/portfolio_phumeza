/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span 
      className={`glitch-text font-display ${className}`} 
      data-text={text}
    >
      {text}
    </span>
  );
};

const SlicedText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`sliced-text inline-block ${className}`}>
      {children}
    </span>
  );
};

const ProjectCard = ({ title, description, tags, link }: { title: string; description: string; tags: string[]; link: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-[#150a12] border border-white/10 p-6 rounded-none overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-[#ff2d75] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white/5 rounded-none">
          <Code2 className="w-6 h-6 text-[#ff2d75]" />
        </div>
        <a href={link} className="text-white/40 hover:text-[#ff2d75] transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <h3 className="font-display text-xl mb-2 tracking-wider uppercase">{title}</h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-white/5 text-white/40 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillBadge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-none group hover:border-[#ff2d75]/50 transition-colors">
    <Icon className="w-5 h-5 text-[#ff2d75] group-hover:scale-110 transition-transform" />
    <span className="font-display text-xs uppercase tracking-widest">{label}</span>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Terminal', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-[#ff2d75] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl font-black tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-[#ff2d75] flex items-center justify-center text-white">
              <Terminal size={18} />
            </div>
            <span className="hidden sm:inline">CYBER_GIRL</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="font-display text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-[#ff2d75] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-widest hover:text-[#ff2d75]"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,45,117,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[#ff00c1] text-xs tracking-[0.5em] uppercase mb-4 block">
              System.Initialize(Developer_Portfolio)
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-black mb-6 leading-none tracking-tighter">
              <GlitchText text="PHUMEZA_S" />
            </h1>
            <p className="font-display text-lg md:text-2xl text-white/60 mb-10 tracking-widest uppercase">
              Full-Stack <SlicedText className="text-[#ff2d75]">Developer</SlicedText> & Mobile Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-[#ff2d75] text-white font-display text-xs font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 group"
              >
                View Operations <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border border-white/20 hover:border-[#7b2ff7] font-display text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors"
              >
                Establish Link
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-[#ff2d75] text-xs tracking-widest uppercase mb-2 block">01 // Projects</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
              Selected <span className="text-white/20">Work</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-sm font-mono leading-relaxed">
            A collection of digital artifacts and high-performance applications built with precision and cutting-edge tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="REALTIME_SYNC"
            description="High-performance data synchronization engine using WebSockets and ArangoDB."
            tags={["Node.js", "WebSockets", "ArangoDB"]}
            link="#"
          />
          <ProjectCard 
            title="CROSS_PLATFORM_APP"
            description="Beautiful mobile experience built with Flutter for iOS and Android."
            tags={["Flutter", "Dart", "Firebase"]}
            link="#"
          />
          <ProjectCard 
            title="QUASAR_DASHBOARD"
            description="Enterprise-grade administrative interface built with Vue.js and Quasar Framework."
            tags={["Vue.js", "Quasar", "JavaScript"]}
            link="#"
          />
          <ProjectCard 
            title="NODE_API_CORE"
            description="Scalable backend architecture featuring multi-tenant database support."
            tags={["Node.js", "Express", "ArangoDB"]}
            link="#"
          />
          <ProjectCard 
            title="VUE_ANIMATE"
            description="Interactive UI component library with complex CSS animations and transitions."
            tags={["Vue.js", "CSS3", "HTML5"]}
            link="#"
          />
          <ProjectCard 
            title="SOCKET_CHAT"
            description="Encrypted real-time messaging platform with persistent storage."
            tags={["WebSockets", "Node.js", "JavaScript"]}
            link="#"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-32 bg-[#12060f] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-mono text-[#7b2ff7] text-xs tracking-widest uppercase mb-2 block">02 // Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
              Tech <span className="text-white/20">Arsenal</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge icon={Code2} label="JavaScript" />
            <SkillBadge icon={Layers} label="Vue.js / Quasar" />
            <SkillBadge icon={Cpu} label="Flutter" />
            <SkillBadge icon={Terminal} label="Node.js" />
            <SkillBadge icon={Layers} label="CSS / HTML" />
            <SkillBadge icon={Terminal} label="WebSockets" />
            <SkillBadge icon={Cpu} label="ArangoDB" />
            <SkillBadge icon={Code2} label="Full-Stack" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#ff2d75] text-xs tracking-widest uppercase mb-4 block">03 // Communication</span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8">
            Ready to <GlitchText text="CONNECT?" />
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently available for high-impact collaborations and architectural consulting. Send a transmission to initiate contact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              whileHover={{ y: -5, color: '#ff2d75' }}
              href="mailto:sithukuzaphumeza@gmail.com"
              className="flex items-center gap-2 font-display text-sm tracking-widest uppercase border-b border-white/10 pb-2"
            >
              <Mail size={18} /> Email_Transmission
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: '#ff2d75' }}
              href="https://github.com/Eza022/"
              className="flex items-center gap-2 font-display text-sm tracking-widest uppercase border-b border-white/10 pb-2"
            >
              <Github size={18} /> Source_Code
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: '#ff2d75' }}
              href="https://www.linkedin.com/in/phumeza-sithukuza-345691152"
              className="flex items-center gap-2 font-display text-sm tracking-widest uppercase border-b border-white/10 pb-2"
            >
              <Linkedin size={18} /> Professional_Net
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xs tracking-widest text-white/20 uppercase">
            © 2026 PHUMEZA_S // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex gap-8">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Status: Online</span>
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Loc: 37.7749° N, 122.4194° W</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
