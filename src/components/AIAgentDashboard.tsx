import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Mic, Bell, User, LogOut, BarChart, TrendingUp, Globe, MessageSquare, Settings, Zap } from 'lucide-react';
import { AgentCard } from './AgentCard';
import { GlassmorphicCard } from './GlassmorphicCard';
import { NeumorphicInput } from './NeumorphicInput';
import { ChatInterface } from './ChatInterface';
import { useStore } from '../store/useStore';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';
import { sendTask } from '../api/api';

const handleAskAgent = async () => {
  const reply = await sendTask('marketing', 'Create a fun ad for a new phone');
  console.log('Agent says:', reply);
};

const mockAnalyticsData = [
  { name: 'Mon', tasks: 24, completed: 20 },
  { name: 'Tue', tasks: 32, completed: 28 },
  { name: 'Wed', tasks: 28, completed: 25 },
  { name: 'Thu', tasks: 45, completed: 40 },
  { name: 'Fri', tasks: 52, completed: 48 },
  { name: 'Sat', tasks: 38, completed: 35 },
  { name: 'Sun', tasks: 30, completed: 28 },
];

export const AIAgentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState<string>('');
  const { user, agents, logout, updateAgentStatus, businessData, setCurrentStep } = useStore();

  const handleAssignTask = (agentId: string) => {
    toast.success(`Task assigned to ${agents.find(a => a.id === agentId)?.name}!`);
    updateAgentStatus(agentId, 'active');
  };

  const handleOpenChat = (agentId: string) => {
    setSelectedAgentId(agentId);
    setIsChatOpen(true);
    toast.success(`Opening chat with ${agents.find(a => a.id === agentId)?.name}`);
  };

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    if (!isListening) {
      toast.success('Voice assistant activated! Say your command...');
      setTimeout(() => setIsListening(false), 3000);
    } else {
      toast.success('Voice command processed!');
    }
  };

  const handleViewLive = () => {
    setCurrentStep(3); // Navigate to live website view
    toast.success('Opening your live website!');
  };

  const totalTasks = agents.reduce((sum, agent) => sum + agent.tasks, 0);
  const avgMood = Math.round(agents.reduce((sum, agent) => sum + agent.mood, 0) / agents.length);
  const activeAgents = agents.filter(agent => agent.status === 'active').length;

  <button onClick={handleAskAgent}>Ask Marketing Agent</button>
const handleAskAgent = async () => {
  const reply = await sendTask('marketing', 'Create a fun post for a new AI tool');
  alert(reply); // Or show in UI
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F4] to-[#F4A261]/5">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 border-b border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="text-2xl">🤖</div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#F4A261] bg-clip-text text-transparent">
                  Elite AI Dashboard
                </h1>
                {businessData.domainName && (
                  <p className="text-sm text-[#8B5E3C]">{businessData.domainName}</p>
                )}
              </div>
            </motion.div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <NeumorphicInput
                placeholder="Search agents, tasks, or ask AI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={18} />}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleVoiceCommand}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-[#FFD700] text-white hover:bg-[#F4A261]'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mic size={20} />
              </motion.button>

              <button className="p-3 rounded-xl bg-[#D7C0AE] text-[#2C2C2E] hover:bg-[#8B5E3C] hover:text-white transition-all">
                <Bell size={20} />
              </button>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-bold text-[#2C2C2E]">{user?.name}</div>
                  <div className="text-sm text-[#8B5E3C]">Level {user?.level} • {user?.xp} XP</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#F4A261] flex items-center justify-center text-white font-bold">
                  {user?.name.charAt(0)}
                </div>
              </div>

              <button
                onClick={logout}
                className="p-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Website Status Card */}
        {businessData.completed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <GlassmorphicCard className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-[#FFD700] to-[#F4A261] rounded-xl">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C2C2E]">Your Website is Live!</h3>
                    <p className="text-[#8B5E3C]">{businessData.domainName || 'Your Business Website'}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-[#D7C0AE] text-[#2C2C2E] rounded-lg hover:bg-[#8B5E3C] hover:text-white transition-all">
                    <Settings size={16} className="inline mr-2" />
                    Edit
                  </button>
                  <motion.button
                    onClick={handleViewLive}
                    className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white rounded-lg hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe size={16} className="inline mr-2" />
                    View Live
                  </motion.button>
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8B5E3C]/70 text-sm">Total Tasks</p>
                <p className="text-2xl font-bold text-[#2C2C2E]">{totalTasks}</p>
              </div>
              <BarChart className="text-[#FFD700]" size={32} />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8B5E3C]/70 text-sm">Active Agents</p>
                <p className="text-2xl font-bold text-[#2C2C2E]">{activeAgents}/7</p>
              </div>
              <User className="text-[#F4A261]" size={32} />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8B5E3C]/70 text-sm">Avg Performance</p>
                <p className="text-2xl font-bold text-[#2C2C2E]">{avgMood}%</p>
              </div>
              <TrendingUp className="text-[#FFD700]" size={32} />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8B5E3C]/70 text-sm">Your Level</p>
                <p className="text-2xl font-bold text-[#2C2C2E]">{user?.level}</p>
              </div>
              <div className="text-2xl">🏆</div>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Analytics Chart */}
        <GlassmorphicCard className="p-6 mb-8">
          <h2 className="text-xl font-bold text-[#2C2C2E] mb-6">Weekly Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockAnalyticsData}>
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F4A261" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F4A261" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="#FFD700"
                  fillOpacity={1}
                  fill="url(#colorTasks)"
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#F4A261"
                  fillOpacity={1}
                  fill="url(#colorCompleted)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassmorphicCard>

        {/* AI Agents Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#2C2C2E]">Your AI Agent Team</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#8B5E3C]">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">All systems operational</span>
              </div>
              <button
                onClick={() => setIsChatOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare size={16} />
                Team Chat
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.slice(0, 7).map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AgentCard
                  agent={agent}
                  onAssignTask={handleAssignTask}
                  onOpenChat={handleOpenChat}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <GlassmorphicCard className="p-6">
          <h3 className="text-lg font-bold text-[#2C2C2E] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Deploy Website', icon: '🚀', color: 'from-[#FFD700] to-[#F4A261]', action: handleViewLive },
              { label: 'Generate Report', icon: '📊', color: 'from-[#F4A261] to-[#8B5E3C]' },
              { label: 'Schedule Meeting', icon: '📅', color: 'from-[#8B5E3C] to-[#800020]' },
              { label: 'Backup Data', icon: '💾', color: 'from-[#800020] to-[#FFD700]' },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                className={`p-4 bg-gradient-to-r ${action.color} text-white rounded-xl
                           hover:shadow-lg transition-all duration-300 text-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action || (() => toast.success(`${action.label} initiated!`))}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.label}</div>
              </motion.button>
            ))}
          </div>
        </GlassmorphicCard>
      </div>

      {/* Chat Interface */}
      <ChatInterface
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        selectedAgentId={selectedAgentId}
      />

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-[#FFD700] to-[#F4A261] 
                   text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(255, 215, 0, 0.7)', '0 0 0 10px rgba(255, 215, 0, 0)', '0 0 0 0 rgba(255, 215, 0, 0)']
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
        >
          <MessageSquare size={24} />
        </motion.button>
      )}
    </div>
  );
};
