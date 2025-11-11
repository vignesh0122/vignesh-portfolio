import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Calendar, TrendingUp } from 'lucide-react';

const experiencesData = [
  {
    id: 1,
    company: 'Boston University IT',
    title: 'Information Technology Analyst',
    location: 'Boston, MA',
    period: 'Sep 2024 - Present',
    current: true,
    logo: '/bulogo.png',
    summary: 'Oversee ServiceNow platform and resolve 100+ support tickets weekly while leveraging Microsoft Office, Power BI, and Azure cloud development to enhance reporting, streamline workflows, and support secure file sharing across the university.',
    achievements: [
      'Oversaw ServiceNow platform maintenance and resolved 100+ weekly support tickets',
      'Enhanced reporting and workflows using Power BI and Azure cloud development',
      'Maintained 50+ IT documentation entries, reducing resolution time by 25%',
      'Supported secure file sharing systems across university infrastructure'
    ],
    technologies: ['ServiceNow', 'Power BI', 'Azure', 'Microsoft Office', 'IT Documentation']
  },
  {
    id: 2,
    company: 'DSATM Department of Information Science',
    title: 'Teaching Assistant',
    location: 'Bengaluru, India',
    period: 'Oct 2023 - Feb 2024',
    current: false,
    logo: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" fill="#2563EB"><circle cx="25" cy="25" r="15" fill="#1D4ED8"/><path d="M15 22l10-10 10 10v13H15V22z" fill="white"/><circle cx="75" cy="25" r="15" fill="#059669"/><path d="M65 15h20v20H65V15z" fill="white"/><text x="75" y="28" fill="white" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tech</text></svg>')}`,
    summary: 'Taught C++ concepts to over 60 Computer Science majors, collaborating with fellow teaching assistants to coordinate office hours, develop lesson plans, and ensure timely grading.',
    achievements: [
      'Taught C++ programming to 60+ Computer Science students',
      'Coordinated office hours and grading with other teaching assistants',
      'Developed comprehensive lesson plans covering fundamental programming concepts',
      'Ensured timely evaluation and feedback to support student learning outcomes'
    ],
    technologies: ['C++', 'Programming Pedagogy', 'Assessment Tools']
  },
  {
    id: 3,
    company: 'JIO Platforms Limited',
    title: 'Android Developer Intern',
    location: 'Bengaluru, India',
    period: 'Aug 2023 - Dec 2023',
    current: false,
    logo: '/jio-logo.png',
    summary: 'At JIO, developed an electric vehicle companion app and cluster, implementing Bluetooth communication for real-time data exchange and command transmission, while enhancing UI/UX design based on Figma prototypes.',
    achievements: [
      'Developed electric vehicle companion app with Bluetooth communication',
      'Implemented real-time data exchange for command transmission',
      'Conducted automated testing and bug triage using Azure DevOps',
      'Enhanced UI/UX design based on Figma prototypes using Flutter framework'
    ],
    technologies: ['Flutter', 'Android Studio', 'Azure DevOps', 'Figma', 'Bluetooth API']
  }
];

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiencesData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-20 last:mb-0"
              >
                {/* Timeline dot with logo */}
                <div className={`absolute -left-24 w-16 h-16 rounded-full flex items-center justify-center ${
                  exp.current ? 'bg-white ring-4 ring-blue-600' : 'bg-white ring-4 ring-gray-300'
                } shadow-lg overflow-hidden`}>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Content card */}
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 gap-2">
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements toggle */}
                  <div className="text-center">
                    <button
                      onClick={() => toggleExpanded(exp.id)}
                      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        expandedExp === exp.id
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {expandedExp === exp.id ? 'Show Less' : 'Read More Achievements'}
                      {expandedExp === exp.id ? (
                        <ChevronUp size={16} className="ml-2" />
                      ) : (
                        <ChevronDown size={16} className="ml-2" />
                      )}
                    </button>
                  </div>

                  {/* Expanded content */}
                  {expandedExp === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-4 border-t border-gray-200"
                    >
                      <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp size={16} className="mr-2 text-blue-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
