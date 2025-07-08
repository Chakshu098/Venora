import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Target, Zap, Users, MessageSquare } from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { useStore } from '../store/useStore';

const onboardingSteps = [
  {
    title: 'Welcome to the Future',
    description: 'Your AI-powered business empire starts here. Our 7 specialized agents will transform your vision into reality.',
    icon: <Sparkles className="w-16 h-16 text-[#FFD700]" />,
    features: ['AI-Powered Automation', 'Real-time Collaboration', 'Gamified Experience']
  },
  {
    title: 'Meet Your AI Agent Team',
    description: 'Each agent specializes in different aspects of your business, working 24/7 to ensure your success.',
    icon: <Users className="w-16 h-16 text-[#F4A261]" />,
    isAgentIntro: true
  },
  {
    title: 'Ready to Build?',
    description: 'Let\'s create your dream business together. Answer a few questions and watch the magic happen.',
    icon: <Zap className="w-16 h-16 text-[#FFD700]" />,
    features: ['Instant Website Generation', 'Custom Business Strategy', 'Advanced Analytics']
  }
];

export const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { completeOnboarding, agents } = useStore();

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const AgentIntroCard = ({ agent, index }: { agent: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <GlassmorphicCard className="p-6 h-full hover:scale-105 transition-all duration-300">
        <div className="text-center">
          <motion.div
            className="text-4xl mb-3"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3 + index * 0.5 
            }}
          >
            {agent.avatar}
          </motion.div>
          <h3 className="font-bold text-[#2C2C2E] mb-2">{agent.name}</h3>
          <p className="text-sm text-[#F4A261] font-medium mb-2">{agent.role}</p>
          <p className="text-xs text-[#8B5E3C]/80">{agent.description}</p>
          
          {/* Agent Status Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-[#8B5E3C]">Ready to serve</span>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#8B5E3C] font-medium">Progress</span>
            <span className="text-[#F4A261] font-bold">
              {currentStep + 1} / {onboardingSteps.length}
            </span>
          </div>
          <div className="w-full bg-[#D7C0AE]/30 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <GlassmorphicCard className="p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {!onboardingSteps[currentStep].isAgentIntro ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    {onboardingSteps[currentStep].icon}
                  </motion.div>

                  <h2 className="text-4xl font-bold text-[#2C2C2E] mb-4">
                    {onboardingSteps[currentStep].title}
                  </h2>

                  <p className="text-xl text-[#8B5E3C]/80 mb-8 max-w-2xl mx-auto">
                    {onboardingSteps[currentStep].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {onboardingSteps[currentStep].features?.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-[#FAF8F4] border border-[#FFD700]/30 rounded-xl p-4"
                      >
                        <p className="font-medium text-[#2C2C2E]">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    {onboardingSteps[currentStep].icon}
                  </motion.div>

                  <h2 className="text-4xl font-bold text-[#2C2C2E] mb-4">
                    {onboardingSteps[currentStep].title}
                  </h2>

                  <p className="text-xl text-[#8B5E3C]/80 mb-12 max-w-2xl mx-auto">
                    {onboardingSteps[currentStep].description}
                  </p>

                  {/* Agent Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {agents.slice(0, 7).map((agent, index) => (
                      <AgentIntroCard key={agent.id} agent={agent} index={index} />
                    ))}
                  </div>

                  {/* Chat Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-r from-[#FFD700]/10 to-[#F4A261]/10 rounded-2xl p-6 border border-[#FFD700]/30"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="text-[#F4A261]" size={24} />
                      <h3 className="text-lg font-bold text-[#2C2C2E]">Chat with Your Agents</h3>
                    </div>
                    <p className="text-[#8B5E3C]/80">
                      Communicate with your AI team in real-time. Give commands, ask questions, 
                      and watch them execute your business strategies instantly.
                    </p>
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`py-3 px-6 rounded-xl font-medium transition-all duration-300
                ${currentStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#D7C0AE] text-[#2C2C2E] hover:bg-[#8B5E3C] hover:text-white'
                } flex items-center gap-2`}
              whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
              whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
            >
              <ArrowLeft size={20} />
              Previous
            </motion.button>

            <motion.button
              onClick={nextStep}
              className="py-3 px-8 bg-gradient-to-r from-[#FFD700] to-[#F4A261]
                       text-white font-bold rounded-xl shadow-lg
                       hover:shadow-xl transition-all duration-300
                       flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep === onboardingSteps.length - 1 ? 'Start Building' : 'Next'}
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
};