import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: 'Boston University',
    degree: 'Master of Science in Computer Science',
    location: 'Boston, MA',
    period: 'Sep 2024 - Jan 2026',
    gpa: '3.65/4.0',
    courses: ['Software Engineering', 'Data Science with Python', 'Advanced Machine Learning', 'Deep Reinforcement Learning'],
    icon: '🎓',
    logo: 'BU'
  },
  {
    id: 2,
    institution: 'Visvesvaraya Technological University',
    degree: 'Bachelor of Engineering in Information Science',
    location: 'Bengaluru, India',
    period: 'May 2024',
    gpa: '3.60/4.0',
    courses: ['AIML', 'Data Structures and Algorithms', 'Database Management', 'Cryptography'],
    icon: '👨‍🎓',
    logo: 'VTU'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-6">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 gap-1 sm:gap-4 mb-4">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </span>
                    <span className="text-gray-500">
                      {edu.period}
                    </span>
                    <span className="font-medium text-green-600">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
