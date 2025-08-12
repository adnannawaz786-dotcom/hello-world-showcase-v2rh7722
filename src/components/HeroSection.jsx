import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Glass Morphism Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="relative">
            <motion.div
              className="absolute -top-16 -left-16 text-purple-400 opacity-60"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <Sparkles size={32} />
            </motion.div>
            <motion.div
              className="absolute -top-12 -right-12 text-blue-400 opacity-60"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
            >
              <Zap size={28} />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 left-8 text-pink-400 opacity-60"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2 }}
            >
              <Heart size={24} />
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hello World
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed">
                Welcome to a beautiful showcase of modern
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">
                  {" "}UI design
                </span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover the perfect blend of React, Vite, and Tailwind CSS with stunning glass morphism effects, 
                smooth animations, and responsive design that adapts to any device.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <motion.div
                className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">React</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Modern Framework</div>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Vite</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lightning Fast</div>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">Tailwind</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Beautiful Design</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;