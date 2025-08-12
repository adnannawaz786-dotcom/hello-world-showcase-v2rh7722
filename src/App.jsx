import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Heart, Star, Zap, Sparkles, ArrowRight, Github, Twitter, Mail } from 'lucide-react'

function App() {
  const [likedCards, setLikedCards] = useState(new Set())
  const [activeTab, setActiveTab] = useState('showcase')

  const toggleLike = (cardId) => {
    const newLiked = new Set(likedCards)
    if (newLiked.has(cardId)) {
      newLiked.delete(cardId)
    } else {
      newLiked.add(cardId)
    }
    setLikedCards(newLiked)
  }

  const showcaseCards = [
    {
      id: 1,
      title: 'Modern Design',
      description: 'Beautiful glassmorphism effects with smooth animations',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      stats: { views: '2.4k', likes: '156' }
    },
    {
      id: 2,
      title: 'Responsive Layout',
      description: 'Perfectly adapts to any screen size and device',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      stats: { views: '1.8k', likes: '203' }
    },
    {
      id: 3,
      title: 'Interactive Elements',
      description: 'Engaging buttons, cards, and micro-interactions',
      icon: Star,
      color: 'from-emerald-500 to-teal-500',
      stats: { views: '3.2k', likes: '287' }
    }
  ]

  const buttonVariants = [
    { variant: 'default', label: 'Primary' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'outline', label: 'Outline' },
    { variant: 'ghost', label: 'Ghost' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/20 dark:to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 shadow-lg"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Hello World
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A stunning showcase of modern UI components with beautiful layouts, interactive elements, and responsive design
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View on GitHub <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Components', value: '50+' },
                { label: 'Animations', value: '100+' },
                { label: 'Variants', value: '25+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full p-1 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {[
              { id: 'showcase', label: 'Showcase' },
              { id: 'buttons', label: 'Buttons' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className="rounded-full"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {activeTab === 'showcase' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {showcaseCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(card.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Heart className={`w-4 h-4 ${likedCards.has(card.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <Badge variant="secondary">{card.stats.views} views</Badge>
                        <Badge variant="outline">{card.stats.likes} likes</Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'buttons' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Button Showcase</CardTitle>
                <CardDescription>Explore different button variants and styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {buttonVariants.map((btn, index) => (
                    <motion.div
                      key={btn.variant}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button variant={btn.variant} className="w-full">
                        {btn.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Star className="mr-2 h-4 w-4" /> Gradient
                  </Button>
                  <Button variant="outline">
                    <Zap className="mr-2 h-4 w-4" /> With Icon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>Connect with us through various channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="lg">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </Button>
                  <Button variant="outline" size="lg">
                    <Twitter className="mr-2 h-5 w-5" /> Twitter
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2 h-5 w-5" /> Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default App