import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'AI Agents', path: '/agents' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:animate-glow group-hover:scale-110 transition-all">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Venaura
              </span>
              <span className="text-xs text-gray-500 font-medium">Business Solutions</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10 scale-105'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/pricing"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all hover:from-primary-dark hover:to-secondary-dark"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-gray-600 hover:bg-primary/10 hover:text-primary transition-all hover:translate-x-2 ${
                  location.pathname === item.path ? 'text-primary bg-primary/10' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-gray-200 mt-2">
              <Link
                to="/pricing"
                className="block mx-4 mt-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;