import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import BuilderPage from './pages/BuilderPage';
import FeaturesPage from './pages/FeaturesPage';
import AIAgentsPage from './pages/AIAgentsPage';
import AgentDetailPage from './pages/AgentDetailPage';
import PricingPage from './pages/PricingPage';
import ContactForm from './components/ContactForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleIntroComplete = () => {
    setHasSeenIntro(true);
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // If authenticated but hasn't seen intro, show intro page
  if (!hasSeenIntro) {
    return (
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="*" element={<IntroPage onComplete={handleIntroComplete} />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // Show main site after login and intro
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/agents" element={<AIAgentsPage />} />
          <Route path="/agent/:agentId" element={<AgentDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;