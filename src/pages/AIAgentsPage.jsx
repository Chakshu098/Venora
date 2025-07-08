import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, Zap, Target, MessageSquare, BarChart, Settings, Sparkles, ArrowRight, Eye, Mic, Users, Globe, TrendingUp } from 'lucide-react';

function AIAgentsPage() {
  const agents = [
    {
      id: '1',
      name: 'Alex',
      fullName: 'Team Leader Agent',
      icon: Sparkles,
      description: 'Coordinates and distributes tasks efficiently across your entire AI workforce for optimal productivity.',
      capabilities: ['Task distribution', 'Team coordination', 'Workflow optimization', 'Priority management'],
      color: 'from-purple-500 to-pink-600',
      avatar: '👑',
      status: 'active',
      mood: 95,
      tasks: 12,
      specialties: ['Leadership', 'Project Management', 'Resource Allocation', 'Performance Optimization']
    },
    {
      id: '2',
      name: 'Dev',
      fullName: 'Developer Agent',
      icon: MessageSquare,
      description: 'Your personal coding expert that builds, debugs, and deploys applications with zero downtime.',
      capabilities: ['Full-stack development', 'Bug fixing', 'API integration', 'Automated deployment'],
      color: 'from-blue-500 to-cyan-600',
      avatar: '��',
      status: 'active',
      mood: 88,
      tasks: 8,
      specialties: ['React/Vue Development', 'Backend APIs', 'Database Design', 'DevOps & Deployment']
    },
    {
      id: '3',
      name: 'Maya',
      fullName: 'Manager Agent',
      icon: Target,
      description: 'Strategic operations manager that optimizes your business processes and ensures peak performance.',
      capabilities: ['Operations management', 'Process optimization', 'Performance tracking', 'Strategic planning'],
      color: 'from-green-500 to-teal-600',
      avatar: '��',
      status: 'idle',
      mood: 82,
      tasks: 5,
      specialties: ['Business Strategy', 'Operations Management', 'KPI Tracking', 'Process Improvement']
    },
    {
      id: '4',
      name: 'Mark',
      fullName: 'Marketing Agent',
      icon: BarChart,
      description: 'Growth-focused marketing specialist that drives campaigns, analyzes trends, and boosts your reach.',
      capabilities: ['Campaign management', 'Social media automation', 'Analytics tracking', 'Content creation'],
      color: 'from-orange-500 to-red-600',
      avatar: '📈',
      status: 'active',
      mood: 92,
      tasks: 15,
      specialties: ['Digital Marketing', 'SEO/SEM', 'Social Media', 'Content Strategy']
    },
    {
      id: '5',
      name: 'Sophie',
      fullName: 'Customer Service Agent',
      icon: Settings,
      description: 'Dedicated customer support specialist ensuring 24/7 client satisfaction and issue resolution.',
      capabilities: ['24/7 customer support', 'Issue resolution', 'Feedback analysis', 'Client relationship management'],
      color: 'from-gray-500 to-gray-700',
      avatar: '💬',
      status: 'active',
      mood: 75,
      tasks: 22,
      specialties: ['Live Chat Support', 'Ticket Management', 'Customer Success', 'Feedback Analysis']
    },
    {
      id: '6',
      name: 'Victor',
      fullName: 'Problem Solver Agent',
      icon: Brain,
      description: 'Advanced troubleshooting expert that identifies, analyzes, and resolves complex business challenges.',
      capabilities: ['Problem identification', 'Root cause analysis', 'Solution implementation', 'System optimization'],
      color: 'from-indigo-500 to-purple-600',
      avatar: '🔧',
      status: 'idle',
      mood: 90,
      tasks: 3,
      specialties: ['System Debugging', 'Performance Optimization', 'Technical Analysis', 'Solution Architecture']
    },
    {
      id: '7',
      name: 'Stella',
      fullName: 'Strategy Agent',
      icon: Target,
      description: 'Strategic planning expert that develops comprehensive growth strategies and innovation roadmaps.',
      capabilities: ['Strategic planning', 'Market analysis', 'Growth strategies', 'Innovation management'],
      color: 'from-pink-500 to-rose-600',
      avatar: '��',
      status: 'active',
      mood: 85,
      tasks: 7,
      specialties: ['Business Strategy', 'Market Research', 'Competitive Analysis', 'Growth Planning']
    }
  ];

  const agentCapabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Communicate with your agents using everyday language, voice commands, or text chat.',
      icon: MessageSquare,
      features: ['Voice Recognition', 'Text Understanding', 'Context Awareness', 'Multi-language Support']
    },
    {
      title: 'Machine Learning Adaptation',
      description: 'Agents continuously learn from your business patterns and optimize their performance.',
      icon: Brain,
      features: ['Pattern Recognition', 'Behavioral Learning', 'Performance Optimization', 'Predictive Analytics']
    },
    {
      title: 'Real-time Collaboration',
      description: 'Agents work together seamlessly to handle complex multi-step business processes.',
      icon: Users,
      features: ['Team Coordination', 'Task Handoffs', 'Shared Knowledge', 'Workflow Automation']
    },
    {
      title: 'Advanced Analytics',
      description: 'Track agent performance, monitor workloads, and optimize your AI workforce efficiency.',
      icon: TrendingUp,
      features: ['Performance Metrics', 'Mood Tracking', 'Load Balancing', 'Efficiency Reports']
    }
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Intelligent Task Assignment',
      description: 'Alex, your Team Leader Agent, analyzes incoming tasks and automatically assigns them to the most suitable specialist agent based on expertise and current workload.',
      icon: '🎯'
    },
    {
      step: '2',
      title: 'Collaborative Execution',
      description: 'Agents work together seamlessly, sharing information and resources to complete complex multi-step tasks efficiently while keeping you updated.',
      icon: '🤝'
    },
    {
      step: '3',
      title: 'Continuous Learning & Optimization',
      description: 'Each agent learns from your business patterns and feedback, becoming more effective and personalized over time while maintaining peak performance.',
      icon: '🧠'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-16 relative">
      {/* Corporate Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Corporate background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Bot className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Meet Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI Dream Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your specialized AI workforce that works 24/7 to grow your business. 
            Each agent brings unique expertise and learns from your business patterns to deliver exceptional results.
          </p>
        </div>

        {/* Agent Capabilities Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {agentCapabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <capability.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{capability.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{capability.description}</p>
              <div className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Agent Avatar & Status */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{agent.avatar}</div>
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                    agent.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                  <agent.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Agent Info */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{agent.name}</h3>
              <p className="text-sm text-primary font-medium mb-4 text-center">{agent.fullName}</p>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{agent.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">{agent.tasks}</div>
                  <div className="text-xs text-gray-600">Active Tasks</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-secondary">{agent.mood}%</div>
                  <div className="text-xs text-gray-600">Performance</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Specialties:</h4>
                {agent.specialties.map((specialty, specIndex) => (
                  <div key={specIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-sm text-gray-600">{specialty}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/agent/${agent.id}`}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  View Details
                </Link>
                
                <Link
                  to={`/agent/${agent.id}`}
                  className="w-full py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat Now
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    agent.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    agent.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {agent.status === 'active' ? 'Active & Ready' : 'On Standby'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How Your AI Team Works */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Your AI Team Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{step.step}</span>
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform">
                    <ArrowRight className="text-primary h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agent Communication */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Communicate Naturally with Your AI Team
            </h2>
            <p className="text-xl text-gray-600">
              Use voice commands, chat, or simple text to interact with your agents in natural language.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-gray-800">Voice Commands</h3>
              </div>
              <p className="text-gray-600 mb-4">Simply speak your requests:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-primary/10 p-3 rounded-lg">"Dev, create a new landing page"</div>
                <div className="bg-primary/10 p-3 rounded-lg">"Mark, analyze our social media performance"</div>
                <div className="bg-primary/10 p-3 rounded-lg">"Sophie, check customer feedback"</div>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-secondary" />
                <h3 className="text-lg font-bold text-gray-800">Chat Interface</h3>
              </div>
              <p className="text-gray-600 mb-4">Type commands or have conversations:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="bg-secondary/10 p-3 rounded-lg">"What's the status of my website?"</div>
                <div className="bg-secondary/10 p-3 rounded-lg">"Schedule a marketing campaign"</div>
                <div className="bg-secondary/10 p-3 rounded-lg">"Generate a sales report"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Performance Metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">AI Team Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">98.7%</div>
              <div className="text-gray-600">Task Success Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
              <div className="text-gray-600">Average Team Mood</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">72</div>
              <div className="text-gray-600">Active Tasks</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build Your AI-Powered Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our specialized AI agents handle the work while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/builder"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Start Building with AI
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentsPage;