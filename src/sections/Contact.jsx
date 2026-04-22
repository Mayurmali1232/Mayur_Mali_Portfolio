import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/framerVariants';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_xoug4uo',   // from Email Services
    'template_9806yrs',  // from Templates
    formData,            // your form data
    '54q0hf02uh227gZIR'    // from API Keys
  )
  .then((result) => {
    alert('Message sent successfully ✅');
  })
  .catch((error) => {
    console.log(error);
    alert('Failed to send message ❌');
  });

  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
};

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mayurmali13197@gmail.com',
      href: 'mailto:mayurmali13197@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8080656265',
      href: 'tel:+91 8080656265'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 section-fade-in bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I am actively looking for opportunities to start my career as a Software Developer.
            Feel free to reach out for any opportunities or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I am a fresher passionate about software development with skills in Java, React JS, and PostgreSQL.
                I enjoy building projects and learning new technologies.
                I am looking for an opportunity where I can apply my skills, learn from experienced professionals,
                and grow in the IT industry.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 glass p-4 rounded-xl hover-lift group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <info.icon className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/Mayurmali1232' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mayur-mali-290577336' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 glass text-gray-300 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Enter your Email"
                  />
                </motion.div>

              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;