import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap, Play } from 'lucide-react';
import TypingEffect from './TypingEffect';

function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
    }}>
      {/* Enhanced overlay with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-900/75 to-purple-900/85"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-float hover:scale-110 transition-transform"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full animate-float hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full animate-float hover:scale-110 transition-transform" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="mb-6 animate-slide-up">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
              🚀 The Future of Web Development
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <TypingEffect 
              texts={["Build Stunning Websites", "No Coding Required", "Launch in Minutes", "AI-Powered Design"]}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block mb-4"
            />
            <span className="text-white">With Intelligent Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Create professional websites with our AI-powered builder. No coding required, unlimited creativity unleashed. 
            <span className="text-primary font-semibold"> Transform your ideas into reality</span> in just minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/builder"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2 hover:from-primary-dark hover:to-secondary-dark"
            >
              <span>Start Building Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={scrollToFeatures}
              className="group px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm flex items-center space-x-2"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">No Code Required</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors">Build professional websites without writing a single line of code. Drag, drop, and customize with ease.</p>
            </div>

            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:bg-white/15 transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">Beautiful Designs</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors">Choose from hundreds of stunning templates and customize them to match your unique brand vision.</p>
            </div>

            <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:bg-white/15 transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">Lightning Fast</h3>
              <p className="text-gray-200 group-hover:text-white transition-colors">Deploy your website in minutes, not days. Fast hosting included with global CDN for optimal performance.</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: '50K+', label: 'Happy Users' },
              { number: '125K+', label: 'Websites Created' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;