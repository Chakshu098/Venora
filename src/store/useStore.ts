import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  xp: number;
  level: number;
  achievements: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'overloaded';
  avatar: string;
  tasks: number;
  mood: number; // 0-100
  description: string;
}

export interface BusinessData {
  niche: string;
  tone: string;
  colorScheme: string;
  domainName: string;
  websitePrompt: string;
  completed: boolean;
}

interface AppState {
  user: User | null;
  currentStep: number;
  isAuthenticated: boolean;
  businessData: BusinessData;
  agents: Agent[];
  xpProgress: number;
  
  // Actions
  setUser: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  setCurrentStep: (step: number) => void;
  updateBusinessData: (data: Partial<BusinessData>) => void;
  addXP: (amount: number) => void;
  updateAgentStatus: (agentId: string, status: Agent['status']) => void;
}

export const useStore = create<AppState>((set, get) => ({
  user: null,
  currentStep: 0,
  isAuthenticated: false,
  xpProgress: 0,
  businessData: {
    niche: '',
    tone: '',
    colorScheme: '',
    domainName: '',
    websitePrompt: '',
    completed: false,
  },
  agents: [
    {
      id: '1',
      name: 'Alex',
      role: 'Team Leader Agent',
      status: 'active',
      avatar: '👑',
      tasks: 12,
      mood: 95,
      description: 'Task distributor and team coordinator'
    },
    {
      id: '2',
      name: 'Dev',
      role: 'Developer Agent',
      status: 'active',
      avatar: '💻',
      tasks: 8,
      mood: 88,
      description: 'Coding, bug fixing, and technical solutions'
    },
    {
      id: '3',
      name: 'Maya',
      role: 'Manager Agent',
      status: 'idle',
      avatar: '📊',
      tasks: 5,
      mood: 82,
      description: 'Operations and strategic planning'
    },
    {
      id: '4',
      name: 'Mark',
      role: 'Marketing Agent',
      status: 'active',
      avatar: '📈',
      tasks: 15,
      mood: 92,
      description: 'Social media and campaign management'
    },
    {
      id: '5',
      name: 'Sophie',
      role: 'Customer Service Agent',
      status: 'active',
      avatar: '💬',
      tasks: 22,
      mood: 75,
      description: 'Client handling and support'
    },
    {
      id: '6',
      name: 'Victor',
      role: 'Problem Solver Agent',
      status: 'idle',
      avatar: '🔧',
      tasks: 3,
      mood: 90,
      description: 'Resolving internal issues and optimization'
    },
    {
      id: '7',
      name: 'Stella',
      role: 'Strategy Agent',
      status: 'active',
      avatar: '🎯',
      tasks: 7,
      mood: 85,
      description: 'Growth and innovation planning'
    }
  ],

  setUser: (user) => set({ user, isAuthenticated: true }),
  
  login: (email, password) => {
    // Simulate login
    const user: User = {
      id: '1',
      name: 'Elite Entrepreneur',
      email,
      xp: 2450,
      level: 5,
      achievements: ['First Launch', 'Early Adopter', 'Business Pioneer']
    };
    set({ user, isAuthenticated: true });
  },

  logout: () => set({ 
    user: null, 
    isAuthenticated: false, 
    currentStep: 0,
    businessData: {
      niche: '',
      tone: '',
      colorScheme: '',
      domainName: '',
      websitePrompt: '',
      completed: false,
    }
  }),

  setCurrentStep: (step) => set({ currentStep: step }),

  updateBusinessData: (data) => set((state) => ({
    businessData: { ...state.businessData, ...data }
  })),

  addXP: (amount) => set((state) => {
    const newXP = (state.user?.xp || 0) + amount;
    const newLevel = Math.floor(newXP / 500) + 1;
    return {
      user: state.user ? { ...state.user, xp: newXP, level: newLevel } : null,
      xpProgress: state.xpProgress + (amount / 500) * 100
    };
  }),

  updateAgentStatus: (agentId, status) => set((state) => ({
    agents: state.agents.map(agent =>
      agent.id === agentId ? { ...agent, status } : agent
    )
  }))
}));
