import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Settings,
  Mic,
  Send,
  Play,
  Pause,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

function AgentDetailPage() {
  const { agentId } = useParams();
  const [taskInput, setTaskInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  // Agent data - in real app this would come from a store/API
  const agent = {
    id: '2',
    name: 'Dev',
    fullName: 'Developer Agent',
    role: 'Developer Agent',
    tagline: 'Your personal coder that never sleeps',
    avatar: '💻',
    status: 'active',
    mood: 88,
    load: 65,
    speed: 92,
    completionRate: 94,
    description: 'Advanced AI developer specializing in full-stack development, debugging, and deployment automation.'
  };

  const skills = [
    {
      name: 'HTML/CSS/JS',
      level: 95,
      icon: Code,
      color: 'from-orange-500 to-red-600',
      description: 'Frontend development with modern standards'
    },
    {
      name: 'React/Next.js',
      level: 92,
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
      description: 'React ecosystem and SSR frameworks'
    },
    {
      name: 'APIs',
      level: 89,
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      description: 'RESTful and GraphQL API development'
    },
    {
      name: 'Deployment',
      level: 87,
      icon: Settings,
      color: 'from-green-500 to-teal-600',
      description: 'CI/CD and cloud deployment strategies'
    },
    {
      name: 'Database Integration',
      level: 85,
      icon: Database,
      color: 'from-yellow-500 to-orange-600',
      description: 'SQL and NoSQL database management'
    }
  ];

  const activities = [
    {
      id: 1,
      task: 'Building responsive dashboard component',
      status: 'in-progress',
      progress: 75,
      timeElapsed: '2h 15m',
      estimatedCompletion: '45m'
    },
    {
      id: 2,
      task: 'Optimizing API response times',
      status: 'completed',
      progress: 100,
      timeElapsed: '1h 30m',
      estimatedCompletion: 'Completed'
    },
    {
      id: 3,
      task: 'Setting up automated testing pipeline',
      status: 'pending',
      progress: 0,
      timeElapsed: '0m',
      estimatedCompletion: '3h 20m'
    },
    {
      id: 4,
      task: 'Debugging payment integration issues',
      status: 'in-progress',
      progress: 45,
      timeElapsed: '45m',
      estimatedCompletion: '1h 15m'
    }
  ];

  const logs = [
    { time: '14:23', action: 'Deployed to staging environment', type: 'success' },
    { time: '14:15', action: 'Fixed responsive layout issues', type: 'success' },
    { time: '14:02', action: 'Started API optimization task', type: 'info' },
    { time: '13:45', action: 'Completed database migration', type: 'success' },
    { time: '13:30', action: 'Warning: High memory usage detected', type: 'warning' }
  ];

  const handleAssignTask = () => {
    if (taskInput.trim()) {
      // In real app, this would send the task to the agent
      alert(`Task assigned to ${agent.name}: ${taskInput}`);
      setTaskInput('');
    }
  };

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setTaskInput('Create a new landing page component');
      }, 2000);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Play className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getLogIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/agents" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to AI Agents
        </Link>

        {/* Agent Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex items-center gap-6">
              <div className="text-6xl animate-bounce">{agent.avatar}</div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{agent.fullName}</h1>
                <p className="text-xl text-primary font-medium mb-4">{agent.tagline}</p>
                <p className="text-gray-600 max-w-2xl">{agent.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{agent.mood}%</div>
                <div className="text-sm text-gray-600">Mood</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{agent.load}%</div>
                <div className="text-sm text-gray-600">Load</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{agent.speed}%</div>
                <div className="text-sm text-gray-600">Speed</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{agent.completionRate}%</div>
                <div className="text-sm text-gray-600">Success</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-primary" />
                Skill Modules
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center`}>
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{skill.name}</h3>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-sm text-gray-600">Proficiency</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Play className="h-6 w-6 text-primary" />
                Live Activity Feed
              </h2>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div 
                    key={activity.id}
                    className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(activity.status)}
                        <h3 className="font-medium text-gray-800">{activity.task}</h3>
                      </div>
                      <span className="text-sm text-gray-500">{activity.timeElapsed}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${activity.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-primary">{activity.progress}%</span>
                    </div>
                    
                    <div className="text-xs text-gray-500 mt-2">
                      ETA: {activity.estimatedCompletion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Assign Task Box */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Assign New Task</h3>
              
              <div className="space-y-4">
                <textarea
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  placeholder="Describe the task you want to assign..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white/50 backdrop-blur-sm resize-none"
                  rows={4}
                />
                
                <div className="flex gap-2">
                  <button
                    onClick={handleVoiceCommand}
                    className={`p-3 rounded-xl transition-all ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
                    }`}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={handleAssignTask}
                    disabled={!taskInput.trim()}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Assign Task
                  </button>
                </div>
              </div>
            </div>

            {/* Agent Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">System Logs</h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-lg">
                    <div className="flex-shrink-0 mt-0.5">
                      {getLogIcon(log.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{log.action}</p>
                      <span className="text-xs text-gray-500">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  <Play className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">Resume</span>
                </button>
                <button className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  <Pause className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">Pause</span>
                </button>
                <button className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  <Settings className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">Settings</span>
                </button>
                <button className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  <BarChart3 className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDetailPage;