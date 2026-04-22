import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Mayurmali1232', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mayur-mali-290577336/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'https://mail.google.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#0b0f19] text-white mt-20 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Portfolio
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Creating amazing digital experiences with modern technologies and clean UI design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect
            </h4>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 mt-10 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Portfolio. Built with passion by Mayur Mali.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;