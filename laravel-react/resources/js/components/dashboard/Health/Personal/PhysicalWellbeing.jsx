import React from 'react';
import { Heart, Brain, Zap, Coffee, Activity, Smile, Meh, Frown, AlertCircle, Shield, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Environmental Impact Component
const EnvironmentalImpact = ({ data }) => {
  // Helper function to get color based on status/level
  const getStatusColor = (status) => {
    switch (status) {
      case 'High':
      case 'Good':
        return 'bg-green-500';
      case 'Moderate':
      case 'Fair':
        return 'bg-yellow-500';
      case 'Low':
      case 'Needs Attention':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Impact Legend */}
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500" />
          <span>Challenging Factors</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Supportive Factors</span>
        </div>
      </div>

      {/* Challenging Factors (Stressors) */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500" />
          Current Challenges
        </h4>
        <div className="space-y-2">
          {data.stressors.map((stressor, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{stressor.name}</span>
                <span className={`text-${stressor.level === 'High' ? 'red' : stressor.level === 'Moderate' ? 'yellow' : 'green'}-600`}>
                  {stressor.level} Impact
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getStatusColor(stressor.level)} opacity-60 rounded-full transition-all duration-500`}
                  style={{ width: `${stressor.level === 'High' ? '100%' : stressor.level === 'Moderate' ? '66%' : '33%'}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supportive Elements (Resources & Protective Factors) */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          Support System
        </h4>
        <div className="space-y-2">
          {[...data.resources, ...data.protective].map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span className={`text-${item.status === 'Good' ? 'green' : item.status === 'Fair' ? 'yellow' : 'red'}-600`}>
                  {item.status}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getStatusColor(item.status)} opacity-60 rounded-full transition-all duration-500`}
                  style={{ width: `${item.status === 'Good' ? '100%' : item.status === 'Fair' ? '66%' : '33%'}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Balance Indicator */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Overall Balance</span>
          <Sparkles className="w-4 h-4 text-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ 
                width: `${
                  (([...data.resources, ...data.protective].filter(i => i.status === 'Good').length * 100) /
                  ([...data.resources, ...data.protective].length + data.stressors.length))
                }%` 
              }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {
              [...data.resources, ...data.protective].filter(i => i.status === 'Good').length > data.stressors.filter(s => s.level === 'High').length
                ? 'Well Balanced'
                : 'Needs Attention'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

// Main PhysicalWellbeing Component
const PhysicalWellbeing = ({ name, data = {} }) => {
  const {
    today = {
      rested: 85,
      energy: 85,
      hydration: 80,
      exercise: 60,
      mood: 'good'
    },
    weekAvg = {
      rested: 80,
      energy: 75,
      hydration: 82,
      exercise: 45,
      mood: 'good'
    },
    environmental = {
      stressors: [
        { name: 'Work Deadlines', level: 'High', impact: 'Career & Time Management' },
        { name: 'Home Office Setup', level: 'Moderate', impact: 'Environmental' }
      ],
      resources: [
        { name: 'Support System', status: 'Good', type: 'Social' },
        { name: 'Workspace', status: 'Fair', type: 'Environmental' }
      ],
      protective: [
        { name: 'Exercise Routine', status: 'Good', category: 'Physical' },
        { name: 'Mindfulness', status: 'Fair', category: 'Mental' }
      ]
    }
  } = data;

  const getMoodIcon = (mood) => {
    switch (mood) {
      case 'good':
        return <Smile className="w-5 h-5 text-green-500" />;
      case 'neutral':
        return <Meh className="w-5 h-5 text-yellow-500" />;
      case 'bad':
        return <Frown className="w-5 h-5 text-red-500" />;
      default:
        return <Smile className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusColor = (value) => {
    if (value >= 80) return '#22c55e';
    if (value >= 60) return '#eab308';
    return '#ef4444';
  };

  const getStatusTextColor = (value) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const metrics = [
    { label: 'Rested', todayValue: today.rested, weekValue: weekAvg.rested, unit: '%' },
    { label: 'Energy', todayValue: today.energy, weekValue: weekAvg.energy, unit: '%' },
    { label: 'Hydration', todayValue: today.hydration, weekValue: weekAvg.hydration, unit: '%' },
    { label: 'Exercise', todayValue: today.exercise, weekValue: weekAvg.exercise, unit: 'min' },
    { label: 'Mood', todayValue: today.mood, weekValue: weekAvg.mood, isMood: true }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="w-5 h-5" />
          {name}'s Wellbeing
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Metrics Section */}
          <div className="grid grid-cols-5 gap-4">
            {/* Human Figure - Left column */}
            <div className="relative w-full aspect-[1/2] flex justify-center col-span-2">
              <svg viewBox="0 0 100 200" className="w-full h-full max-w-[100px]">
                <circle
                  cx="50"
                  cy="30"
                  r="20"
                  fill={getStatusColor(today.rested)}
                  opacity={0.8}
                  className="transition-all duration-300"
                />
                <rect
                  x="35"
                  y="55"
                  width="30"
                  height="60"
                  rx="10"
                  fill={getStatusColor(today.energy)}
                  opacity={0.8}
                  className="transition-all duration-300"
                />
                <circle
                  cx="50"
                  cy="85"
                  r="15"
                  fill={getStatusColor(today.hydration)}
                  opacity={0.8}
                  className="transition-all duration-300"
                />
                <rect x="20" y="55" width="12" height="40" rx="5" fill="#e5e7eb" />
                <rect x="68" y="55" width="12" height="40" rx="5" fill="#e5e7eb" />
                <rect x="35" y="120" width="12" height="50" rx="5" fill="#e5e7eb" />
                <rect x="53" y="120" width="12" height="50" rx="5" fill="#e5e7eb" />
              </svg>
            </div>

            {/* Metrics Table - Right columns */}
            <div className="col-span-3">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-gray-600">
                    <th className="font-medium text-left pb-2">Metric</th>
                    <th className="font-medium text-right pb-2">Today</th>
                    <th className="font-medium text-right pb-2">Past Week</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {metrics.map((metric, index) => (
                    <tr key={index} className="text-sm">
                      <td className="py-2 text-gray-600">{metric.label}</td>
                      <td className="py-2 text-right">
                        {metric.isMood ? (
                          getMoodIcon(metric.todayValue)
                        ) : (
                          <span className={`font-bold ${getStatusTextColor(metric.unit === 'min' ? (metric.todayValue/60)*100 : metric.todayValue)}`}>
                            {metric.todayValue}{metric.unit}
                          </span>
                        )}
                      </td>
                      <td className="py-2 text-right">
                        {metric.isMood ? (
                          getMoodIcon(metric.weekValue)
                        ) : (
                          <span className={`font-bold ${getStatusTextColor(metric.unit === 'min' ? (metric.weekValue/60)*100 : metric.weekValue)}`}>
                            {metric.weekValue}{metric.unit}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Environmental Factors Section */}
          <div className="border-t pt-4">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              <h4 className="font-medium">Environmental Factors</h4>
            </div>
            
            <EnvironmentalImpact data={data.environmental} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhysicalWellbeing;