import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="text-center relative z-10">
        {/* Spinner */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.15, 1]
          }}
          transition={{
            rotate: { duration: 1.8, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-purple-400 border-t-transparent shadow-[0_0_25px_rgba(168,85,247,0.7)]"
        />

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-2xl font-semibold tracking-wide"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Loading Portfolio...
          </span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 text-sm mt-2"
        >
          Please wait a moment
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;