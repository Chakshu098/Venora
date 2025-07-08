import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Eye, Wand2, Globe } from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { NeumorphicInput } from './NeumorphicInput';
import { useStore } from '../store/useStore';
import confetti from 'react-confetti';

const wizardSteps = [
  {
    title: 'Business Niche',
    description: 'What type of business are you building?',
    field: 'niche',
    options: ['E-commerce', 'SaaS', 'Consulting', 'Agency', 'Healthcare', 'Education', 'Real Estate', 'Restaurant', 'Fitness', 'Finance', 'Technology', 'Other']
  },
  {
    title: 'Brand Tone',
    description: 'How should your brand communicate?',
    field: 'tone',
    options: ['Professional', 'Friendly', 'Luxury', 'Creative', 'Technical', 'Minimalist', 'Bold', 'Elegant', 'Playful', 'Authoritative']
  },
  {
    title: 'Color Scheme',
    description: 'Choose your brand colors',
    field: 'colorScheme',
    options: ['Warm Gold', 'Ocean Blue', 'Forest Green', 'Royal Purple', 'Sunset Orange', 'Classic Black', 'Modern Gray', 'Vibrant Red', 'Soft Pink', 'Deep Teal']
  },
  {
    title: 'Domain Name',
    description: 'What\'s your domain name?',
    field: 'domainName',
    isInput: true
  },
  {
    title: 'Website Vision',
    description: 'Describe your dream website in detail',
    field: 'websitePrompt',
    isTextarea: true,
    placeholder: 'Describe your ideal website: layout, features, style, content, functionality, target audience, and any specific requirements...'
  }
];

export const WebsiteCreationWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);
  const { businessData, updateBusinessData, addXP, setCurrentStep: setGlobalStep } = useStore();

  const handleOptionSelect = (value: string) => {
    const field = wizardSteps[currentStep].field as keyof typeof businessData;
    updateBusinessData({ [field]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = wizardSteps[currentStep].field as keyof typeof businessData;
    updateBusinessData({ [field]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      addXP(50); // Add XP for each step
    } else {
      // Start building website
      setIsBuilding(true);
      setTimeout(() => {
        updateBusinessData({ completed: true });
        addXP(200); // Bonus XP for completion
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          setGlobalStep(2); // Move to dashboard
        }, 3000);
      }, 2000);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getCurrentValue = () => {
    const field = wizardSteps[currentStep].field as keyof typeof businessData;
    return businessData[field];
  };

  const isStepComplete = () => {
    return getCurrentValue() !== '';
  };

  const xpProgress = ((currentStep + 1) / wizardSteps.length) * 100;

  const getPreviewContent = () => {
    const { niche, tone, colorScheme, domainName, websitePrompt } = businessData;
    
    return (
      <div className="space-y-6">
        {/* Header Preview */}
        <div className="h-16 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-lg flex items-center px-6">
          <div className="text-white font-bold text-lg">
            {domainName || 'Your Business'}
          </div>
        </div>

        {/* Hero Section Preview */}
        <div className="bg-[#FAF8F4] rounded-xl p-8 text-center">
          <div className="h-8 bg-[#2C2C2E] rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-[#8B5E3C] rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-12 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-lg w-48 mx-auto"></div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-[#F4A261]/20 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-[#FFD700] rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Content Preview */}
        <div className="space-y-3">
          <div className="h-3 bg-[#D7C0AE] rounded w-full"></div>
          <div className="h-3 bg-[#D7C0AE] rounded w-4/5"></div>
          <div className="h-3 bg-[#D7C0AE] rounded w-2/3"></div>
        </div>

        {/* Footer Preview */}
        <div className="h-12 bg-[#2C2C2E] rounded-lg"></div>
      </div>
    );
  };

  if (isBuilding) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF8F4] to-[#F4A261]/5">
        {showConfetti && (
          <confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        
        <GlassmorphicCard className="p-12 text-center max-w-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-8"
          >
            <Wand2 className="w-16 h-16 text-[#FFD700] mx-auto" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-[#2C2C2E] mb-4">
            Building Your Website...
          </h2>
          
          <p className="text-[#8B5E3C]/80 mb-8">
            Our AI agents are crafting your perfect business website. This will take just a moment.
          </p>
          
          <div className="w-full bg-[#D7C0AE]/30 rounded-full h-4 mb-4">
            <motion.div
              className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          <p className="text-sm text-[#F4A261] font-medium">
            Generating layout, content, and styling...
          </p>
        </GlassmorphicCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          {/* XP Progress Bar */}
          <motion.div 
            className="mb-8 p-4 bg-gradient-to-r from-[#FFD700]/20 to-[#F4A261]/20 rounded-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#8B5E3C] font-medium flex items-center gap-2">
                <Sparkles size={16} className="text-[#FFD700]" />
                XP Progress
              </span>
              <span className="text-[#F4A261] font-bold">
                {Math.floor(xpProgress)}%
              </span>
            </div>
            <div className="w-full bg-[#D7C0AE]/30 rounded-full h-4">
              <motion.div
                className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] h-4 rounded-full flex items-center justify-end pr-2"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Sparkles size={12} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          <GlassmorphicCard className="p-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#2C2C2E] mb-4">
                {wizardSteps[currentStep].title}
              </h2>
              <p className="text-[#8B5E3C]/80 mb-8">
                {wizardSteps[currentStep].description}
              </p>

              {wizardSteps[currentStep].isInput ? (
                <NeumorphicInput
                  placeholder="Enter your domain name"
                  value={getCurrentValue()}
                  onChange={handleInputChange}
                  className="mb-8"
                />
              ) : wizardSteps[currentStep].isTextarea ? (
                <div className="mb-8">
                  <textarea
                    placeholder={wizardSteps[currentStep].placeholder}
                    value={getCurrentValue()}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-[#FAF8F4] border-2 border-[#D7C0AE]/30
                             rounded-2xl shadow-inner focus:outline-none focus:border-[#FFD700]/50
                             text-[#2C2C2E] placeholder-[#8B5E3C]/60 font-medium
                             transition-all duration-300 hover:shadow-lg resize-none"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {wizardSteps[currentStep].options?.map((option) => (
                    <motion.button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left
                        ${getCurrentValue() === option
                          ? 'border-[#FFD700] bg-[#FFD700]/10 text-[#2C2C2E]'
                          : 'border-[#D7C0AE]/30 bg-[#FAF8F4] text-[#8B5E3C] hover:border-[#FFD700]/50'
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium">{option}</span>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>

            <div className="flex justify-between items-center">
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
                disabled={!isStepComplete()}
                className={`py-3 px-8 rounded-xl font-bold transition-all duration-300
                  flex items-center gap-2 shadow-lg hover:shadow-xl
                  ${isStepComplete()
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                whileHover={isStepComplete() ? { scale: 1.05 } : {}}
                whileTap={isStepComplete() ? { scale: 0.95 } : {}}
              >
                {currentStep === wizardSteps.length - 1 ? (
                  <>
                    <Globe size={20} />
                    Generate Website
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </div>
          </GlassmorphicCard>
        </div>
      </div>

      {/* Right Panel - Live Preview */}
      <div className="flex-1 bg-[#2C2C2E] p-8 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <Eye className="text-[#FFD700]" size={20} />
          <h3 className="text-white font-bold">Live Preview</h3>
        </div>
        
        <GlassmorphicCard className="flex-1 p-6 bg-white/10">
          <div className="h-full bg-[#FAF8F4] rounded-xl p-6 overflow-hidden">
            {getPreviewContent()}
          </div>
        </GlassmorphicCard>

        {/* Preview Data */}
        <div className="mt-6 space-y-2">
          {Object.entries(businessData).map(([key, value]) => (
            value && key !== 'completed' && (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-[#D7C0AE] capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="text-[#FFD700] max-w-xs truncate">
                  {typeof value === 'string' && value.length > 30 
                    ? `${value.substring(0, 30)}...` 
                    : value
                  }
                </span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};