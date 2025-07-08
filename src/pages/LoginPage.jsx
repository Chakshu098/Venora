import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Chrome, Github } from 'lucide-react';

function LoginPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    onLogin();
  };

  const handleSocialLogin = (provider) => {
    onLogin();
  };

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

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl transform -rotate-6 group-hover:rotate-6 transition-transform shadow-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all border-4 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              
              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 p-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl animate-float border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-800">Welcome to Venaura</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 p-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl animate-float border border-white/50" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">AI-Powered</div>
                    <div className="text-lg font-bold text-gray-800">Business Builder</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-10 p-4 bg-white/95 backdrop-blur-lg rounded-full shadow-2xl animate-float border border-white/50" style={{ animationDelay: '3s' }}>
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-3xl mb-6 shadow-2xl">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {isLogin ? 'Welcome Back!' : 'Join Venaura'}
                </h1>
                <p className="text-white/80 text-lg">
                  {isLogin 
                    ? 'Sign in to continue building amazing websites' 
                    : 'Create your account and start building today'
                  }
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="group px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center space-x-3 text-white font-medium"
                >
                  <Chrome className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Google</span>
                </button>
                
                <button
                  onClick={() => handleSocialLogin('github')}
                  className="group px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center space-x-3 text-white font-medium"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </button>
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-white/70 font-medium">Or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-medium mb-3 text-lg">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-white/60 text-lg hover:bg-white/15"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="group">
                  <label className="block text-white font-medium mb-3 text-lg">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white/60 group-focus-within:text-primary transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-white/60 text-lg hover:bg-white/15"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-white font-medium mb-3 text-lg">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white/60 group-focus-within:text-primary transition-colors" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-14 pr-14 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-white/60 text-lg hover:bg-white/15"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white/60 hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="group">
                    <label className="block text-white font-medium mb-3 text-lg">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white/60 group-focus-within:text-primary transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white placeholder-white/60 text-lg hover:bg-white/15"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded border-white/20 text-primary focus:ring-primary bg-white/10" />
                      <span className="text-white/80">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:text-primary-light transition-colors font-medium">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-10 text-center">
                <p className="text-white/80 text-lg">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-primary hover:text-primary-light font-bold transition-colors text-lg hover:underline"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;