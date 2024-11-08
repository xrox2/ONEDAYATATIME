import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const RelationshipTimeline = () => {
  // Sample data - Each point represents an interaction/activity
  const data = [
    { day: '11/2', impact: 8, duration: 60, activity: 'Date Night', type: 'quality-time' },
    { day: '11/3', impact: -3, duration: 30, activity: 'Argument about chores', type: 'conflict' },
    { day: '11/4', impact: 5, duration: 45, activity: 'Morning walk', type: 'quality-time' },
    { day: '11/5', impact: 6, duration: 90, activity: 'Cooking together', type: 'shared-activity' },
    { day: '11/6', impact: -2, duration: 20, activity: 'Miscommunication', type: 'conflict' },
    { day: '11/7', impact: 4, duration: 40, activity: 'Deep conversation', type: 'communication' },
    { day: '11/8', impact: 7, duration: 120, activity: 'Weekend project', type: 'shared-activity' },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 shadow-lg rounded-md border text-sm">
          <p className="font-medium">{data.activity}</p>
          <p className="text-gray-600">Impact: {data.impact > 0 ? '+' : ''}{data.impact}</p>
          <p className="text-gray-600">Duration: {data.duration} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="day" 
            name="Day" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            dataKey="impact" 
            name="Impact" 
            domain={[-10, 10]}
            tick={{ fontSize: 12 }}
          />
          <ZAxis 
            dataKey="duration" 
            range={[50, 400]} 
            name="Duration" 
          />
          <Tooltip content={<CustomTooltip />} />
          <Scatter 
            name="Positive"
            data={data.filter(d => d.impact > 0)}
            fill="#22c55e"
            fillOpacity={0.6}
          />
          <Scatter 
            name="Negative"
            data={data.filter(d => d.impact <= 0)}
            fill="#ef4444"
            fillOpacity={0.6}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RelationshipTimeline;