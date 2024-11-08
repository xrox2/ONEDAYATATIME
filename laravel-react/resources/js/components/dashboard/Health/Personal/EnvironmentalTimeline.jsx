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

const EnvironmentalTimeline = ({ data }) => {
  // Transform the data for visualization
  const transformedData = [
    ...data.stressors.map(item => ({
      ...item,
      impact: item.level === 'High' ? -3 : item.level === 'Moderate' ? -2 : -1,
      category: 'Stressor',
      size: 100
    })),
    ...data.resources.map(item => ({
      ...item,
      impact: item.status === 'Good' ? 3 : item.status === 'Fair' ? 2 : 1,
      category: 'Resource',
      size: 100
    })),
    ...data.protective.map(item => ({
      ...item,
      impact: item.status === 'Good' ? 3 : item.status === 'Fair' ? 2 : 1,
      category: 'Protective',
      size: 100
    }))
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 shadow-lg rounded-md border text-sm">
          <p className="font-medium">{data.name}</p>
          <p className="text-gray-600">Type: {data.category}</p>
          <p className="text-gray-600">
            {data.level ? `Level: ${data.level}` : `Status: ${data.status}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[150px]">
      <ResponsiveContainer>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            type="category"
            tick={{ fontSize: 10 }}
            interval={0}
          />
          <YAxis 
            dataKey="impact" 
            domain={[-4, 4]}
            tick={false}
            label={{ value: 'Impact', angle: -90, position: 'insideLeft' }}
          />
          <ZAxis 
            dataKey="size" 
            range={[50, 400]} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Scatter 
            data={transformedData.filter(d => d.category === 'Stressor')}
            fill="#ef4444"
            fillOpacity={0.6}
          />
          <Scatter 
            data={transformedData.filter(d => d.category === 'Resource')}
            fill="#22c55e"
            fillOpacity={0.6}
          />
          <Scatter 
            data={transformedData.filter(d => d.category === 'Protective')}
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnvironmentalTimeline;