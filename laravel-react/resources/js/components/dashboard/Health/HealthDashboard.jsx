import React, { useState } from 'react';
import {
  Heart, Brain, Users, Activity,
  Shield, AlertCircle, TreePine,
  Smile, Frown, Meh
} from 'lucide-react';
import PhysicalWellbeing from './Personal/PhysicalWellbeing';

const HealthDashboard = ({ activeSection, setActiveSection }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  // Helper function for stress level color
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

  // Helper function for status icon
  const getStatusIcon = (level) => {
    switch (level) {
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

  const environmentalFactors = {
    stressors: [
      { name: 'Work Deadlines', level: 'High', impact: 'Career & Time Management' },
      { name: 'Financial Planning', level: 'Moderate', impact: 'Resource Management' },
      { name: 'Home Maintenance', level: 'Low', impact: 'Environmental' }
    ],
    resources: [
      { name: 'Family Support', status: 'Good', type: 'Social' },
      { name: 'Healthcare Access', status: 'Good', type: 'Health' },
      { name: 'Living Space', status: 'Fair', type: 'Environmental' }
    ],
    protective: [
      { name: 'Regular Exercise', status: 'Good', category: 'Physical' },
      { name: 'Social Connections', status: 'Fair', category: 'Social' },
      { name: 'Mindfulness Practice', status: 'Needs Attention', category: 'Mental' }
    ]
  };

  return (
    <div className="relative">
      {/* Main Visualization */}
      <div className="relative w-full h-[400px] bg-gray-50 rounded-lg p-4">
        {/* House SVG */}
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* Base Structure */}
          <path 
            d="M200 300 L400 150 L600 300 L600 500 L200 500 Z" 
            fill="#f8fafc" 
            stroke="#e2e8f0" 
            strokeWidth="2"
          />
          <path 
            d="M350 500 L350 400 L450 400 L450 500" 
            fill="#f1f5f9" 
            stroke="#e2e8f0" 
            strokeWidth="2"
          />
          
          {/* Roxi's Physical Wellbeing */}
          <g 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveSection('physical-roxi')}
            onMouseEnter={() => setHoveredElement('physical-roxi')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <circle cx="350" cy="250" r="35" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
            <Activity x="332" y="242" className="w-8 h-8 text-green-600" />
          </g>

          {/* Mark's Physical Wellbeing */}
          <g 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveSection('physical-mark')}
            onMouseEnter={() => setHoveredElement('physical-mark')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <circle cx="450" cy="250" r="35" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
            <Activity x="432" y="242" className="w-8 h-8 text-green-600" />
          </g>

          {/* Mental Health */}
          <g 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveSection('mental')}
            onMouseEnter={() => setHoveredElement('mental')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <circle cx="300" cy="350" r="35" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2"/>
            <Brain x="282" y="342" className="w-8 h-8 text-purple-600" />
          </g>

          {/* Social Connections */}
          <g 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveSection('social')}
            onMouseEnter={() => setHoveredElement('social')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <circle cx="500" cy="350" r="35" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
            <Users x="482" y="342" className="w-8 h-8 text-blue-600" />
          </g>

          {/* Environmental */}
          <g 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setActiveSection('environmental')}
            onMouseEnter={() => setHoveredElement('environmental')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <circle cx="400" cy="450" r="35" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <TreePine x="382" y="442" className="w-8 h-8 text-emerald-600" />
          </g>
        </svg>

        {/* Tooltips */}
        {hoveredElement && (
          <div 
            className="absolute bg-white p-2 rounded shadow-lg text-sm"
            style={{
              top: hoveredElement.includes('physical') ? '30%' :
                   hoveredElement === 'mental' ? '50%' :
                   hoveredElement === 'social' ? '50%' :
                   '70%',
              left: hoveredElement === 'physical-roxi' ? '40%' :
                    hoveredElement === 'physical-mark' ? '60%' :
                    hoveredElement === 'mental' ? '30%' :
                    hoveredElement === 'social' ? '70%' :
                    '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            <div className="font-medium">
              {hoveredElement === 'physical-roxi' && "Roxi's Physical Wellbeing"}
              {hoveredElement === 'physical-mark' && "Mark's Physical Wellbeing"}
              {hoveredElement === 'mental' && 'Mental & Emotional Wellbeing'}
              {hoveredElement === 'social' && 'Social Connections & Support'}
              {hoveredElement === 'environmental' && 'Environmental Factors'}
            </div>
            <div className="text-xs text-gray-500 mt-1">Click to view details</div>
          </div>
        )}
      </div>

      {/* Current Factors Panel */}
      <div className="absolute top-4 right-4 w-64 bg-white rounded-lg shadow-sm border p-4">
        <h4 className="font-medium mb-3 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 text-blue-500" />
          Current Influences
        </h4>
        
        {/* Stressors */}
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-gray-600">Active Stressors:</p>
          {environmentalFactors.stressors.map((stressor, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span>{stressor.name}</span>
              <span className={getStressColor(stressor.level)}>{stressor.level}</span>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-gray-600">Available Resources:</p>
          {environmentalFactors.resources.map((resource, idx) => (
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
          {environmentalFactors.protective.map((factor, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span>{factor.name}</span>
              <span className="flex items-center">
                {getStatusIcon(factor.status)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Details */}
      {activeSection && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="font-medium mb-3">
            {activeSection === 'physical-roxi' && "Roxi's Physical Wellbeing"}
            {activeSection === 'physical-mark' && "Mark's Physical Wellbeing"}
            {activeSection === 'mental' && 'Mental Wellbeing Details'}
            {activeSection === 'social' && 'Social Connection Details'}
            {activeSection === 'environmental' && 'Environmental Factors Details'}
          </h3>
          
          {(activeSection === 'physical-roxi' || activeSection === 'physical-mark') ? (
            <div className="grid md:grid-cols-2 gap-6">
            {activeSection === 'physical-roxi' && (
              <PhysicalWellbeing
                name="Roxi"
                data={{
                  sleep: 7.5,
                  energy: 85,
                  hydration: 80,
                  nutrition: 75,
                  exercise: 60,
                  pain: null
                }}
              />
            )}
            {activeSection === 'physical-mark' && (
              <PhysicalWellbeing
                name="Mark"
                data={{
                  sleep: 6.5,
                  energy: 70,
                  hydration: 65,
                  nutrition: 80,
                  exercise: 45,
                  pain: null
                }}
              />
            )}
          </div>
        ) : (
          // Other sections content
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              {activeSection === 'mental' && 'Mental health tracking and resources...'}
              {activeSection === 'social' && 'Social connections and relationship metrics...'}
              {activeSection === 'environmental' && 'Environmental factors and conditions...'}
            </p>
          </div>
        )}
      </div>
    )}
  </div>
);
};

export default HealthDashboard;