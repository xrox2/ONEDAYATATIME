import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HealthDashboard from './Health/HealthDashboard';
import Calendar from './Calendar/Calendar';
import {
  Heart,
  MessageSquare,
  Calendar as CalendarIcon,
  Target,
  Settings,
  Bell,
  Check,
  Plus,
  Users,
  Brain,
  Flower2,
  Activity,
  Moon,
  Sun,
  Waves,
  Home,
  TreePine,
  Bike,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Utensils
} from 'lucide-react';

const FamilyDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [activeSection, setActiveSection] = useState(null);

  const handleCardClick = (category) => {
    if (category === 'relationship') {
      navigate('/relationship');
    } else if (category === 'household') {
      navigate('/tasks');
    }
  };

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
        active 
          ? 'bg-white text-blue-600 border-t-2 border-blue-600' 
          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

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

        <div className="flex space-x-1 mb-6 border-b">
          <TabButton 
            id="home" 
            label="Home" 
            active={activeTab === 'home'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="health" 
            label="Health" 
            active={activeTab === 'health'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="finance" 
            label="Finance" 
            active={activeTab === 'finance'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="calendar" 
            label="Calendar" 
            active={activeTab === 'calendar'} 
            onClick={setActiveTab} 
          />
        </div>

        {activeTab === 'home' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>9:00 AM - Team meeting (Mark)</span>
                      <span className="text-sm text-gray-500">2h left</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>2:00 PM - Grocery shopping</span>
                      <span className="text-sm text-gray-500">shared</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>3 Pending Tasks</span>
                      <button className="text-blue-600 text-sm" onClick={() => handleCardClick('household')}>
                        View Tasks →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 text-sm bg-blue-50 rounded hover:bg-blue-100 flex items-center justify-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Task
                    </button>
                    <button className="p-3 text-sm bg-blue-50 rounded hover:bg-blue-100 flex items-center justify-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Track Expense
                    </button>
                    <button className="p-3 text-sm bg-blue-50 rounded hover:bg-blue-100 flex items-center justify-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Schedule Event
                    </button>
                    <button className="p-3 text-sm bg-purple-50 rounded hover:bg-purple-100 flex items-center justify-center">
                      <Brain className="w-4 h-4 mr-2" />
                      Health Check
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded bg-green-50">
                    <p className="font-medium">House Fund</p>
                    <p className="text-sm text-gray-600">$2,400 / $3,000</p>
                    <div className="w-full bg-gray-200 rounded h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="p-4 border rounded">
                    <p className="font-medium">Upcoming</p>
                    <p className="text-sm text-gray-600">Date night (Saturday)</p>
                    <p className="text-sm text-gray-600">Meal prep (Sunday)</p>
                  </div>
                  <div className="p-4 border rounded">
                    <p className="font-medium">Weekly Tasks</p>
                    <p className="text-sm text-gray-600">4 completed / 6 total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Core Health Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Physical Health */}
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Physical Wellbeing</CardTitle>
                      <p className="text-sm text-gray-500">Core health metrics</p>
                    </div>
                    <Activity className="h-6 w-6 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Sleep</p>
                      <p className="text-lg font-bold text-green-600">7.5h</p>
                      <p className="text-xs text-gray-500">avg/night</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Exercise</p>
                      <p className="text-lg font-bold text-blue-600">5/7</p>
                      <p className="text-xs text-gray-500">days active</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Nutrition</p>
                      <p className="text-lg font-bold text-purple-600">85%</p>
                      <p className="text-xs text-gray-500">balanced</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Priority: Improve sleep schedule
                  </div>
                </CardContent>
              </Card>

              {/* Relationship Health */}
              <Card onClick={() => handleCardClick('relationship')} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Relationship Health</CardTitle>
                      <p className="text-sm text-gray-500">Connection & communication</p>
                    </div>
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Quality Time</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-bold text-blue-600">6.5h</p>
                        <p className="text-xs text-gray-500">daily</p>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Check-ins</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-bold text-green-600">89%</p>
                        <p className="text-xs text-gray-500">completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 flex justify-between">
                    <span>Next: Evening check-in</span>
                    <span className="text-blue-600 cursor-pointer">View exercises →</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Family Health Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <HealthDashboard 
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </CardContent>
            </Card>

            {/* Growth & Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Active Goals</CardTitle>
                    <Target className="h-6 w-6 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">Morning Routine</p>
                        <span className="text-sm text-gray-500">6/7 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-2">
                        <div className="bg-purple-500 h-2 rounded" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium">Family Dinner</p>
                        <span className="text-sm text-gray-500">5/7 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-2">
                        <div className="bg-blue-500 h-2 rounded" style={{width: '71%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Weekly Activities</CardTitle>
                    <CalendarIcon className="h-6 w-6 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-medium">Upcoming</p>
                      <p className="text-sm text-gray-600 mt-1">Family walk (Thursday)</p>
                      <p className="text-sm text-gray-600 mt-1">Cooking together (Saturday)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Expense Overview</CardTitle>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl font-bold">$2,450.80</span>
                  <div className="flex items-center text-sm">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span className="ml-1 text-gray-600">-$320 from last month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">This month's spending</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="space-y-6">
            {/* Calendar View */}
            <Card>
              <CardContent className="p-0">
                <Calendar />
              </CardContent>
            </Card>

            {/* Task Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card onClick={() => handleCardClick('household')} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Household Tasks</CardTitle>
                    <Home className="h-8 w-8 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">8</p>
                  <p className="text-sm text-gray-500 mb-2">Tasks pending</p>
                  <p className="text-red-500 text-sm">3 tasks overdue</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Goals Tracking</CardTitle>
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">4</p>
                  <p className="text-sm text-gray-500 mb-2">Active goals</p>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="ml-1 text-gray-600">1 completed this week</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Add Event Card */}
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Quick Add Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Event title"
                      className="p-2 border rounded-md"
                    />
                    <input
                      type="date"
                      className="p-2 border rounded-md"
                    />
                    <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center">
                      <Plus className="w-5 h-5 mr-2" />
                      Add Event
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyDashboard;