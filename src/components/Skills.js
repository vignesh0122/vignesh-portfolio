import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const skillsData = {
  languages: {
    title: 'Languages',
    items: [
      { name: 'C', proficiency: 'Advanced', projects: 'Kernel Development' },
      { name: 'C++', proficiency: 'Advanced', projects: 'Teaching Assistant, Algorithms' },
      { name: 'Python', proficiency: 'Expert', projects: 'ML Projects, Data Analysis' },
      { name: 'Java', proficiency: 'Intermediate', projects: 'Android Apps' },
      { name: 'JavaScript', proficiency: 'Advanced', projects: 'Web Applications' },
      { name: 'HTML', proficiency: 'Expert', projects: 'Frontend Development' },
      { name: 'CSS', proficiency: 'Advanced', projects: 'Responsive Design' },
      { name: 'PHP', proficiency: 'Intermediate', projects: 'Backend Scripts' },
    ]
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', proficiency: 'Advanced', projects: 'Portfolio Sites' },
      { name: 'Django', proficiency: 'Intermediate', projects: 'Web Apps' },
      { name: 'Android Studio', proficiency: 'Advanced', projects: 'Mobile Apps' },
      { name: 'Flutter', proficiency: 'Advanced', projects: 'EV App' },
      { name: 'Figma', proficiency: 'Intermediate', projects: 'UI/UX Design' },
      { name: 'Flask', proficiency: 'Intermediate', projects: 'MenuMatch Backend' },
      { name: 'ASP.NET', proficiency: 'Beginner', projects: 'Web Development' },
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Azure', proficiency: 'Advanced', projects: 'Deployment, DevOps' },
      { name: 'AWS EC2', proficiency: 'Intermediate', projects: 'MenuMatch Hosting' },
      { name: 'Docker', proficiency: 'Advanced', projects: 'Containerization' },
      { name: 'Jenkins', proficiency: 'Intermediate', projects: 'MenuMatch CI/CD' },
      { name: 'GitHub', proficiency: 'Advanced', projects: 'All Projects' },
      { name: 'Git', proficiency: 'Expert', projects: 'Version Control' },
      { name: 'Azure DevOps', proficiency: 'Intermediate', projects: 'JIO Platforms Project' },
      { name: 'JIRA', proficiency: 'Intermediate', projects: 'Project Management' },
    ]
  },
  data: {
    title: 'Data & ML',
    items: [
      { name: 'Pandas', proficiency: 'Advanced', projects: 'Data Processing' },
      { name: 'NumPy', proficiency: 'Advanced', projects: 'Scientific Computing' },
      { name: 'PyTorch', proficiency: 'Intermediate', projects: 'ML Models' },
      { name: 'Hadoop', proficiency: 'Beginner', projects: 'Big Data' },
      { name: 'MySQL', proficiency: 'Advanced', projects: 'Database Design' },
      { name: 'MongoDB', proficiency: 'Intermediate', projects: 'NoSQL Databases' },
    ]
  },
  security: {
    title: 'Security & Networking',
    items: [
      { name: 'Metasploit', proficiency: 'Intermediate', projects: 'Security Research' },
      { name: 'OpenSSL', proficiency: 'Intermediate', projects: 'Encryption' },
      { name: 'Wireshark', proficiency: 'Beginner', projects: 'Network Analysis' },
    ]
  },
  other: {
    title: 'Other',
    items: [
      { name: 'Power BI', proficiency: 'Intermediate', projects: 'Business Intelligence' },
      { name: 'ServiceNow', proficiency: 'Advanced', projects: 'IT Service Management' },
    ]
  }
};

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkill = (categoryKey, skillName) => {
    const key = `${categoryKey}-${skillName}`;
    setExpandedSkill(expandedSkill === key ? null : key);
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([categoryKey, category], categoryIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-6 border-b border-accent/20 pb-2">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((skill, index) => {
                  const skillKey = `${categoryKey}-${skill.name}`;
                  const isExpanded = expandedSkill === skillKey;

                  return (
                    <div key={skill.name} className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => toggleSkill(categoryKey, skill.name)}
                        className={`w-full flex items-center justify-between p-4 border rounded-lg text-left transition-all duration-200 ${
                          isExpanded
                            ? 'border-accent bg-accent/5 shadow-sm'
                            : 'border-gray-200 hover:border-neutral hover:bg-base'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 ${isExpanded ? 'bg-accent' : 'bg-neutral'}`}></div>
                          <span className="text-sm font-medium text-primary">{skill.name}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp size={16} className="text-accent" />
                        ) : (
                          <ChevronDown size={16} className="text-neutral" />
                        )}
                      </motion.button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 p-4 bg-base rounded-lg border border-gray-100"
                        >
                          <div className="text-sm text-secondary font-medium mb-1">Proficiency: {skill.proficiency}</div>
                          <div className="text-sm text-neutral">Experience: {skill.projects}</div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
