import React from 'react';
import { Heart, Brain, Zap, Coffee, Activity, Smile, Meh, Frown, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import EnvironmentalTimeline from './EnvironmentalTimeline';

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

  const getStressColor = (level) => {
    switch (level) {
      case 'Low':
        return 'text-green-600';
      case 'Moderate':
        return 'text-yellow-600';
      case 'High':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Good':
        return <Smile className="w-4 h-4 text-green-500" />;
      case 'Fair':
        return <Meh className="w-4 h-4 text-yellow-500" />;
      case 'Needs Attention':
        return <Frown className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
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
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-blue-500" />
                <h4 className="font-medium">Environmental Factors</h4>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full opacity-60 mr-1"></span>
                  Stressors
                </span>
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full opacity-60 mr-1"></span>
                  Resources
                </span>
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full opacity-60 mr-1"></span>
                  Protective
                </span>
              </div>
            </div>
            
            {/* Environmental Timeline */}
            <EnvironmentalTimeline data={data.environmental} />

            {/* Summary Lists */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* Stressors */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Active Stressors:</p>
                {data.environmental.stressors.map((stressor, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span>{stressor.name}</span>
                    <span className={getStressColor(stressor.level)}>{stressor.level}</span>
                  </div>
                ))}
              </div>

              {/* Resources */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Available Resources:</p>
                {data.environmental.resources.map((resource, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span>{resource.name}</span>
                    <span className="flex items-center">
                      {getStatusIcon(resource.status)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Protective Factors */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Protective Factors:</p>
                {data.environmental.protective.map((factor, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span>{factor.name}</span>
                    <span className="flex items-center">
                      {getStatusIcon(factor.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhysicalWellbeing;