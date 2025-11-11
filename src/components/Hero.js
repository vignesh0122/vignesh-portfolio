import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-hero-bg flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* Hero Headline */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Vignesh
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl sm:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer · Data Scientist · IT Analyst
          </motion.p>

          {/* Subline */}
          <motion.p
            className="text-xl text-white/80 mb-16 max-w-5xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transforming complex ideas into elegant software solutions. Passionate about creating impactful applications that solve real-world problems. Currently shaping digital experiences at Boston University's IT department.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="/Vignesh_Swaminathan_Resume.pdf"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-3" />
              View Resume
            </motion.a>

            <motion.button
              className="btn-secondary bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowRight size={20} className="ml-3" />
            </motion.button>

            <motion.a
              href="https://calendly.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} className="mr-3" />
              Schedule Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-80 hover:opacity-100"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, 10, 0] }}
        transition={{ duration: 1, delay: 1.2, repeatType: "reverse", repeat: Infinity }}
      >
        <div className="w-8 h-12 border-3 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 text-center font-light">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
