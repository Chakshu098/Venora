import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import { NeumorphicInput } from './NeumorphicInput';
import { GlassmorphicCard } from './GlassmorphicCard';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      toast.success('Welcome to Elite AI Business Builder!');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    login('user@gmail.com', 'password');
    toast.success('Logged in with Google!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <GlassmorphicCard className="p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-[#2C2C2E] mb-2">
              Elite AI Business
            </h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
              Builder Platform
            </h2>
            <p className="text-[#8B5E3C]/80 mt-4">
              {isLogin ? 'Welcome back, entrepreneur!' : 'Join the elite business revolution'}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <NeumorphicInput
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={20} />}
            />

            <NeumorphicInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock size={20} />}
            />

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#FFD700] to-[#F4A261] 
                       text-white font-bold rounded-2xl shadow-lg
                       hover:shadow-xl transition-all duration-300
                       flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={20} />
            </motion.button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#D7C0AE]/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#FAF8F4] text-[#8B5E3C]/60">Or continue with</span>
              </div>
            </div>

            <motion.button
              onClick={handleGoogleLogin}
              className="w-full mt-4 py-4 bg-white border-2 border-[#D7C0AE]/30
                       text-[#2C2C2E] font-medium rounded-2xl shadow-lg
                       hover:shadow-xl transition-all duration-300
                       flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Chrome size={20} className="text-[#F4A261]" />
              Google
            </motion.button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#F4A261] hover:text-[#FFD700] transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </GlassmorphicCard>
      </motion.div>
    </div>
  );
};