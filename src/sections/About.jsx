import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/framerVariants';
import Tilt from 'react-parallax-tilt';

const About = () => {

  const skills = [
    'Java',
    'JavaScript',
    'React JS',
    'Spring Boot',
    'SQL',
    'PostgreSQL',
    'MySQL'
  ];

  return (
    <section id="about" className="py-20 section-fade-in bg-[#0b0f19] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image/Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>

              <div className="glass p-8 rounded-2xl hover-lift">

                <div className="w-full h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl flex items-center justify-center">

                  <div className="text-center">

                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-4xl">👨‍💻</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Creative Developer
                    </h3>

                    <p className="text-gray-300">
                      Building the future, one line at a time
                    </p>

                  </div>

                </div>

              </div>

            </Tilt>

          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="glass p-6 rounded-xl">

              <h3 className="text-2xl font-bold text-white mb-4">
                My Story
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am a passionate full-stack developer with a strong interest in building modern and
                user-friendly applications. My journey started with curiosity about how websites work, and it
                has grown into creating projects using technologies like Java, React JS, and PostgreSQL.
                I enjoy learning new skills, solving problems, and continuously improving as a developer.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I focus on writing clean and simple code while continuously learning new technologies.
                When I’m not coding, I like exploring new ideas, improving my skills, and working on
                personal projects to grow as a developer.
              </p>

            </div>

            <div className="glass p-6 rounded-xl">

              <h3 className="text-2xl font-bold text-white mb-4">
                Technologies I Love
              </h3>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill, index) => (

                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 text-white rounded-full text-sm font-medium hover-lift"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </div>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4"
            >

              {/* Connect Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 inline-block"
              >
                Let's Connect
              </motion.a>

              {/* Resume Button */}
              <a
                href="/Mayur_Mali_rsme.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  View Resume
                </motion.button>

              </a>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;