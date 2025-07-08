import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Globe, Edit, Share2, Settings, BarChart3, Users, Mail, Phone, MapPin } from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { useStore } from '../store/useStore';

interface LiveWebsiteProps {
  onBack: () => void;
}

export const LiveWebsite = ({ onBack }: LiveWebsiteProps) => {
  const { businessData } = useStore();
  const [currentPage, setCurrentPage] = useState('home');

  const getColorScheme = () => {
    const schemes = {
      'Warm Gold': { primary: '#FFD700', secondary: '#F4A261', accent: '#8B5E3C' },
      'Ocean Blue': { primary: '#0077BE', secondary: '#00A8E8', accent: '#003459' },
      'Forest Green': { primary: '#228B22', secondary: '#32CD32', accent: '#006400' },
      'Royal Purple': { primary: '#6A0DAD', secondary: '#9370DB', accent: '#4B0082' },
      'Sunset Orange': { primary: '#FF6347', secondary: '#FF7F50', accent: '#CD5C5C' },
      'Classic Black': { primary: '#2C2C2E', secondary: '#48484A', accent: '#8E8E93' },
      'Modern Gray': { primary: '#6C6C70', secondary: '#8E8E93', accent: '#48484A' },
      'Vibrant Red': { primary: '#DC143C', secondary: '#FF6B6B', accent: '#8B0000' }
    };
    return schemes[businessData.colorScheme as keyof typeof schemes] || schemes['Warm Gold'];
  };

  const colors = getColorScheme();

  const getBusinessContent = () => {
    const niche = businessData.niche;
    const tone = businessData.tone;
    
    const content = {
      'E-commerce': {
        hero: 'Discover Amazing Products',
        subtitle: 'Shop the latest trends with fast delivery and premium quality',
        features: ['Free Shipping', 'Easy Returns', '24/7 Support'],
        cta: 'Shop Now'
      },
      'SaaS': {
        hero: 'Streamline Your Workflow',
        subtitle: 'Powerful software solutions to boost your productivity',
        features: ['Cloud-Based', 'Real-time Analytics', 'API Integration'],
        cta: 'Start Free Trial'
      },
      'Consulting': {
        hero: 'Expert Business Solutions',
        subtitle: 'Transform your business with our proven strategies',
        features: ['Expert Guidance', 'Custom Solutions', 'Proven Results'],
        cta: 'Get Consultation'
      },
      'Agency': {
        hero: 'Creative Excellence',
        subtitle: 'We bring your brand vision to life with stunning creativity',
        features: ['Brand Strategy', 'Digital Marketing', 'Creative Design'],
        cta: 'Start Project'
      },
      'Healthcare': {
        hero: 'Your Health, Our Priority',
        subtitle: 'Comprehensive healthcare services with compassionate care',
        features: ['Expert Care', 'Modern Facilities', 'Patient-Centered'],
        cta: 'Book Appointment'
      },
      'Education': {
        hero: 'Learn Without Limits',
        subtitle: 'Quality education that prepares you for the future',
        features: ['Expert Instructors', 'Flexible Learning', 'Career Support'],
        cta: 'Enroll Now'
      },
      'Real Estate': {
        hero: 'Find Your Dream Home',
        subtitle: 'Premium properties in the best locations',
        features: ['Prime Locations', 'Expert Agents', 'Market Insights'],
        cta: 'View Properties'
      },
      'Restaurant': {
        hero: 'Culinary Excellence',
        subtitle: 'Fresh ingredients, authentic flavors, memorable experiences',
        features: ['Fresh Ingredients', 'Chef Specials', 'Cozy Atmosphere'],
        cta: 'Make Reservation'
      },
      'Fitness': {
        hero: 'Transform Your Body',
        subtitle: 'Achieve your fitness goals with expert guidance',
        features: ['Personal Training', 'Group Classes', 'Nutrition Plans'],
        cta: 'Join Now'
      },
      'Finance': {
        hero: 'Secure Your Future',
        subtitle: 'Smart financial solutions for your goals',
        features: ['Investment Planning', 'Risk Management', 'Expert Advice'],
        cta: 'Get Started'
      },
      'Technology': {
        hero: 'Innovation Unleashed',
        subtitle: 'Cutting-edge technology solutions for modern challenges',
        features: ['AI-Powered', 'Scalable Solutions', 'Future-Ready'],
        cta: 'Learn More'
      }
    };

    return content[niche as keyof typeof content] || content['Technology'];
  };

  const businessContent = getBusinessContent();

  const pages = [
    { id: 'home', name: 'Home', icon: <Globe size={16} /> },
    { id: 'about', name: 'About', icon: <Users size={16} /> },
    { id: 'services', name: 'Services', icon: <Settings size={16} /> },
    { id: 'contact', name: 'Contact', icon: <Mail size={16} /> }
  ];

  const renderHomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20" style={{ background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)` }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: colors.primary }}>
            {businessContent.hero}
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.accent }}>
            {businessContent.subtitle}
          </p>
          <motion.button
            className="px-8 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {businessContent.cta}
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.accent }}>
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessContent.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: colors.primary }}>
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.accent }}>{feature}</h3>
                <p style={{ color: colors.accent + '80' }}>
                  Experience the best in class service with our {feature.toLowerCase()} approach.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6" style={{ backgroundColor: `${colors.primary}05` }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.accent }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8" style={{ color: colors.accent + '80' }}>
            Join thousands of satisfied customers who trust us with their {businessData.niche.toLowerCase()} needs.
          </p>
          <motion.button
            className="px-8 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {businessContent.cta}
          </motion.button>
        </div>
      </section>
    </div>
  );

  const renderAboutPage = () => (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>About Us</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>Our Story</h2>
            <p className="mb-6" style={{ color: colors.accent + '80' }}>
              We are passionate about delivering exceptional {businessData.niche.toLowerCase()} solutions 
              that exceed our clients' expectations. With years of experience and a {businessData.tone.toLowerCase()} approach, 
              we've built a reputation for excellence.
            </p>
            <p style={{ color: colors.accent + '80' }}>
              Our team combines expertise with innovation to provide solutions that drive real results 
              for our clients across various industries.
            </p>
          </div>
          <div className="h-64 rounded-2xl flex items-center justify-center"
               style={{ backgroundColor: `${colors.primary}20` }}>
            <span className="text-6xl">🏢</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesPage = () => (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Premium Consultation',
            'Custom Solutions',
            'Ongoing Support',
            'Strategic Planning',
            'Implementation',
            'Optimization'
          ].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center"
                   style={{ backgroundColor: colors.primary }}>
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{service}</h3>
              <p style={{ color: colors.accent + '80' }}>
                Professional {service.toLowerCase()} tailored to your specific needs and requirements.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12" style={{ color: colors.primary }}>Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-xl" style={{ color: colors.primary }} />
                <span style={{ color: colors.accent }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-xl" style={{ color: colors.primary }} />
                <span style={{ color: colors.accent }}>contact@{businessData.domainName || 'yourbusiness.com'}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-xl" style={{ color: colors.primary }} />
                <span style={{ color: colors.accent }}>123 Business Street, City, State 12345</span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: `${colors.primary}10` }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.accent }}>Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border-2 focus:outline-none"
                style={{ borderColor: `${colors.primary}30`, focusBorderColor: colors.primary }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border-2 focus:outline-none"
                style={{ borderColor: `${colors.primary}30` }}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-xl border-2 focus:outline-none resize-none"
                style={{ borderColor: `${colors.primary}30` }}
              />
              <button
                type="submit"
                className="w-full py-3 text-white font-bold rounded-xl"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return renderHomePage();
      case 'about': return renderAboutPage();
      case 'services': return renderServicesPage();
      case 'contact': return renderContactPage();
      default: return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Website Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: colors.primary }}>
                  <Globe className="text-white" size={16} />
                </div>
                <div>
                  <h1 className="font-bold" style={{ color: colors.accent }}>
                    {businessData.domainName || 'Your Business'}
                  </h1>
                  <p className="text-xs text-gray-500">Live Website</p>
                </div>
              </div>
            </div>

            {/* Website Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    currentPage === page.id
                      ? 'text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: currentPage === page.id ? colors.primary : 'transparent',
                    color: currentPage === page.id ? 'white' : colors.accent
                  }}
                >
                  {page.icon}
                  {page.name}
                </button>
              ))}
            </nav>

            {/* Website Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit size={16} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={16} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <BarChart3 size={16} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 flex gap-2 overflow-x-auto">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                  currentPage === page.id
                    ? 'text-white'
                    : 'hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: currentPage === page.id ? colors.primary : 'transparent',
                  color: currentPage === page.id ? 'white' : colors.accent
                }}
              >
                {page.icon}
                {page.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Website Content */}
      <main>
        {renderCurrentPage()}
      </main>

      {/* Website Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: colors.primary }}>
                  <Globe className="text-white" size={16} />
                </div>
                <h3 className="font-bold" style={{ color: colors.accent }}>
                  {businessData.domainName || 'Your Business'}
                </h3>
              </div>
              <p className="text-sm" style={{ color: colors.accent + '80' }}>
                Your trusted partner for {businessData.niche.toLowerCase()} solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors.accent }}>Services</h4>
              <div className="space-y-2 text-sm" style={{ color: colors.accent + '80' }}>
                <a href="#" className="block hover:opacity-80 transition-opacity">Consultation</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Implementation</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Support</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Training</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors.accent }}>Company</h4>
              <div className="space-y-2 text-sm" style={{ color: colors.accent + '80' }}>
                <a href="#" className="block hover:opacity-80 transition-opacity">About Us</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Careers</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">News</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: colors.accent }}>Connect</h4>
              <div className="space-y-2 text-sm" style={{ color: colors.accent + '80' }}>
                <a href="#" className="block hover:opacity-80 transition-opacity">LinkedIn</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Twitter</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Facebook</a>
                <a href="#" className="block hover:opacity-80 transition-opacity">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm" style={{ color: colors.accent + '80' }}>
            <p>&copy; 2025 {businessData.domainName || 'Your Business'}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};