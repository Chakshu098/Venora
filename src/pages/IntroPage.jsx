import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Play, Sparkles, Rocket, Users, ArrowRight } from 'lucide-react';

function IntroPage({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to Venaura',
      subtitle: 'Your Journey to Amazing Websites Starts Here',
      description: 'Discover how easy it is to create professional websites without any coding knowledge. Let us guide you through the process.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Sparkles
    },
    {
      title: 'AI-Powered Creation',
      subtitle: 'Build with Intelligence',
      description: 'Our advanced AI analyzes your needs and creates stunning, personalized websites that perfectly match your vision and brand.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Play
    },
    {
      title: 'Professional Results',
      subtitle: 'Launch with Confidence',
      description: 'Get enterprise-grade websites with premium features, lightning-fast performance, and professional design that impresses your visitors.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Rocket
    },
    {
      title: 'Ready to Begin?',
      subtitle: 'Your Success Story Awaits',
      description: 'Join thousands of successful businesses who have transformed their online presence with Venaura. Let\'s build something amazing together.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Users
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
  };

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Corporate Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/85 to-purple-900/90"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all shadow-lg ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-2xl scale-110'
                      : 'bg-white/20 backdrop-blur-sm text-white border-2 border-white/30'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-20 h-1 mx-3 rounded transition-all ${
                      index < currentStep ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-white/80 font-medium">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-2xl">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {currentStepData.title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
              {currentStepData.subtitle}
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              {currentStepData.description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleComplete}
                  className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3 shadow-xl"
                >
                  <span>Enter Venaura</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3 shadow-xl"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              )}
              
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="px-10 py-5 border-2 border-white/50 text-white rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white transition-all flex items-center justify-center space-x-3 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span>Back</span>
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform shadow-2xl"></div>
              <img
                src={currentStepData.image}
                alt={currentStepData.title}
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all border-4 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              
              {/* Floating notification */}
              <div className="absolute -top-6 -right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl animate-float border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Welcome to Venaura</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl animate-float border border-white/50" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">AI-Powered</div>
                    <div className="text-sm font-bold text-gray-800">Business Builder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview - Only on last step */}
        {currentStep === steps.length - 1 && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-white/80 text-lg">Smart website generation with advanced AI technology</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all shadow-xl" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-white/80 text-lg">Create professional websites in just minutes</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all shadow-xl" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Trusted by Thousands</h3>
              <p className="text-white/80 text-lg">Join our community of successful entrepreneurs</p>
            </div>
          </div>
        )}

        {/* Skip Option */}
        <div className="text-center mt-16">
          <button
            onClick={handleComplete}
            className="text-white/70 hover:text-white transition-colors font-medium text-lg hover:underline"
          >
            Skip intro and continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;