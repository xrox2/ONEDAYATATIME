import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  DollarSign,
  Heart,
  Calendar,
  Target,
  Settings,
  List,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Bell
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    if (category === 'relationship') {
      navigate('/relationship');
    }
  };

  const modules = [
    {
      title: 'Expense Tracker',
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      description: 'Track shared expenses, budgets, and financial goals',
      value: '$2,450.80',
      subtitle: 'This month\'s spending',
      trend: <TrendingDown className="h-4 w-4 text-red-500" />,
      trendText: '-$320 from last month',
      category: 'finances'
    },
    {
      title: 'Relationship Growth',
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: 'Couple therapy exercises and reflections',
      value: '3',
      subtitle: 'Pending exercises',
      badge: 'Priority',
      category: 'relationship'
    },
    {
      title: 'Calendar',
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      description: 'Shared calendar for dates, appointments, and events',
      value: '5',
      subtitle: 'Upcoming events',
      notification: '2 events today',
      category: 'planning'
    },
    {
      title: 'Goals',
      icon: <Target className="h-8 w-8 text-purple-500" />,
      description: 'Track shared goals and milestones',
      value: '4',
      subtitle: 'Active goals',
      trend: <TrendingUp className="h-4 w-4 text-green-500" />,
      trendText: '1 completed this week',
      category: 'planning'
    },
    {
      title: 'Household',
      icon: <Home className="h-8 w-8 text-orange-500" />,
      description: 'Manage shared to-dos and household responsibilities',
      value: '8',
      subtitle: 'Tasks pending',
      badge: '3 overdue',
      category: 'household'
    },
    {
      title: 'Communication',
      icon: <MessageSquare className="h-8 w-8 text-yellow-500" />,
      description: 'Message board for notes and daily check-ins',
      value: '2',
      subtitle: 'New messages',
      notification: 'Last message 2h ago',
      category: 'relationship'
    }
  ];

  const categories = {
    finances: 'bg-green-50',
    relationship: 'bg-red-50',
    planning: 'bg-blue-50',
    household: 'bg-orange-50'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Our Family Hub</h1>
            <p className="text-gray-600 mt-2">Welcome to your shared space</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-gray-500" />
              <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">3</span>
            </div>
            <div className="text-sm text-gray-500 border-l pl-4">
              {new Date().toLocaleDateString()}
            </div>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow ${categories[module.category]} border-l-4 border-l-${module.icon.props.className.split(' ').find(c => c.includes('text-')).replace('text', 'border')} cursor-pointer`}
              onClick={() => handleCardClick(module.category)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {module.icon}
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                  {module.badge && (
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                      {module.badge}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl font-bold">{module.value}</span>
                  {module.trend && (
                    <div className="flex items-center text-sm">
                      {module.trend}
                      <span className="ml-1 text-gray-600">{module.trendText}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-2">{module.subtitle}</p>
                <p className="text-gray-600 text-sm">{module.description}</p>
                {module.notification && (
                  <div className="mt-4 text-sm text-gray-500 flex items-center space-x-2">
                    <Bell className="h-4 w-4" />
                    <span>{module.notification}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
