import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
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

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Certifications */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
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
                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md p-6 block transition-all border border-gray-100"
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
                    <p className="text-xs text-gray-500 mb-2">Credential ID: {cert.credentialId}</p>
                    <span className="text-xs font-medium text-blue-600">View Certificate →</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Achievements */}
          <div className="text-center">
            <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-8">Additional Achievements</h3>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-lg font-semibold font-poppins text-gray-900 mb-2">Bronze Medal</h4>
                  <p className="text-sm text-gray-600">District Powerlifting Championship, Bengaluru</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="text-lg font-semibold font-poppins text-gray-900 mb-2">2nd Rank</h4>
                  <p className="text-sm text-gray-600">Information Science Department, GPA: 3.9/4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
