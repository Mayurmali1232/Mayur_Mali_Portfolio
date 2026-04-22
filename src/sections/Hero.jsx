import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { fadeInUp, fadeInLeft, scaleIn } from '../animations/framerVariants';
import Scene from '../three/Scene';

const Hero = () => {
  const roles = [' Java Full Stack Developer', 'Database Developer', 'UI/UX Designer', 'React Developer', 'Problem Solver'];


  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f19] text-white"
    >
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/30 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          
          {/* Name */}
          <motion.h1
            variants={scaleIn}
            className="text-5xl md:text-7xl font-bold gradient-text"
          >
            Hi, I'm <span className="block">Mayur Mali</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeInLeft}
            className="text-xl md:text-2xl text-gray-300"
          >
            I'm a{' '}
            <span className="gradient-text font-semibold">
              <Typewriter
                words={roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
           Full Stack Java Developer passionate about developing responsive, user-friendly web applications using modern technologies like React, Spring Boot, and REST APIs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            
            {/* ✅ FIXED BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </motion.button>

            <motion.a
                  href="/Mayur_Mali_Resume.pdf"
                  download="Mayur_Mali_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 inline-block"
                >
  Download CV
</motion.a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;