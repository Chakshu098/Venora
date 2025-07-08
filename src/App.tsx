import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LandingPage } from './components/LandingPage';
import { LoginForm } from './components/LoginForm';
import { WebsiteCreationWizard } from './components/WebsiteCreationWizard';
import { AIAgentDashboard } from './components/AIAgentDashboard';
import { LiveWebsite } from './components/LiveWebsite';
import { useStore } from './store/useStore';

function App() {
  const { isAuthenticated, businessData, currentStep } = useStore();

  const getCurrentScreen = () => {
    if (currentStep === 3) return 'live-website'; // Live website view
    if (!isAuthenticated) return 'landing';
    if (!businessData.completed) return 'wizard';
    return 'dashboard';
  };

  const currentScreen = getCurrentScreen();

  const handleGetStarted = () => {
    // This will trigger the login screen
    useStore.getState().setCurrentStep(0.5); // Intermediate step for login
  };

  const handleBackFromWebsite = () => {
    useStore.getState().setCurrentStep(2); // Back to dashboard
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] relative overflow-hidden">
      {currentScreen !== 'landing' && currentScreen !== 'live-website' && <AnimatedBackground />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {currentScreen === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
          {currentStep === 0.5 && <LoginForm />}
          {currentScreen === 'wizard' && <WebsiteCreationWizard />}
          {currentScreen === 'dashboard' && <AIAgentDashboard />}
          {currentScreen === 'live-website' && <LiveWebsite onBack={handleBackFromWebsite} />}
        </motion.div>
      </AnimatePresence>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(250, 248, 244, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '16px',
            color: '#2C2C2E',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: '#FFD700',
              secondary: '#FAF8F4',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
