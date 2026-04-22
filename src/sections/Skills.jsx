import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/framerVariants';

import {
  FaReact, FaDatabase, FaGitAlt, FaJava, FaCode,
  FaGithub
} from 'react-icons/fa';

import {
  SiJavascript, SiPostgresql, SiTailwindcss,
  SiFigma, SiHtml5, SiSpringboot, SiSpring, SiHibernate, SiMysql,
  SiPostman,
  SiEclipseide,
  SiApachemaven,
  SiApachetomcat
} from 'react-icons/si';

import { FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', icon: SiHtml5, level: 90 },
       { name: 'CSS3', icon: FaCss3Alt, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'React js', icon: FaReact, level: 90 }
      ]
    },

    {
      title: 'Backend and Database',
      skills: [
        { name: 'Java', icon: FaJava, level: 90 },
        { name: 'Spring Boot', icon: SiSpringboot, level: 90 },
        { name: 'Spring Data JPA', icon: SiSpring, level: 90 },
        { name: 'Spring MVC', icon: SiSpring, level: 90 },
        { name: 'API Development', icon: FaCode, level: 90 },
        { name: 'Hibernate(JPA)', icon: SiHibernate, level: 90 },
        { name: 'JDBC', icon: FaDatabase, level: 90 },
        { name: 'SQL', icon: FaDatabase, level: 90 },
        { name: 'PL/SQL', icon: FaDatabase, level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
        { name: 'MYSQL', icon: SiMysql, level: 90 },
      ]
    },
    
   {
  title: 'Tools & Others',
  skills: [
    { name: 'Git', icon: FaGitAlt, level: 90 },
    { name: 'GitHub', icon: FaGithub, level: 90 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
    { name: 'VS Code', icon: VscCode, level: 90 },
    { name: 'Postman', icon: SiPostman, level: 85 },
    { name: 'Eclipse', icon: SiEclipseide, level: 85 },
    { name: 'STS', icon: SiSpring, level: 85 },
    { name: 'Maven', icon: SiApachemaven, level: 80 },
    { name: 'Tomcat', icon: SiApachetomcat, level: 80 },
    { name: 'SQL Plus', icon: FaDatabase, level: 80 },
    { name: 'Database Design', icon: FaDatabase, level: 80 }
  ]
}
  ];

  return (
    <section id="skills" className="py-20 section-fade-in bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="glass p-6 rounded-xl hover-lift"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    
                    <div className="flex-shrink-0">
                      <skill.icon className="w-8 h-8 text-blue-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-700/60 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full skill-bar shadow-md shadow-purple-500/20"
                        />
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Other Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass text-gray-300 rounded-full text-sm font-medium hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;