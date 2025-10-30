import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const publicationsData = [
  {
    id: 1,
    title: 'AI Based Security Surveillance System - An Overview',
    conference: 'International Conference on Advances in Artificial Intelligence and Computer Science (ICAAICS-2024)',
    location: 'Chennai, India',
    summary: 'Comprehensive overview of AI-powered surveillance systems, covering deep learning techniques for object detection, facial recognition, anomaly detection, and real-time threat assessment in security applications.',
    link: 'https://ijaecs.iraj.in/paper_detail.php?paper_id=20570&nameAi_Based_Security_Survillanace_System-_An_Overview',
    year: '2024'
  },
  {
    id: 2,
    title: 'AI and Blockchain in Food and Beverage - Marketing 5.0 Approach',
    conference: '7th International Conference on Innovative Computing and Communication',
    location: 'Delhi, India',
    summary: 'Exploration of how AI and Blockchain technologies can revolutionize food and beverage industry marketing, implementing Marketing 5.0 principles for personalized, transparent, and technology-driven marketing strategies.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-3591-4_5',
    publisher: 'Springer LNNS series',
    year: '2024'
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Research & Publications
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8"
            >
              <div className="flex items-start mb-4">
                <FileText size={24} className="text-blue-600 mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-2">
                    {pub.conference}
                    {pub.publisher && (
                      <span className="block text-blue-600 font-medium">
                        {pub.publisher}
                      </span>
                    )}
                    <span className="block">{pub.location} • {pub.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {pub.summary}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Conference Paper
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Read Paper
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm">
            More research work available on my university profile and Google Scholar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
