import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-blue-400 mb-4">
              Vignesh Swaminathan
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Full Stack Developer & Data Scientist crafting innovative solutions.
              Currently pursuing M.S. in Computer Science at Boston University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:Vignesh2@bu.edu"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vignesh-swaminathan22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/vignesh0122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Available for collaborations and opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vignesh Swaminathan. Built with{' '}
              <Heart size={14} className="inline text-red-500" /> using React + Tailwind CSS.
            </p>

            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <a href="/Vignesh_Swaminathan_Resume.pdf" className="hover:text-blue-400 transition-colors">
                View Resume
              </a>
              <span>•</span>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact Me
              </a>
              <span>•</span>
              <a href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Schedule Meeting
              </a>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              This website uses client-side email handling. Personal information is stored only for message reply purposes and will not be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
