import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Star } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: 'Boston University',
    degree: 'Master of Science in Computer Science',
    location: 'Boston, MA',
    period: 'Sep 2024 - Jan 2026',
    gpa: '3.85/4.0',
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

const certificationsData = [
  {
    id: 1,
    title: 'Introduction to Programming with Python and Java',
    issuer: 'University of Pennsylvania',
    platform: 'Coursera',
    year: '2024',
    credentialId: 'Z7GSZ37TBFAK',
    link: 'https://coursera.org/verify/Z7GSZ37TBFAK',
    icon: '🐍'
  },
  {
    id: 2,
    title: 'Google Data Analytics Specialization',
    issuer: 'Google',
    platform: 'Coursera',
    year: '2024',
    credentialId: '8HCNNMFQPLTZ',
    link: 'https://coursera.org/verify/8HCNNMFQPLTZ',
    icon: '📊'
  }
];

const achievementsData = [
  {
    id: 1,
    title: 'Bronze Medal in District Powerlifting Championship',
    description: 'District-level championship held in Bengaluru',
    year: '2023',
    category: 'Sports'
  },
  {
    id: 2,
    title: '2nd Rank in Information Science Department',
    description: 'Overall department ranking with GPA 3.9/4.0 across examinations',
    year: '2023-24',
    category: 'Academic'
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  💼
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

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-poppins text-gray-900 text-center mb-8">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 block transition-all"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                    <Award size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold font-poppins text-gray-900 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {cert.issuer} • {cert.platform}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
                      <span className="text-xs font-medium text-blue-600">View Certificate →</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold font-poppins text-gray-900 text-center mb-8">
            Achievements
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                  <Star size={20} className="text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold font-poppins text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
