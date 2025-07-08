import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Sparkles, Palette, Code, Globe, Eye, Download } from 'lucide-react';

function BuilderPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [websiteGenerated, setWebsiteGenerated] = useState(false);
  const [generatedWebsite, setGeneratedWebsite] = useState(null);

  const questions = [
    {
      id: 'websiteType',
      title: 'What type of website are you building?',
      subtitle: 'This helps us recommend the best templates and features for your needs.',
      options: [
        { value: 'business', label: 'Business/Corporate', icon: Globe, description: 'Professional business presence' },
        { value: 'portfolio', label: 'Portfolio/Personal', icon: Palette, description: 'Showcase your work and skills' },
        { value: 'ecommerce', label: 'E-commerce/Store', icon: Code, description: 'Sell products online' },
        { value: 'blog', label: 'Blog/Content', icon: Sparkles, description: 'Share your thoughts and ideas' }
      ]
    },
    {
      id: 'industry',
      title: 'What industry or field are you in?',
      subtitle: 'We will suggest relevant templates and content for your specific field.',
      options: [
        { value: 'technology', label: 'Technology', description: 'Software, IT, Tech startups' },
        { value: 'creative', label: 'Creative', description: 'Design, Art, Photography' },
        { value: 'healthcare', label: 'Healthcare', description: 'Medical, Wellness, Fitness' },
        { value: 'education', label: 'Education', description: 'Schools, Courses, Training' },
        { value: 'retail', label: 'Retail', description: 'Fashion, Products, Shopping' },
        { value: 'food', label: 'Food & Beverage', description: 'Restaurants, Cafes, Catering' },
        { value: 'other', label: 'Other', description: 'Something else entirely' }
      ]
    },
    {
      id: 'features',
      title: 'What features do you need?',
      subtitle: 'Select all the features you would like to include in your website.',
      multiple: true,
      options: [
        { value: 'contact', label: 'Contact Form', description: 'Let visitors get in touch' },
        { value: 'gallery', label: 'Photo Gallery', description: 'Showcase images beautifully' },
        { value: 'blog', label: 'Blog Section', description: 'Share updates and articles' },
        { value: 'testimonials', label: 'Customer Reviews', description: 'Build trust with testimonials' },
        { value: 'booking', label: 'Appointment Booking', description: 'Let customers schedule meetings' },
        { value: 'analytics', label: 'Analytics', description: 'Track your website performance' }
      ]
    },
    {
      id: 'style',
      title: 'What style appeals to you?',
      subtitle: 'Choose the visual style that best represents your brand.',
      options: [
        { value: 'modern', label: 'Modern & Minimal', description: 'Clean, simple, contemporary' },
        { value: 'bold', label: 'Bold & Vibrant', description: 'Eye-catching, colorful, energetic' },
        { value: 'elegant', label: 'Elegant & Classic', description: 'Sophisticated, timeless, refined' },
        { value: 'playful', label: 'Playful & Creative', description: 'Fun, unique, artistic' }
      ]
    },
    {
      id: 'colors',
      title: 'What colors represent your brand?',
      subtitle: 'Pick a color scheme that matches your vision.',
      options: [
        { value: 'blue', label: 'Blue & Professional', color: 'bg-blue-500', description: 'Trust, reliability, corporate' },
        { value: 'green', label: 'Green & Natural', color: 'bg-green-500', description: 'Growth, health, environment' },
        { value: 'purple', label: 'Purple & Creative', color: 'bg-purple-500', description: 'Creativity, luxury, innovation' },
        { value: 'orange', label: 'Orange & Energetic', color: 'bg-orange-500', description: 'Energy, enthusiasm, warmth' },
        { value: 'pink', label: 'Pink & Modern', color: 'bg-pink-500', description: 'Modern, friendly, approachable' },
        { value: 'custom', label: 'Custom Colors', color: 'bg-gradient-to-r from-purple-500 to-pink-500', description: 'I will choose my own palette' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const question = questions[currentQuestion];
    
    if (question.multiple) {
      const currentAnswers = answers[questionId] || [];
      const updatedAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(answer => answer !== value)
        : [...currentAnswers, value];
      
      setAnswers({
        ...answers,
        [questionId]: updatedAnswers
      });
    } else {
      setAnswers({
        ...answers,
        [questionId]: value
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateWebsite = () => {
    setIsGenerating(true);
    
    // Simulate website generation
    setTimeout(() => {
      const website = {
        title: getWebsiteTitle(),
        description: getWebsiteDescription(),
        color: getColorScheme(),
        style: answers.style || 'modern',
        features: answers.features || [],
        industry: answers.industry || 'technology',
        type: answers.websiteType || 'business'
      };
      
      setGeneratedWebsite(website);
      setIsGenerating(false);
      setWebsiteGenerated(true);
    }, 3000);
  };

  const getWebsiteTitle = () => {
    const titles = {
      business: 'Your Business Solutions',
      portfolio: 'Creative Portfolio',
      ecommerce: 'Online Store',
      blog: 'Personal Blog'
    };
    return titles[answers.websiteType] || 'Your Website';
  };

  const getWebsiteDescription = () => {
    const descriptions = {
      technology: 'Innovative technology solutions for the modern world',
      creative: 'Bringing creative visions to life',
      healthcare: 'Caring for your health and wellness',
      education: 'Empowering minds through education',
      retail: 'Quality products for every lifestyle',
      food: 'Delicious experiences await',
      other: 'Excellence in everything we do'
    };
    return descriptions[answers.industry] || 'Welcome to our website';
  };

  const getColorScheme = () => {
    const schemes = {
      blue: { primary: '#3B82F6', secondary: '#1E40AF', accent: '#60A5FA' },
      green: { primary: '#10B981', secondary: '#047857', accent: '#34D399' },
      purple: { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA' },
      orange: { primary: '#F97316', secondary: '#EA580C', accent: '#FB923C' },
      pink: { primary: '#EC4899', secondary: '#DB2777', accent: '#F472B6' },
      custom: { primary: '#8B5CF6', secondary: '#EC4899', accent: '#F472B6' }
    };
    return schemes[answers.colors] || schemes.blue;
  };

  const isCurrentQuestionAnswered = () => {
    const currentQ = questions[currentQuestion];
    const answer = answers[currentQ.id];
    
    if (currentQ.multiple) {
      return answer && answer.length > 0;
    }
    return answer !== undefined;
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-8"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Creating Your Website...</h2>
          <p className="text-xl text-gray-600">Our AI agents are working their magic!</p>
        </div>
      </div>
    );
  }

  if (websiteGenerated && generatedWebsite) {
    return (
      <div className="min-h-screen bg-gray-100 pt-16">
        {/* Preview Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setWebsiteGenerated(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Back to Builder
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Website Preview</h1>
                <p className="text-sm text-gray-600">Your website is ready!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                <Download className="h-4 w-4" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>

        {/* Generated Website Preview */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Website Header */}
            <div 
              className="p-6 text-white"
              style={{ backgroundColor: generatedWebsite.color.primary }}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{generatedWebsite.title}</h1>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">About</a>
                  <a href="#" className="hover:underline">Services</a>
                  <a href="#" className="hover:underline">Contact</a>
                </nav>
              </div>
            </div>

            {/* Hero Section */}
            <div 
              className="p-12 text-center text-white"
              style={{ 
                background: `linear-gradient(135deg, ${generatedWebsite.color.primary}, ${generatedWebsite.color.secondary})` 
              }}
            >
              <h2 className="text-4xl font-bold mb-4">{generatedWebsite.title}</h2>
              <p className="text-xl mb-8">{generatedWebsite.description}</p>
              <button 
                className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Features Section */}
            <div className="p-12 bg-gray-50">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {generatedWebsite.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: generatedWebsite.color.accent }}
                    >
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 capitalize">{feature}</h4>
                    <p className="text-gray-600">Professional {feature} solutions for your business needs.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-12">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Get In Touch</h3>
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full py-3 text-white rounded-lg font-semibold transition-colors"
                    style={{ backgroundColor: generatedWebsite.color.primary }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div 
              className="p-6 text-center text-white"
              style={{ backgroundColor: generatedWebsite.color.secondary }}
            >
              <p>&copy; 2024 {generatedWebsite.title}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Let's Build Your Perfect Website</h1>
          <p className="text-xl text-gray-600">Answer a few questions and we will create a custom website just for you</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentQ.title}</h2>
            <p className="text-lg text-gray-600">{currentQ.subtitle}</p>
          </div>

          {/* Options */}
          <div className={`grid gap-4 ${currentQ.options.length > 4 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {currentQ.options.map((option, index) => {
              const isSelected = currentQ.multiple 
                ? (answers[currentQ.id] || []).includes(option.value)
                : answers[currentQ.id] === option.value;

              return (
                <div
                  key={option.value}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all hover:scale-105 ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-gray-200 hover:border-primary/50 bg-white/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    {option.icon && (
                      <div className={`p-3 rounded-xl ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white'} transition-all`}>
                        <option.icon className="h-6 w-6" />
                      </div>
                    )}
                    
                    {option.color && (
                      <div className={`w-12 h-12 rounded-xl ${option.color} flex-shrink-0`}></div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg mb-2 ${isSelected ? 'text-primary' : 'text-gray-800'}`}>
                        {option.label}
                      </h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    
                    {isSelected && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-12">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>

            <Link
              to="/"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Exit Builder
            </Link>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={generateWebsite}
                disabled={!isCurrentQuestionAnswered()}
                className={`group px-8 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                  isCurrentQuestionAnswered()
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Generate My Website</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!isCurrentQuestionAnswered()}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                  isCurrentQuestionAnswered()
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderPage;