import React from 'react';
import { Heart, Brain, Zap, Coffee, Activity, Smile, Meh, Frown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
    if (value >= 80) return '#22c55e'; // green
    if (value >= 60) return '#eab308'; // yellow
    return '#ef4444'; // red
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
      </CardContent>
    </Card>
  );
};

export default PhysicalWellbeing;