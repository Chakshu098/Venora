import { motion } from 'framer-motion';
import { MessageSquare, Play, Settings, BarChart3 } from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { Agent } from '../store/useStore';

interface AgentCardProps {
  agent: Agent;
  onAssignTask: (agentId: string) => void;
  onOpenChat: (agentId: string) => void;
}

export const AgentCard = ({ agent, onAssignTask, onOpenChat }: AgentCardProps) => {
  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'overloaded': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 90) return 'text-green-500';
    if (mood >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <GlassmorphicCard className="p-6 h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        {/* Agent Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {agent.avatar}
            </motion.div>
            <div>
              <h3 className="font-bold text-[#2C2C2E]">{agent.name}</h3>
              <p className="text-sm text-[#8B5E3C]/70">{agent.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
            <span className="text-xs text-[#8B5E3C] capitalize">{agent.status}</span>
          </div>
        </div>

        {/* Agent Description */}
        <p className="text-[#8B5E3C]/80 text-sm mb-4">{agent.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#FAF8F4] rounded-xl p-3 text-center">
            <div className="font-bold text-[#F4A261] text-xl">{agent.tasks}</div>
            <div className="text-xs text-[#8B5E3C]">Active Tasks</div>
          </div>
          <div className="bg-[#FAF8F4] rounded-xl p-3 text-center">
            <div className={`font-bold text-xl ${getMoodColor(agent.mood)}`}>
              {agent.mood}%
            </div>
            <div className="text-xs text-[#8B5E3C]">Mood</div>
          </div>
        </div>

        {/* Mood Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#8B5E3C]">Performance</span>
            <span className="text-xs font-bold text-[#F4A261]">{agent.mood}%</span>
          </div>
          <div className="w-full bg-[#D7C0AE]/30 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-[#FFD700] to-[#F4A261] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${agent.mood}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            onClick={() => onAssignTask(agent.id)}
            className="py-2 px-3 bg-gradient-to-r from-[#FFD700] to-[#F4A261]
                     text-white text-sm font-medium rounded-lg
                     hover:shadow-lg transition-all duration-300
                     flex items-center justify-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={14} />
            Assign
          </motion.button>
          
          <motion.button
            onClick={() => onOpenChat(agent.id)}
            className="py-2 px-3 bg-[#D7C0AE] text-[#2C2C2E]
                     text-sm font-medium rounded-lg
                     hover:bg-[#8B5E3C] hover:text-white
                     transition-all duration-300
                     flex items-center justify-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare size={14} />
            Chat
          </motion.button>
        </div>

        {/* Settings Button */}
        <motion.button
          className="w-full mt-3 py-2 text-[#8B5E3C] hover:text-[#F4A261]
                   transition-colors duration-300 flex items-center justify-center gap-1"
          whileHover={{ scale: 1.02 }}
        >
          <Settings size={14} />
          <span className="text-xs">Settings</span>
        </motion.button>
      </motion.div>
    </GlassmorphicCard>
  );
};