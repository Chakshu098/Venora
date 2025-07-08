import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ChevronDown, ChevronUp } from 'lucide-react';

function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: 'per month',
      originalPrice: '₹1,999',
      description: 'Perfect for entrepreneurs getting started with AI automation',
      icon: Star,
      color: 'from-gray-500 to-gray-600',
      popular: false,
      features: [
        'AI-Powered Website Builder',
        '3 AI Business Agents',
        'Basic Analytics Dashboard',
        'Voice Commands (Limited)',
        '5GB Cloud Storage',
        'Email Support',
        'Mobile App Access',
        'Basic Templates Library'
      ],
      limitations: [
        'Limited Customization',
        'Basic Agent Capabilities'
      ]
    },
    {
      name: 'Business Pro',
      price: '₹2,999',
      period: 'per month',
      originalPrice: '₹4,999',
      description: 'Complete AI automation suite for growing businesses',
      icon: Zap,
      color: 'from-primary to-secondary',
      popular: true,
      features: [
        'All 7 AI Business Agents',
        'Advanced Website Builder',
        'Voice + Live Chat Commands',
        'Full Analytics Dashboard',
        'Agent Mood & Load Monitoring',
        'Gamified Progress System',
        'Team Collaboration Tools',
        '50GB Cloud Storage',
        'Priority Support',
        'Custom Branding',
        'API Access',
        'Advanced Templates'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored AI solutions for large organizations',
      icon: Crown,
      color: 'from-accent to-primary',
      popular: false,
      features: [
        'Dedicated Agent Customization',
        'White-Label Solutions',
        'Custom AI Agent Development',
        'Team Collaboration Suite',
        'Advanced Security Features',
        'Dedicated Account Manager',
        'Priority Support (24/7)',
        'Unlimited Cloud Storage',
        'Custom Integrations',
        'SLA Guarantees',
        'On-premise Deployment',
        'Advanced Compliance'
      ]
    }
  ];

  const featureComparison = [
    {
      category: 'Core Features',
      features: [
        { name: 'AI Website Builder', starter: true, pro: true, enterprise: true },
        { name: 'Number of AI Agents', starter: '3', pro: '7', enterprise: 'Unlimited' },
        { name: 'Voice Commands', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
        { name: 'Analytics Dashboard', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
      ]
    },
    {
      category: 'Collaboration & Support',
      features: [
        { name: 'Team Collaboration', starter: false, pro: true, enterprise: true },
        { name: 'Priority Support', starter: false, pro: true, enterprise: true },
        { name: '24/7 Support', starter: false, pro: false, enterprise: true },
        { name: 'Dedicated Manager', starter: false, pro: false, enterprise: true },
      ]
    },
    {
      category: 'Advanced Features',
      features: [
        { name: 'Custom Branding', starter: false, pro: true, enterprise: true },
        { name: 'API Access', starter: false, pro: true, enterprise: true },
        { name: 'White-Label Solution', starter: false, pro: false, enterprise: true },
        { name: 'Custom AI Development', starter: false, pro: false, enterprise: true },
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do the AI agents actually work?',
      answer: 'Our AI agents are specialized virtual assistants trained in specific business functions. They work 24/7 to handle tasks like development, marketing, customer service, and strategy planning. Each agent learns from your business patterns and becomes more effective over time.'
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at your next billing cycle. We\'ll help you migrate your data and settings seamlessly.'
    },
    {
      question: 'What happens to my AI agents if I cancel?',
      answer: 'Your AI agents will remain active until the end of your billing period. We provide a 30-day grace period to export your data and configurations. You can always reactivate your account to restore your agents exactly as they were.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with our platform, you can request a full refund within the first 30 days, no questions asked.'
    },
    {
      question: 'How secure is my business data?',
      answer: 'We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure cloud infrastructure with automatic backups and 99.9% uptime guarantee.'
    },
    {
      question: 'Can I integrate with existing business tools?',
      answer: 'Yes, our platform offers extensive API integration capabilities. Pro and Enterprise plans include pre-built integrations with popular tools like CRM systems, email marketing platforms, and analytics tools.'
    },
    {
      question: 'Do you provide training and onboarding?',
      answer: 'Absolutely! All plans include comprehensive onboarding. Pro plans get priority training sessions, and Enterprise clients receive dedicated training and a customer success manager.'
    },
    {
      question: 'What languages do the AI agents support?',
      answer: 'Our AI agents support 50+ languages including English, Hindi, Spanish, French, German, Chinese, Japanese, and more. They can seamlessly switch between languages based on your customer interactions.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <span className="text-gray-400 text-sm">—</span>
      );
    }
    return <span className="text-sm font-medium text-gray-700">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              💎 Premium AI Business Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Simple Pricing.
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Powerful Features.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All plans include access to AI Agents. Choose the perfect plan for your business needs and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border transition-all hover:scale-105 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-2xl ring-2 ring-primary/30 scale-105' 
                  : 'border-gray-200/50 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">{plan.originalPrice}</div>
                  )}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-green-600 font-medium mt-1">Save 50%</div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-center space-x-3 opacity-60">
                    <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">×</span>
                    </div>
                    <span className="text-gray-500 text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-800">Features</th>
                  <th className="text-center p-4 font-bold text-gray-600">Starter</th>
                  <th className="text-center p-4 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Business Pro ⭐
                  </th>
                  <th className="text-center p-4 font-bold text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={4} className="p-4 bg-gray-50/50 font-semibold text-gray-800 border-b border-gray-100">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-gray-100 hover:bg-gray-50/30">
                        <td className="p-4 font-medium text-gray-800">{feature.name}</td>
                        <td className="text-center p-4">{renderValue(feature.starter)}</td>
                        <td className="text-center p-4 bg-primary/5">{renderValue(feature.pro)}</td>
                        <td className="text-center p-4">{renderValue(feature.enterprise)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-50/50 transition-all flex items-center justify-between"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-slide-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Start Your AI-Powered Business Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have automated their success with our AI platform. 
            Start your free trial and experience the future of business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Zap className="h-5 w-5" />
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;