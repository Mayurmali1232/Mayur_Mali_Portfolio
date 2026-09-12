
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from '../animations/framerVariants';
import Tilt from 'react-parallax-tilt';

const About = () => {

  const skills = [
    'Java',
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'JPA/Hibernate',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'JavaScript',
    'React JS',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Git',
    'CI/CD',
    'Jenkins',
    'GitHub Actions',
    'JUnit',
    'Mockito',
    'Sonarqube',
    'Docker',
    'Postman',
    'VS Code',
    'Eclipse IDE',
    'intelliJ IDEA',
    'Maven',
    'Tomcat',
  ];

  return (
    <section
      id="about"
      className="py-20 section-fade-in bg-[#0b0f19] text-white"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my journey, passion, and what drives me to
            create amazing digital experiences.
          </p>

        </motion.div>


        {/* ================= TOP SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">


          {/* ================= PROFILE CARD ================= */}

          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              className="h-full"
            >

              <div className="glass p-8 rounded-2xl hover-lift h-full flex flex-col justify-center">

                <div className="w-full min-h-[380px] bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl flex items-center justify-center">

                  <div className="text-center px-4">

                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">

                      <span className="text-4xl">
                        👨‍💻
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Java Full Stack Developer
                    </h3>

                    <p className="text-gray-300">
                      Building scalable enterprise applications
                    </p>

                  </div>

                </div>

              </div>

            </Tilt>

          </motion.div>


          {/* ================= MY STORY ================= */}

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <div className="glass p-8 rounded-2xl h-full flex flex-col">

              <h3 className="text-2xl font-bold text-white mb-6">
                My Story
              </h3>

              <div className="space-y-5 flex-1">

                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Java Full Stack Developer with a strong
                  interest in building scalable and user-friendly enterprise
                  applications. My journey started with curiosity about how
                  software applications work, and it has grown into hands-on
                  experience developing backend services and modern web
                  applications.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I work primarily with Java, Spring Boot, REST APIs,
                  Microservices, JPA/Hibernate, and PostgreSQL. I also have
                  experience with React JS for building responsive frontend
                  applications and integrating them with backend services.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I enjoy solving real-world problems, writing clean and
                  maintainable code, and continuously learning new technologies.
                  My goal is to contribute to reliable enterprise applications
                  while continuously improving my technical and problem-solving
                  skills.
                </p>

              </div>


              {/* ================= BUTTONS ================= */}

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mt-8"
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

            </div>

          </motion.div>

        </div>


        {/* ================= TECHNOLOGIES SECTION ================= */}

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8"
        >

          <div className="glass p-8 rounded-2xl">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Technologies I Love
                </h3>

                <p className="text-gray-400 mt-2">
                  Technologies and tools I use to build modern applications.
                </p>

              </div>

            </div>


            {/* ================= SKILLS GRID ================= */}

            <div className="flex flex-wrap gap-3">

              {skills.map((skill, index) => (

                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 text-white rounded-full text-sm font-medium hover-lift"
                >
                  {skill}
                </motion.span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;