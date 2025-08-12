import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Share2, MessageCircle, TrendingUp, Users, Award, Calendar, MapPin, Clock, ArrowRight, ExternalLink, Bookmark, Eye, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';

const CardShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-12 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Card Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our collection of beautifully designed cards with glass morphism effects and smooth animations
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Glass Card 1 */}
          <motion.div
            className="backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
            {...hoverVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Bookmark className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Track your performance with real-time insights and beautiful visualizations.</p>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Glass Card 2 */}
          <motion.div
            className="backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
            {...hoverVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                <Users className="w-6 h-6 text-white" />
              </div>
              <Share2 className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Work together seamlessly with advanced collaboration tools and features.</p>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              Join Team <Users className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Glass Card 3 */}
          <motion.div
            className="backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 shadow-xl"
            variants={cardVariants}
            whileHover="hover"
            {...hoverVariants}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                <Award className="w-6 h-6 text-white" />
              </div>
              <Star className="w-5 h-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Achievement System</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Unlock rewards and track your progress with our gamified experience.</p>
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              View Rewards <Award className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Social Post Card */}
          <motion.div
            className="backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-3xl p-6 border border-white/40 shadow-2xl"
            variants={cardVariants}
            whileHover="hover"
            {...hoverVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800 dark:text-white">John Smith</h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  2 hours ago
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just launched our new design system! The glass morphism effects and animations turned out amazing. 
              What do you think about this modern approach? 🚀
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5 mr-2" />
                  <span>24</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>8</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5 mr-2" />
                  <span>Share</span>
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Event Card */}
          <motion.div
            className="backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-3xl p-6 border border-white/40 shadow-2xl"
            variants={cardVariants}
            whileHover="hover"
            {...hoverVariants}
          >
            <div className="relative mb-4">
              <div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white font-semibold">FREE</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Design Conference 2024</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>San Francisco, CA</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join us for an inspiring day of design talks, workshops, and networking with industry leaders.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1 text-gray-400" />
                <span className="text-sm text-gray-500">1.2k interested</span>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                Register Now
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { icon: Eye, label: 'Views', value: '2.4K', color: 'from-blue-500 to-cyan-500' },
            { icon: ThumbsUp, label: 'Likes', value: '1.8K', color: 'from-green-500 to-emerald-500' },
            { icon: Share2, label: 'Shares', value: '342', color: 'from-purple-500 to-pink-500' },
            { icon: MessageCircle, label: 'Comments', value: '128', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/25 dark:bg-white/10 rounded-2xl p-6 border border-white/30 shadow-xl text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardShowcase;