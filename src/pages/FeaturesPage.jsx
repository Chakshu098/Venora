import React from 'react';
import { 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  BarChart, 
  Smartphone, 
  Cloud, 
  Headphones,
  TrendingUp,
  Settings,
  MessageSquare,
  Target,
  ArrowRight,
  Check,
  X,
  Layers,
  Database,
  Cpu,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Globe,
      title: 'AI-Powered Website Builder',
      description: 'Generate professional websites in minutes with intelligent design suggestions and content creation.',
      color: 'from-blue-500 to-purple-600',
      animation: 'hover:rotate-12'
    },
    {
      icon: Code,
      title: 'No-Code Dynamic Editor',
      description: 'Build complex functionality without coding. Drag, drop, and customize with real-time preview.',
      color: 'from-purple-500 to-pink-600',
      animation: 'hover:scale-110'
    },
    {
      icon: Palette,
      title: 'Professional Templates',
      description: 'Choose from hundreds of stunning, industry-specific templates designed by professional designers.',
      color: 'from-pink-500 to-red-600',
      animation: 'hover:bounce'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Track visitor behavior, conversion rates, and business metrics with comprehensive analytics dashboard.',
      color: 'from-yellow-500 to-orange-600',
      animation: 'hover:pulse'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'All websites are automatically optimized for mobile devices with responsive design principles.',
      color: 'from-green-500 to-teal-600',
      animation: 'hover:wiggle'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSL certificates, automated backups, and advanced threat protection.',
      color: 'from-cyan-500 to-blue-600',
      animation: 'hover:glow'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Lightning-fast loading speeds with global CDN and 99.9% uptime guarantee.',
      color: 'from-indigo-500 to-purple-600',
      animation: 'hover:spin'
    },
    {
      icon: Database,
      title: 'Dynamic Content Management',
      description: 'Easily manage your content with intuitive CMS tools and automated content optimization.',
      color: 'from-pink-500 to-rose-600',
      animation: 'hover:shake'
    },
    {
      icon: Layers,
      title: 'Advanced Integrations',
      description: 'Connect with 1000+ apps and services including payment processors, email marketing, and CRMs.',
      color: 'from-emerald-500 to-green-600',
      animation: 'hover:float'
    },
    {
      icon: Cpu,
      title: 'AI Content Generation',
      description: 'Generate compelling copy, images, and SEO-optimized content using advanced AI technology.',
      color: 'from-orange-500 to-red-600',
      animation: 'hover:bounce'
    },
    {
      icon: Lock,
      title: 'GDPR Compliance',
      description: 'Built-in privacy controls and GDPR compliance tools to protect your users and business.',
      color: 'from-violet-500 to-purple-600',
      animation: 'hover:glow'
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Get help whenever you need it with our dedicated support team and extensive knowledge base.',
      color: 'from-blue-500 to-cyan-600',
      animation: 'hover:pulse'
    }
  ];

  const businessSolutions = [
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store functionality with inventory management, payment processing, and order tracking.',
      features: ['Product Catalogs', 'Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Accounts'],
      icon: '🛒'
    },
    {
      title: 'Business Websites',
      description: 'Professional corporate websites with lead generation, contact forms, and business showcases.',
      features: ['Lead Generation', 'Contact Forms', 'Team Profiles', 'Service Showcases', 'Client Testimonials'],
      icon: '🏢'
    },
    {
      title: 'Portfolio Websites',
      description: 'Stunning portfolio sites for creatives with image galleries, project showcases, and client reviews.',
      features: ['Image Galleries', 'Project Showcases', 'Client Reviews', 'Contact Integration', 'Social Media'],
      icon: '🎨'
    },
    {
      title: 'Blog & Content Sites',
      description: 'Feature-rich blogging platforms with SEO optimization, social sharing, and content management.',
      features: ['SEO Optimization', 'Social Sharing', 'Content Calendar', 'Author Profiles', 'Comment System'],
      icon: '📝'
    }
  ];

  const competitors = [
    {
      feature: 'AI-Powered Website Generation',
      us: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'No-Code Dynamic Editor',
      us: true,
      competitor1: true,
      competitor2: true,
      competitor3: true
    },
    {
      feature: 'Advanced AI Content Creation',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Real-time Collaboration',
      us: true,
      competitor1: true,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Enterprise Security Features',
      us: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Global CDN & Performance',
      us: true,
      competitor1: true,
      competitor2: true,
      competitor3: true
    },
    {
      feature: 'Advanced Analytics Dashboard',
      us: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: '1000+ App Integrations',
      us: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
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
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                🚀 Comprehensive Website Building Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Build</span>
              <br />Amazing Websites
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From AI-powered design to advanced analytics, discover all the features that make 
              Venaura the most comprehensive website building platform available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Start Free Trial
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
        </section>

        {/* Core Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600">Advanced tools and capabilities to bring your vision to life</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:${feature.animation} transition-all`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Solutions */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Built for Every Business Type</h2>
              <p className="text-xl text-gray-600">Specialized solutions tailored to your industry needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessSolutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{solution.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance & Technology */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Performance & Technology</h2>
              <p className="text-xl text-gray-600">Built on cutting-edge technology for maximum performance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">99.9%</h3>
                <p className="text-gray-600">Uptime Guarantee</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">&lt;2s</h3>
                <p className="text-gray-600">Average Load Time</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Global</h3>
                <p className="text-gray-600">CDN Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 px-6 bg-gradient-to-r from-secondary/5 to-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Compare</h2>
              <p className="text-xl text-gray-600">See why Venaura leads the competition</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 font-bold text-gray-800">Features</th>
                      <th className="text-center p-4 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Venaura Pro
                      </th>
                      <th className="text-center p-4 font-medium text-gray-600">Competitor A</th>
                      <th className="text-center p-4 font-medium text-gray-600">Competitor B</th>
                      <th className="text-center p-4 font-medium text-gray-600">Competitor C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                        <td className="text-center p-4">
                          {row.us ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4">
                          {row.competitor1 ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4">
                          {row.competitor2 ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4">
                          {row.competitor3 ? (
                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Experience All These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start building your dream website today with our comprehensive feature set.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeaturesPage;