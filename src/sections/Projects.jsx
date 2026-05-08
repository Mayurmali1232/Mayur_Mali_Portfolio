import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/framerVariants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const projects = [
    {
      title: 'College Event Management System',
      description: 'A web-based application to manage college events, allowing users to view and register for events while enabling admins to create and manage event details efficiently.',
      image: '/Collage_pht.jpg',
      technologies: ['Java', 'Spring Boot', 'Hibernate (JPA)', 'PostgreSQL', 'HTML', 'CSS', "Tailwind CSS", 'React Js', 'JavaScript'],
      github: 'https://github.com/Mayurmali1232',
      live: 'https://college-event-frontend1-seven.vercel.app',
      featured: true
    },
    {
      title: 'Real Estate Management System',
      description: 'A web-based application that allows users to browse, add, and manage property listings. It provides features for property search, details viewing, and admin management of listings and users.',
      image: '/real_estate.jpg',
      technologies: ['Java', 'Spring Boot', 'Hibernate (JPA)', 'PostgreSQL', 'HTML', 'CSS', "Tailwind CSS", 'React Js', 'JavaScript'],
      github: 'https://github.com/Mayurmali1232/college-event-backend',
      live: 'https://college-event-frontend1-seven.vercel.app/',
      featured: true
    },
        {
      title: ' To Do App',
      description: 'A simple React-based To-Do application that allows users to add, update, delete, and manage daily tasks with an easy-to-use interface.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Local Storage', 'Tailwind CSS'],
      github: 'https://github.com/Mayurmali1232/react-todo-app',
      live: 'https://react-todo-app-phi-gilt.vercel.app',
      featured: true
    },

    // {
    //   title: 'Weather Dashboard',
    //   description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts using modern APIs.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    //   github: 'https://github.com/Mayurmali1232',
    //   live: 'https://example.com',
    //   featured: false
    // },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Three.js, featuring 3D animations and smooth scrolling.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Mayurmali1232',
      live: 'https://example.com',
      featured: false
    },
    // {
    //   title: 'Blog Platform',
    //   description: 'A full-featured blog platform with markdown support, SEO optimization, and content management system.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['Next.js', 'Sanity CMS', 'Vercel', 'Tailwind CSS'],
    //   github: 'https://github.com/Mayurmali1232',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Fitness Tracker',
    //   description: 'A mobile-first fitness tracking app with workout plans, progress tracking, and social features.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    //   github: 'https://github.com/Mayurmali1232',
    //   live: 'https://example.com',
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 section-fade-in bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and creative projects.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="project-card"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
                <div className="glass rounded-xl overflow-hidden hover-lift h-full">
                  
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover project-image"
                    />

                    <div className="project-overlay absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>

                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: -2 }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </motion.a>

                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white">Other Projects</h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="glass rounded-xl p-6 hover-lift"
            >
              <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex space-x-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 text-center py-2 bg-gray-700/80 text-white rounded hover:bg-gray-600 transition-all duration-300 text-sm"
                >
                  Code
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 text-center py-2 glass text-white rounded hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Demo
                </motion.a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;