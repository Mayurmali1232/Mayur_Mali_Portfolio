import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft } from '../animations/framerVariants';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Developer Intern',
      company: 'Test Yantra',
      location: 'Bengaluru, India',
      period: 'June 2025 - Dec 2025',
      description: [
        'Developed and debugged Java-based applications during a 7-month internship',
        'Worked with databases to perform CRUD operations',
        'Collaborated with team members to fix bugs and improve performance',
        'Worked with APIs and understood HTTP protocol',
        'Participated in Agile practices like daily standups and sprint planning'
      ],
      technologies: ['Java', 'JDBC', 'PostgreSQL', 'REST API']
    }
  ];

  return (
    <section id="experience" className="py-20 section-fade-in bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As a fresher, I have gained hands-on experience through internships and real-world projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0b0f19] hidden md:block" />

                <div className="glass rounded-xl p-6 ml-0 md:ml-16 hover-lift">

                  {/* Title */}
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>

                      <div className="flex flex-col sm:flex-row gap-2 text-gray-300">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-blue-400" />
                          {exp.company}
                        </span>

                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-purple-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 mt-2 md:mt-0">
                      <FaCalendar className="text-green-400" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description as list */}
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Education</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="glass rounded-xl p-6 hover-lift">
              <h4 className="text-xl font-bold text-white mb-2">
                B.Tech In Computer Science and Engineering
              </h4>
              <p className="text-blue-400 mb-2">Godavari College of Engineering</p>
              <p className="text-gray-300 mb-4">2021 - 2025</p>
              <p className="text-gray-300">
                Focused on software development, Java, databases, and web technologies.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <h4 className="text-xl font-bold text-white mb-2">
                Internship Training
              </h4>
              <p className="text-purple-400 mb-2">Test Yantra</p>
              <p className="text-gray-300 mb-4">2025</p>
              <p className="text-gray-300">
                Completed hands-on training in Java, SQL, and real-world project development.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;