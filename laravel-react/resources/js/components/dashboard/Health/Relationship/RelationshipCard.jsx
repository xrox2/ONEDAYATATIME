import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Heart,
  MessageSquare,
  Calendar,
  BarChart,
  Book,
  Target,
  Users,
  Brain,
  Home,
  Clock,
  Lightbulb,
  Shield
} from 'lucide-react';


const TherapyTools = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();

    const handleToolClick = (toolTitle) => {
      if (toolTitle === 'Structured Dialogues') {
        navigate('/extendeddialogue');
      }
    };


  const categories = [
    { id: 'all', name: 'All Tools', icon: <Heart /> },
    { id: 'communication', name: 'Communication', icon: <MessageSquare /> },
    { id: 'emotional', name: 'Emotional Bond', icon: <Users /> },
    { id: 'behavioral', name: 'Behavioral', icon: <Target /> },
    { id: 'cognitive', name: 'Cognitive', icon: <Brain /> },
    { id: 'crisis', name: 'Crisis Management', icon: <Shield /> }
  ];

  const tools = [
    // Communication Tools
    {
      category: 'communication',
      title: 'Structured Dialogues',
      description: 'Imago-based dialogue sessions for deep understanding',
      framework: 'Imago Therapy',
      features: [
        'Sender-receiver format',
        'Mirroring exercises',
        'Validation practice',
        'Empathy expression'
      ],
      frequency: 'Weekly'
    },
    {
      category: 'communication',
      title: 'Daily Temperature Check',
      description: 'Quick daily check-ins for emotional awareness',
      framework: 'Gottman Method',
      features: [
        'Mood tracking',
        'Basic needs discussion',
        'Appreciation sharing',
        'Stress level monitoring'
      ],
      frequency: 'Daily'
    },

    // Emotional Bond Tools
    {
      category: 'emotional',
      title: 'Love Maps Exercise',
      description: 'Deepen knowledge of partners world',
      framework: 'Gottman Method',
      features: [
        'Partner questionnaires',
        'World exploration activities',
        'Update tracking',
        'Memory building'
      ],
      frequency: 'Bi-weekly'
    },
    {
      category: 'emotional',
      title: 'Attachment History',
      description: 'Understanding attachment patterns',
      framework: 'EFT (Emotional Focused Therapy)',
      features: [
        'Childhood attachment exploration',
        'Pattern identification',
        'Trigger mapping',
        'Healing strategies'
      ],
      frequency: 'Monthly'
    },

    // Behavioral Tools
    {
      category: 'behavioral',
      title: 'Caring Behaviors',
      description: 'Track and increase positive interactions',
      framework: 'Behavioral Couples Therapy',
      features: [
        'Daily caring actions',
        'Appreciation log',
        'Behavior exchange',
        'Progress tracking'
      ],
      frequency: 'Daily'
    },
    {
      category: 'behavioral',
      title: 'Shared Goals Planner',
      description: 'Set and track relationship goals',
      framework: 'Solution-Focused Therapy',
      features: [
        'Goal setting',
        'Action planning',
        'Progress monitoring',
        'Celebration tracking'
      ],
      frequency: 'Monthly'
    },

    // Cognitive Tools
    {
      category: 'cognitive',
      title: 'Thought Records',
      description: 'Challenge negative relationship thoughts',
      framework: 'Cognitive Behavioral Therapy',
      features: [
        'Thought identification',
        'Evidence examination',
        'Perspective challenging',
        'Alternative thinking'
      ],
      frequency: 'As needed'
    },
    {
      category: 'cognitive',
      title: 'Assumption Explorer',
      description: 'Examine relationship assumptions',
      framework: 'CBT',
      features: [
        'Assumption logging',
        'Reality testing',
        'Impact analysis',
        'Belief updating'
      ],
      frequency: 'Weekly'
    },

    // Crisis Management
    {
      category: 'crisis',
      title: 'Time-Out Protocol',
      description: 'Structured approach to managing conflicts',
      framework: 'Multiple Approaches',
      features: [
        'Time-out signals',
        'Cool-down procedures',
        'Return planning',
        'Resolution tracking'
      ],
      frequency: 'As needed'
    },
    {
      category: 'crisis',
      title: 'Repair Attempts',
      description: 'Track and improve repair attempts',
      framework: 'Gottman Method',
      features: [
        'Repair attempt logging',
        'Success tracking',
        'Strategy development',
        'Pattern identification'
      ],
      frequency: 'As needed'
    }
  ];

    const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Couples Therapy Tools</h1>

        {/* Category Navigation */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleToolClick(tool.title)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {tool.frequency}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{tool.framework}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapyTools;
