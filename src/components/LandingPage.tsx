import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  Globe, 
  Shield, 
  Star,
  CheckCircle,
  Play,
  Menu,
  X,
  MessageSquare,
  BarChart3,
  Settings,
  Headphones,
  Video
} from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const agents = [
    { name: 'Alex', role: 'Team Leader', avatar: '👑', description: 'Coordinates and distributes tasks' },
    { name: 'Dev', role: 'Developer', avatar: '💻', description: 'Handles coding and technical solutions' },
    { name: 'Maya', role: 'Manager', avatar: '📊', description: 'Manages operations and planning' },
    { name: 'Mark', role: 'Marketing', avatar: '📈', description: 'Drives campaigns and growth' },
    { name: 'Sophie', role: 'Customer Service', avatar: '💬', description: 'Ensures client satisfaction' },
    { name: 'Victor', role: 'Problem Solver', avatar: '🔧', description: 'Resolves issues and optimizes' },
    { name: 'Stella', role: 'Strategy', avatar: '🎯', description: 'Plans growth and innovation' }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Instant Website Creation',
      description: 'Generate professional business websites in minutes with AI-powered design and content.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '7 AI Agents Team',
      description: 'Your dedicated AI workforce handling everything from development to customer service.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Automation',
      description: 'Automate operations, marketing, and management with intelligent AI systems.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encrypted data and secure cloud infrastructure.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Track performance, growth metrics, and business insights in real-time.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'AI Communication',
      description: 'Chat with your AI agents using natural language and voice commands.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Login & Answer Questions',
      description: 'Sign up and tell us about your business vision, niche, and preferences.',
      icon: <Settings className="w-12 h-12" />
    },
    {
      number: '02',
      title: 'Get AI-Generated Website',
      description: 'Watch as our AI creates a stunning, professional website tailored to your business.',
      icon: <Globe className="w-12 h-12" />
    },
    {
      number: '03',
      title: 'Manage with 7 AI Agents',
      description: 'Your AI team takes over operations, marketing, development, and customer service.',
      icon: <Users className="w-12 h-12" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Tech Startup Founder',
      content: 'AI StartupBuilder transformed my idea into a fully functional business in just 24 hours. The AI agents handle everything!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'E-commerce Entrepreneur',
      content: 'The level of automation is incredible. My AI team manages customer service, marketing, and operations seamlessly.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'Consultant',
      content: 'From website creation to client management, this platform handles it all. It\'s like having a full team at a fraction of the cost.',
      rating: 5,
      avatar: '👩‍🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F4] via-[#F4A261]/5 to-[#FFD700]/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="text-3xl">🤖</div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                  AI StartupBuilder
                </h1>
                <p className="text-xs text-[#8B5E3C]">Build. Automate. Grow.</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Features</a>
              <a href="#video" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Demo</a>
              <a href="#how-it-works" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">How It Works</a>
              <a href="#agents" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">AI Agents</a>
              <a href="#testimonials" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Reviews</a>
              <button
                onClick={onGetStarted}
                className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white rounded-xl hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#8B5E3C]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-[#FFD700]/20"
            >
              <div className="flex flex-col gap-4 pt-4">
                <a href="#features" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Features</a>
                <a href="#video" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Demo</a>
                <a href="#how-it-works" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">How It Works</a>
                <a href="#agents" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">AI Agents</a>
                <a href="#testimonials" className="text-[#8B5E3C] hover:text-[#F4A261] transition-colors">Reviews</a>
                <button
                  onClick={onGetStarted}
                  className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="px-4 py-2 bg-[#FFD700]/20 text-[#8B5E3C] rounded-full text-sm font-medium">
                  🚀 The Future of Business Building
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#2C2C2E] mb-6 leading-tight">
                Build, Automate,{' '}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                  Grow
                </span>
              </h1>
              
              <p className="text-xl text-[#8B5E3C]/80 mb-8 leading-relaxed">
                With the Power of AI. Create professional websites and automate your entire business 
                with 7 specialized AI agents working 24/7 for your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white 
                           font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                           flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-[#FFD700]/30
                           text-[#2C2C2E] font-medium rounded-2xl hover:bg-white/70 transition-all
                           flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <GlassmorphicCard className="p-8">
                <div className="space-y-6">
                  {/* Mock Dashboard */}
                  <div className="h-4 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-full"></div>
                  <div className="grid grid-cols-3 gap-4">
                    {agents.slice(0, 6).map((agent, index) => (
                      <motion.div
                        key={agent.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-[#FAF8F4] rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl mb-2">{agent.avatar}</div>
                        <div className="text-xs font-medium text-[#2C2C2E]">{agent.name}</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2"></div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="h-20 bg-[#F4A261]/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="text-[#F4A261]" size={32} />
                  </div>
                </div>
              </GlassmorphicCard>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-xl text-white"
              >
                <Sparkles size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section id="video" className="py-20 px-6 bg-gradient-to-r from-[#FFD700]/5 to-[#F4A261]/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
              See AI StartupBuilder in{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-xl text-[#8B5E3C]/80 max-w-3xl mx-auto">
              Watch how our AI agents work together to build, automate, and grow your business in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <GlassmorphicCard className="p-4 md:p-8">
              <div className="relative aspect-video bg-gradient-to-br from-[#2C2C2E] to-[#8B5E3C] rounded-2xl overflow-hidden">
                {/* Video Placeholder with Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 w-24 h-24 border-4 border-[#FFD700]/30 rounded-full"
                    />
                  </motion.button>
                </div>

                {/* Video Background Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="text-[#FFD700]" size={20} />
                      <span className="text-white font-medium">AI StartupBuilder Demo</span>
                    </div>
                    <div className="text-sm text-white/80">
                      Watch how 7 AI agents create and manage your entire business ecosystem
                    </div>
                  </div>
                </div>

                {/* Floating Demo Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute top-20 right-8 bg-[#FFD700] text-[#2C2C2E] px-3 py-2 rounded-lg text-sm font-medium"
                >
                  Website Generated ✓
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-20 right-8 bg-[#F4A261] text-white px-3 py-2 rounded-lg text-sm font-medium"
                >
                  AI Agents Active ✓
                </motion.div>
              </div>
            </GlassmorphicCard>

            {/* Video Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">2:30</div>
                <div className="text-[#8B5E3C]">Average Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4A261] mb-2">7</div>
                <div className="text-[#8B5E3C]">AI Agents Working</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5E3C] mb-2">24/7</div>
                <div className="text-[#8B5E3C]">Business Automation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-[#8B5E3C]/80 max-w-3xl mx-auto">
              From website creation to business automation, our AI-powered platform handles every aspect of your business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassmorphicCard className="p-8 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-[#F4A261] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">{feature.title}</h3>
                  <p className="text-[#8B5E3C]/80">{feature.description}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-r from-[#FFD700]/5 to-[#F4A261]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
              How It{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-[#8B5E3C]/80 max-w-3xl mx-auto">
              Three simple steps to transform your business idea into a fully automated, AI-powered enterprise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <GlassmorphicCard className="p-8 text-center h-full">
                  <div className="text-6xl font-bold text-[#FFD700]/20 mb-4">{step.number}</div>
                  <div className="text-[#F4A261] mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold text-[#2C2C2E] mb-4">{step.title}</h3>
                  <p className="text-[#8B5E3C]/80">{step.description}</p>
                </GlassmorphicCard>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[#FFD700]" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                AI Team
              </span>
            </h2>
            <p className="text-xl text-[#8B5E3C]/80 max-w-3xl mx-auto">
              Seven specialized AI agents working around the clock to grow your business and handle every operational aspect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-all duration-300">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 + index * 0.5 }}
                  >
                    {agent.avatar}
                  </motion.div>
                  <h3 className="font-bold text-[#2C2C2E] mb-2">{agent.name}</h3>
                  <p className="text-sm text-[#F4A261] font-medium mb-3">{agent.role}</p>
                  <p className="text-xs text-[#8B5E3C]/80">{agent.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-[#8B5E3C]">Active</span>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-r from-[#FFD700]/5 to-[#F4A261]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-[#8B5E3C]/80 max-w-3xl mx-auto">
              Join thousands of successful entrepreneurs who have transformed their businesses with AI StartupBuilder.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassmorphicCard className="p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-[#8B5E3C]/80 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-[#2C2C2E]">{testimonial.name}</h4>
                      <p className="text-sm text-[#8B5E3C]">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassmorphicCard className="p-12">
              <h2 className="text-4xl font-bold text-[#2C2C2E] mb-6">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                  AI-Powered Business?
                </span>
              </h2>
              <p className="text-xl text-[#8B5E3C]/80 mb-8">
                Join thousands of entrepreneurs who have automated their success with our AI platform.
              </p>
              <motion.button
                onClick={onGetStarted}
                className="px-12 py-4 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white 
                         font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                         flex items-center justify-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Now
                <ArrowRight size={20} />
              </motion.button>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🤖</div>
                <h3 className="font-bold text-[#2C2C2E]">AI StartupBuilder</h3>
              </div>
              <p className="text-[#8B5E3C]/80 text-sm">
                The future of business building with AI automation and intelligent agents.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2C2C2E] mb-4">Product</h4>
              <div className="space-y-2 text-sm text-[#8B5E3C]">
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Features</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">AI Agents</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Pricing</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Demo</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2C2C2E] mb-4">Support</h4>
              <div className="space-y-2 text-sm text-[#8B5E3C]">
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Help Center</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Contact</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Documentation</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">API</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2C2C2E] mb-4">Company</h4>
              <div className="space-y-2 text-sm text-[#8B5E3C]">
                <a href="#" className="block hover:text-[#F4A261] transition-colors">About</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Privacy</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Terms</a>
                <a href="#" className="block hover:text-[#F4A261] transition-colors">Careers</a>
              </div>
            </div>
          </div>
          
        
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#F4A261] z-50 origin-left"
        style={{ scaleX: scrollY / (document.body.scrollHeight - window.innerHeight) }}
      />
    </div>
  );
};
