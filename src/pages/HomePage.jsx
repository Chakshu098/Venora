import React from 'react';
import HeroSection from '../components/HeroSection';
import { Star, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '50K+' },
    { icon: Globe, label: 'Websites Created', value: '125K+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Award, label: 'Awards Won', value: '12' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face',
      text: "Venaura helped me create a professional website for my bakery in just 30 minutes. The templates are gorgeous!"
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face',
      text: "As a designer, I'm impressed by the flexibility and quality of the design tools. It's my go-to for client projects."
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face',
      text: "The AI suggestions helped me create landing pages that convert 3x better than our previous ones."
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Venaura</h2>
            <p className="text-xl text-gray-600">Everything you need to create stunning websites</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 group-hover:animate-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Venaura</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering everyone to build beautiful websites without code. 
                Join millions of users creating stunning web experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>AI vibe coded development by <a href="https://biela.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">Biela.dev</a>, powered by <a href="https://teachmecode.ae/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary-light transition-colors">TeachMeCode® Institute</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
