import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/framerVariants';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      content: 'Exceptional work! The portfolio showcases incredible attention to detail and modern design principles.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Jane Smith',
      role: 'Designer, Creative Agency',
      content: 'The 3D animations and smooth interactions make this portfolio stand out from the crowd.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Mike Johnson',
      role: 'CTO, StartupXYZ',
      content: 'Impressive technical skills and clean code. Would definitely recommend for any project.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  return (
    <section id="testimonials" className="py-20 section-fade-in bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Testimonials</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients and colleagues say about my work and collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass p-6 rounded-2xl hover-lift"
            >
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl mr-4 shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-blue-400/40 text-2xl mb-2" />
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;