import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Eye, Github, ExternalLink, Code, Lightbulb, Target } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'MenuMatch',
    description: 'Web app for restaurant discovery & reviews using dietary preferences, Google APIs, NLP & ML recommendations.',
    thumbnail: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#3b82f6"/><circle cx="200" cy="125" r="60" fill="white" opacity="0.9"/><path d="M160 100h80v50h-80z" fill="#ef4444"/><circle cx="180" cy="115" r="8" fill="#fbbf24"/><circle cx="220" cy="115" r="8" fill="#fbbf24"/><rect x="190" y="135" width="20" height="10" rx="5" fill="#fbbf24"/><text x="200" y="220" text-anchor="middle" fill="white" font-family="system-ui" font-size="16" font-weight="600">Restaurant Discovery</text></svg>')}`,
    demoUrl: 'https://menumatch.vercel.app', // placeholder
    githubUrl: 'https://github.com/vignesh0122/MenuMatch',
    technologies: ['Flask', 'Angular', 'Docker', 'AWS EC2', 'Jenkins', 'JIRA'],
    build: 'Developed a full-stack application integrating Google Maps and Places APIs for location-based restaurant finding, implemented NLP processing for dietary preferences analysis, and deployed with Docker containers and CI/CD pipeline on AWS.',
    tech: 'Python (Flask), Angular, Google APIs, NLP, Docker, AWS EC2, Jenkins',
    challenges: 'Geospatial data processing, API rate limiting, ML model optimization',
    solution: 'Implemented efficient caching mechanisms, optimized API calls, and fine-tuned recommendation algorithm achieving 85% user satisfaction rate.',
    impact: 'Streamlined restaurant discovery process for users with dietary restrictions.'
  },
  {
    id: 2,
    title: 'IOT Smart Home Using Arduino',
    description: 'Arduino + voice recognition for home automation; mobile app integration.',
    thumbnail: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#10b981"/><rect x="180" y="100" width="40" height="80" rx="5" fill="#374151"/><circle cx="200" cy="130" r="8" fill="#ef4444"/><rect x="160" y="50" width="80" height="40" rx="20" fill="#6b7280" opacity="0.8"/><rect x="190" y="30" width="20" height="20" fill="#f59e0b"/><text x="200" y="220" text-anchor="middle" fill="white" font-family="system-ui" font-size="16" font-weight="600">Smart Home IoT</text></svg>')}`,
    demoUrl: 'https://iot-demo.vercel.app', // placeholder
    githubUrl: 'https://github.com/vignesh0122/IOT-Smart-Home',
    technologies: ['Arduino', 'Python', 'Mobile App', 'Voice Recognition'],
    build: 'Built an IoT system using Arduino Uno with voice recognition module, integrated sensors for lights/fans/alarms, developed companion mobile app for remote control, and implemented hands-free interaction through natural language processing.',
    tech: 'Arduino, Python, Flutter, GCP Speech API, Raspberry Pi',
    challenges: 'Hardware-software integration, voice accuracy in noisy environments',
    solution: 'Used noise-cancellation algorithms, implemented fallback gesture controls, and deployed on Raspberry Pi for reliable performance.',
    impact: 'Created affordable smart home solution with 95% command accuracy.'
  },
  {
    id: 3,
    title: 'Law-Run Kernel',
    description: 'Custom Linux 4.9 kernel for Snapdragon 845 — integrated CAF + upstream patches.',
    thumbnail: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#6366f1"/><circle cx="200" cy="125" r="70" fill="#1f2937"/><path d="M160 110h80m-80 15h80m-80 15h40" stroke="white" stroke-width="3" stroke-linecap="round"/><circle cx="180" cy="100" r="4" fill="#10b981"/><circle cx="220" cy="100" r="4" fill="#10b981"/><text x="200" y="220" text-anchor="middle" fill="white" font-family="system-ui" font-size="16" font-weight="600">Linux Kernel</text></svg>')}`,
    demoUrl: null,
    githubUrl: 'https://github.com/vignesh0122/Law-Run-Kernel',
    technologies: ['Linux Kernel', 'C', 'CAF', 'Snapdragon 845', 'Device Tree'],
    build: 'Developed and maintained a custom Linux kernel for Qualcomm Snapdragon 845 devices, integrated Code Aurora Forum (CAF) sources with upstream Linux patches, added security drivers and published for community use.',
    tech: 'C, Linux Kernel Development, CAF, Git, Device Tree Overlays',
    challenges: 'Kernel stability, driver compatibility, security patch integration',
    solution: 'Systematic patch management, extensive testing on multiple devices, documentation for reproducibility.',
    impact: 'Improved device performance by 30% and enhanced security posture for Snapdragon 845 devices.'
  },
  {
    id: 4,
    title: 'Diamond Price Prediction',
    description: 'Machine learning model to predict diamond prices based on 4C parameters using regression algorithms.',
    thumbnail: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#8b5cf6"/><path d="M200 50l40 60l-58 17v69l-22-69l-58-17l58-67z" fill="#fbbf24"/><circle cx="180" cy="110" r="3" fill="white"/><circle cx="200" cy="125" r="3" fill="white"/><circle cx="220" cy="110" r="3" fill="white"/><text x="200" y="220" text-anchor="middle" fill="white" font-family="system-ui" font-size="16" font-weight="600">ML Prediction</text></svg>')}`,
    demoUrl: 'https://diamond-predictor.vercel.app', // placeholder
    githubUrl: 'https://github.com/vignesh0122/Diamond_Price_Prediction',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
    build: 'Developed a regression model predicting diamond prices from carat, cut, color, clarity parameters. Preprocessed data, trained multiple models (Linear Regression, Random Forest, Gradient Boosting), and created visualization dashboard.',
    tech: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Streamlit',
    challenges: 'Feature engineering, model overfitting, interpretation of predictions',
    solution: 'Feature scaling, cross-validation, and ensembling techniques achieving 92% prediction accuracy.',
    impact: 'Provided accurate price estimations helping consumers make informed jewelry purchase decisions.'
  },
  {
    id: 5,
    title: 'Fake Banknote Detection',
    description: 'ML classification system to distinguish genuine and counterfeit banknotes using image processing and SVM.',
    thumbnail: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#059669"/><rect x="150" y="100" width="100" height="50" rx="5" fill="#374151"/><circle cx="170" cy="115" r="6" fill="#fbbf24"/><circle cx="200" cy="115" r="6" fill="#fbbf24"/><circle cx="230" cy="115" r="6" fill="#fbbf24"/><path d="M160 140h80m-60-10h40m-60 20h40" stroke="white" stroke-width="2"/><text x="200" y="220" text-anchor="middle" fill="white" font-family="system-ui" font-size="16" font-weight="600">Banknote Detection</text></svg>')}`,
    demoUrl: 'https://banknote-detection.vercel.app', // placeholder
    githubUrl: 'https://github.com/vignesh0122/Fake_Banknote_Detection',
    technologies: ['Python', 'OpenCV', 'SVM', 'Pandas', 'Scikit-learn'],
    build: 'Built a computer vision system using image processing techniques to extract features from banknote images, trained SVM classifier to distinguish genuine vs fake notes, and developed web interface for real-time detection.',
    tech: 'Python, OpenCV, SVM, Flask, Scikit-learn, JavaScript',
    challenges: 'Image preprocessing for varying conditions, class imbalance, real-time performance',
    solution: 'Advanced image segmentation, SMOTE for balancing data, optimized model for web deployment.',
    impact: 'Achieved 98% accuracy in banknote authentication, demonstrating potential for automated fraud detection.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="card overflow-hidden group"
    >
      <div className="aspect-video bg-base relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f8fafc"><rect width="400" height="250" fill="#f1f5f9"/><text x="200" y="125" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="16" font-weight="500">Project Preview</text></svg>')}`;
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-neutral text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-neutral text-xs rounded-full font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setSelectedProject(project)}
            className="btn-secondary flex items-center text-sm"
          >
            <Eye size={16} className="mr-2" />
            Details
          </button>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center text-sm"
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center text-sm"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );

  const Modal = ({ project }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="#f3f4f6"><rect width="400" height="250" fill="#e5e7eb"/><text x="200" y="125" text-anchor="middle" fill="#6b7280" font-size="18">Project Demo</text></svg>')}`;
                }}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3 flex items-center">
                  <Lightbulb size={20} className="mr-2 text-blue-600" />
                  What I Built
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.build}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3 flex items-center">
                  <Code size={20} className="mr-2 text-blue-600" />
                  Technologies Used
                </h3>
                <p className="text-gray-600 text-sm">{project.tech}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3 flex items-center">
                  <Target size={20} className="mr-2 text-blue-600" />
                  Why It Matters
                </h3>
                <p className="text-gray-600 text-sm">{project.impact}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-red-800 mb-2">Challenge</h4>
                  <p className="text-xs text-red-700">{project.challenges}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Solution</h4>
                  <p className="text-xs text-green-700">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-base">
      {selectedProject && <Modal project={selectedProject} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
