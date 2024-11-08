import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Heart,
  MessageSquare,
  Brain,
  Users,
  Flower2,
  Apple,
  Moon,
  Sun,
  Waves,
  Home,
  TreePine,
  Bike
} from 'lucide-react';

const HealthDashboard = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="space-y-8">
      {/* Interactive House Visualization */}
      <div className="w-full">
        <div className="relative w-full h-96">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            {/* House Structure */}
            <path 
              d="M200 300 L400 150 L600 300 L600 500 L200 500 Z" 
              fill="#e5e7eb" 
              stroke="#374151" 
              strokeWidth="2"
            />
            <path 
              d="M350 500 L350 400 L450 400 L450 500" 
              fill="#d1d5db" 
              stroke="#374151" 
              strokeWidth="2"
            />
            
            {/* Couple holding heart */}
            {/* Person 1 */}
            <circle cx="350" cy="350" r="25" fill="#60a5fa" />
            <path d="M350 375 L350 425" stroke="#60a5fa" strokeWidth="4" />
            <path d="M350 385 L330 415" stroke="#60a5fa" strokeWidth="4" />
            <path d="M350 385 L370 415" stroke="#60a5fa" strokeWidth="4" />
            
            {/* Person 2 */}
            <circle cx="450" cy="350" r="25" fill="#f472b6" />
            <path d="M450 375 L450 425" stroke="#f472b6" strokeWidth="4" />
            <path d="M450 385 L430 415" stroke="#f472b6" strokeWidth="4" />
            <path d="M450 385 L470 415" stroke="#f472b6" strokeWidth="4" />
            
            {/* Interactive Heart */}
            <path 
              d="M370 340 C370 320 400 320 400 340 C400 320 430 320 430 340 L400 370 Z" 
              fill={hoveredElement === 'heart' ? '#ef4444' : '#f87171'}
              stroke="#881337"
              strokeWidth="2"
              style={{ cursor: 'pointer', transition: 'fill 0.3s ease' }}
              onMouseEnter={() => setHoveredElement('heart')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={() => setActiveSection('relationship')}
            />
            
            {/* Mental Wellness (Brain in window) */}
            <circle 
              cx="280" 
              cy="350" 
              r="20" 
              fill={hoveredElement === 'mental' ? '#a78bfa' : '#c4b5fd'}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredElement('mental')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={() => setActiveSection('mental')}
            />
            
            {/* Physical Health (Sun) */}
            <circle 
              cx="520" 
              cy="350" 
              r="20" 
              fill={hoveredElement === 'physical' ? '#fcd34d' : '#fde68a'}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredElement('physical')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={() => setActiveSection('physical')}
            />
            
            {/* Environmental Health (Tree) */}
            <path 
              d="M220 480 C230 460 240 480 250 460 C260 480 270 460 280 480" 
              stroke={hoveredElement === 'environment' ? '#059669' : '#10b981'}
              fill="none"
              strokeWidth="4"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredElement('environment')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={() => setActiveSection('environment')}
            />

            {/* Sleep & Rest (Moon) */}
            <circle 
              cx="400" 
              cy="250" 
              r="15" 
              fill={hoveredElement === 'rest' ? '#6b7280' : '#9ca3af'}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredElement('rest')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={() => setActiveSection('rest')}
            />
          </svg>

          {/* Tooltips */}
          {hoveredElement === 'heart' && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg">
              Relationship & Social Bonds
            </div>
          )}
          {hoveredElement === 'mental' && (
            <div className="absolute top-1/2 left-1/4 bg-white p-2 rounded shadow-lg">
              Mental Wellness & Emotional Health
            </div>
          )}
          {hoveredElement === 'physical' && (
            <div className="absolute top-1/2 right-1/4 bg-white p-2 rounded shadow-lg">
              Physical Health & Movement
            </div>
          )}
          {hoveredElement === 'environment' && (
            <div className="absolute bottom-1/4 left-1/4 bg-white p-2 rounded shadow-lg">
              Environmental Wellness
            </div>
          )}
          {hoveredElement === 'rest' && (
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg">
              Sleep & Rest
            </div>
          )}
        </div>

        {/* Content Area for Clicked Sections */}
        {activeSection && (
          <Card className="mt-4 p-4">
            <button 
              onClick={() => setActiveSection(null)}
              className="mb-4 text-sm text-blue-500 hover:underline"
            >
              ← Back to house view
            </button>
            
            {activeSection === 'relationship' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Social & Relationship Wellness</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Connection Goals</h3>
                    <p className="text-sm text-gray-600">Quality time: 2/4 hours</p>
                    <p className="text-sm text-gray-600">Deep conversations: 3/5</p>
                    <p className="text-sm text-gray-600">Shared activities: 2/3</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Social Support</h3>
                    <p className="text-sm text-gray-600">Family check-ins completed</p>
                    <p className="text-sm text-gray-600">Friend meetups planned: 2</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'mental' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Mental & Emotional Wellness</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Daily Practices</h3>
                    <p className="text-sm text-gray-600">Meditation: 15/20 minutes</p>
                    <p className="text-sm text-gray-600">Journaling: Completed</p>
                    <p className="text-sm text-gray-600">Stress level: Moderate</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Growth & Learning</h3>
                    <p className="text-sm text-gray-600">Book progress: 65%</p>
                    <p className="text-sm text-gray-600">New skill practice: 30 min</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'physical' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Physical Wellbeing</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Movement</h3>
                    <p className="text-sm text-gray-600">Steps: 8,500/10,000</p>
                    <p className="text-sm text-gray-600">Exercise: 45 minutes</p>
                    <p className="text-sm text-gray-600">Stretching: Completed</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Nutrition</h3>
                    <p className="text-sm text-gray-600">Water: 6/8 glasses</p>
                    <p className="text-sm text-gray-600">Balanced meals: 2/3</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'environment' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Environmental Health</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Home Environment</h3>
                    <p className="text-sm text-gray-600">Air quality: Good</p>
                    <p className="text-sm text-gray-600">Plants watered: Yes</p>
                    <p className="text-sm text-gray-600">Declutter session: Done</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Outdoor Connection</h3>
                    <p className="text-sm text-gray-600">Nature time: 30 minutes</p>
                    <p className="text-sm text-gray-600">Garden maintenance: Needed</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'rest' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Rest & Recovery</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Sleep Quality</h3>
                    <p className="text-sm text-gray-600">Hours: 7.5/8</p>
                    <p className="text-sm text-gray-600">Quality: Good</p>
                    <p className="text-sm text-gray-600">Bedtime routine: Completed</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-medium">Relaxation</h3>
                    <p className="text-sm text-gray-600">Quiet time: 20 minutes</p>
                    <p className="text-sm text-gray-600">Screen breaks: 3/4</p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default HealthDashboard;