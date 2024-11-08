import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  Target,
  Home,
  Users
} from 'lucide-react';

const Calendar = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'Team meeting', date: '2024-11-08', time: '09:00', type: 'work', assignee: 'Mark' },
    { id: 2, title: 'Grocery shopping', date: '2024-11-08', time: '14:00', type: 'household', assignee: 'shared' },
    { id: 3, title: 'Family dinner', date: '2024-11-10', time: '18:00', type: 'family', assignee: 'all' },
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

  const getEventForDate = (date) => {
    return events.filter(event => event.date === date);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'work': return 'bg-blue-100 text-blue-800';
      case 'household': return 'bg-orange-100 text-orange-800';
      case 'family': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();
    const dateString = formatDate(currentDate);
    const [currentYear, currentMonth] = dateString.split('-');

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border bg-gray-50"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${currentMonth}-${day.toString().padStart(2, '0')}`;
      const dayEvents = getEventForDate(date);
      const isToday = today.toDateString() === new Date(date).toDateString();
      const isSelected = selectedDate.toDateString() === new Date(date).toDateString();

      days.push(
        <div 
          key={day} 
          onClick={() => setSelectedDate(new Date(date))}
          className={`h-24 border p-1 cursor-pointer transition-colors
            ${isToday ? 'bg-blue-50' : 'hover:bg-gray-50'}
            ${isSelected ? 'ring-2 ring-blue-500' : ''}
          `}
        >
          <div className="font-medium text-sm mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.map((event, idx) => (
              <div 
                key={idx}
                className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)}`}
              >
                {event.time} {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Calendar Section */}
          <div className="lg:w-2/3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Calendar</CardTitle>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setCurrentDate(new Date())}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                    >
                      Today
                    </button>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="font-medium">
                        {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
                      </span>
                      <button 
                        onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Header */}
                <div className="grid grid-cols-7 gap-px mb-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="font-medium text-sm text-gray-500 text-center py-2">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-px bg-white">
                  {renderCalendarDays()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Planning Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Quick Add Event */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Add</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Event title"
                      className="flex-1 p-2 border rounded-md"
                    />
                    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="flex-1 p-2 border rounded-md"
                      value={formatDate(selectedDate)}
                      onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    />
                    <input
                      type="time"
                      className="w-32 p-2 border rounded-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tasks Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Tasks Overview</CardTitle>
                  <button 
                    onClick={() => navigate('/tasks')}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    View All →
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Home className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">Household</span>
                      </div>
                      <span className="text-sm text-orange-600">3 pending</span>
                    </div>
                    <div className="text-sm text-gray-600">Next: Clean Kitchen (Today)</div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        <span className="font-medium">Goals</span>
                      </div>
                      <span className="text-sm text-purple-600">4 active</span>
                    </div>
                    <div className="text-sm text-gray-600">1 completed this week</div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Family Events</span>
                      </div>
                      <span className="text-sm text-blue-600">2 upcoming</span>
                    </div>
                    <div className="text-sm text-gray-600">Next: Family Dinner (Sunday)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;