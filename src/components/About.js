import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, TrendingUp, Briefcase, FileText, Code } from 'lucide-react';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const stats = [
    { icon: Briefcase, value: '100+', label: 'ServiceNow tickets/week handled' },
    { icon: FileText, value: '50+', label: 'IT documentation entries' },
    { icon: Code, value: '20+', label: 'projects / coursework & research' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-base via-baseAlt to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-8 text-gradient">
            About
          </h2>
          <div className="w-24 h-1.5 bg-gradient-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Short Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            M.S. in Computer Science candidate at Boston University with a passion for creating impactful software solutions. Extensive experience in full-stack development, cloud technologies, and data science. Currently leading IT operations and driving digital transformation initiatives at BU MET.
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center card p-8 w-full md:w-auto md:min-w-[280px]">
              <stat.icon size={28} className="text-accent mr-5" />
              <div>
                <div className="font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-neutral">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Expanded Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center mx-auto px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
          >
            {expanded ? 'Show Less' : 'Read More About My Background'}
            {expanded ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
          </button>
          
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-left max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900">Boston University</div>
                      <div className="text-gray-600">M.S., Computer Science (Sep 2024 – Jan 2026)</div>
                      <div className="text-gray-500 text-sm">GPA: 3.70/4.0</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Visvesvaraya Technological University</div>
                      <div className="text-gray-600">B.E. in Information Science</div>
                      <div className="text-gray-500 text-sm">GPA: 3.60/4.0</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <TrendingUp size={20} className="text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">ServiceNow Leadership</div>
                        <div className="text-gray-600 text-sm">Oversee platform, resolve 100+ tickets weekly, improved resolution time by 25%</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText size={20} className="text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Technical Teaching</div>
                        <div className="text-gray-600 text-sm">Taught C++ to 60+ students, mentored and developed curriculum</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Code size={20} className="text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Innovative Projects</div>
                        <div className="text-gray-600 text-sm">Developed custom Linux kernels, IoT systems, and ML applications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
