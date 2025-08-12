import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Download, 
  Heart, 
  Share2, 
  Settings, 
  ChevronRight,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Check,
  AlertCircle,
  Info,
  Zap,
  Star,
  ArrowRight,
  Send
} from 'lucide-react';

const ButtonShowcase = () => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto p-8 space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Primary Buttons */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Primary Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Play size={20} />
            Get Started
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Download size={20} />
            Download
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLiked(!liked)}
            className={`px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${
              liked 
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
            }`}
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            {liked ? 'Liked' : 'Like'}
          </motion.button>
        </div>
      </motion.section>

      {/* Glass Buttons */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Glass Morphism Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/30 rounded-xl text-gray-800 dark:text-white font-medium shadow-xl hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Share2 size={20} />
            Share
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 backdrop-blur-lg bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-xl text-gray-800 dark:text-white font-medium shadow-xl hover:from-white/30 hover:to-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Settings size={20} />
            Settings
          </motion.button>
        </div>
      </motion.section>

      {/* Outline Buttons */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Outline Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center gap-2"
          >
            <Plus size={20} />
            Add Item
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#ef4444' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-red-500 hover:text-red-500 transition-all duration-300 flex items-center gap-2"
          >
            <Trash2 size={20} />
            Delete
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#10b981' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 flex items-center gap-2"
          >
            <Edit size={20} />
            Edit
          </motion.button>
        </div>
      </motion.section>

      {/* Icon Buttons */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Icon Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Play size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/30 rounded-full shadow-lg hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
          >
            <Settings size={20} className="text-gray-800 dark:text-white" />
          </motion.button>
        </div>
      </motion.section>

      {/* State Buttons */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          State Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            onClick={handleAsyncAction}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Saving...
              </>
            ) : saved ? (
              <>
                <Check size={20} />
                Saved!
              </>
            ) : (
              <>
                <Save size={20} />
                Save Changes
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <AlertCircle size={20} />
            Warning
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Info size={20} />
            Info
          </motion.button>
        </div>
      </motion.section>

      {/* Special Effects */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Special Effects
        </h2>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Zap size={20} />
            Premium
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -1, 1, -1, 0],
              transition: { rotate: { duration: 0.5 } }
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Star size={20} />
            Featured
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              x: 5
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          >
            Continue
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ButtonShowcase;