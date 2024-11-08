import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  MessageSquare,
  Plus,
  ChevronDown,
  ChevronUp,
  Save,
  Check,
  Clock,
  AlertCircle
} from 'lucide-react';

const DialogueExchange = ({ index, expanded, onToggle, isComplete }) => {
  return (
    <Card className="mb-4">
      <div
        className={`p-4 cursor-pointer flex justify-between items-center ${
          isComplete ? 'bg-green-50' : ''
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium">Exchange {index + 1}</h3>
            <p className="text-sm text-gray-600">
              {isComplete ? (
                <span className="flex items-center text-green-600">
                  <Check className="w-4 h-4 mr-1" /> Complete
                </span>
              ) : (
                <span className="flex items-center text-orange-600">
                  <Clock className="w-4 h-4 mr-1" /> In Progress
                </span>
              )}
            </p>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {expanded && (
        <CardContent className="border-t">
          <div className="space-y-6 pt-4">
            {/* Sender's Experience */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium">Sender's Experience</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Feeling</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="I feel... (name the emotion)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Situation</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="When... (describe the specific situation)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Story/Interpretation</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="And what I make up about that is... (your interpretation)"
                  />
                </div>
              </div>
            </div>

            {/* Receiver's Response */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <h4 className="font-medium">Receiver's Response</h4>
              </div>

              {/* Mirroring */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mirroring
                  <span className="text-gray-500 text-sm ml-2">(What I hear you saying is...)</span>
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={2}
                  placeholder="Let me see if I got that... What I hear you saying is..."
                />
                <div className="mt-2">
                  <label className="block text-sm font-medium mb-1">Accuracy Check</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name={`accurate-${index}`} />
                      <span>Yes, that's it</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name={`accurate-${index}`} />
                      <span>Let me clarify</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Validation */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Validation
                  <span className="text-gray-500 text-sm ml-2">(I can understand why...)</span>
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={2}
                  placeholder="I can understand why you would feel... given..."
                />
              </div>

              {/* Empathy */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Empathy
                  <span className="text-gray-500 text-sm ml-2">(I imagine you might feel...)</span>
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={2}
                  placeholder="I imagine you might be feeling..."
                />
              </div>
            </div>

            {/* Sender's Confirmation */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium">Sender's Confirmation</h4>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">How does this land?</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={2}
                  placeholder="Yes, I feel understood because... / No, what I need you to understand is..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
                Mark Complete
              </button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Progress
              </button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const ExtendedDialogue = () => {
  const [exchanges, setExchanges] = useState([{ expanded: true, complete: false }]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const addExchange = () => {
    setExchanges([...exchanges, { expanded: true, complete: false }]);
    setExpandedIndex(exchanges.length);
  };

  const toggleExchange = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Extended Dialogue Session</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="datetime-local"
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            className="p-2 border rounded-md flex-grow"
            placeholder="Session Topic/Trigger"
          />
        </div>

        <Card className="bg-blue-50 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-medium">Dialogue Guidelines</h3>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Use "I" statements and focus on your feelings</li>
              <li>• Listen without interrupting</li>
              <li>• Mirror back what you heard before responding</li>
              <li>• Validate your partner's experience</li>
              <li>• Show empathy before problem-solving</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {exchanges.map((exchange, index) => (
        <DialogueExchange
          key={index}
          index={index}
          expanded={expandedIndex === index}
          onToggle={() => toggleExchange(index)}
          isComplete={exchange.complete}
        />
      ))}

      <div className="flex justify-center mt-6">
        <button
          onClick={addExchange}
          className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          <Plus className="w-4 h-4" />
          <span>Add Exchange</span>
        </button>
      </div>

      <div className="flex justify-end mt-6 space-x-2">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Save Draft
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Complete Session
        </button>
      </div>
    </div>
  );
};

export default ExtendedDialogue;
