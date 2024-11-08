import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle,
    Clock,
    ShoppingCart,
    Home,
    Plus,
    Trash2,
    UserPlus
} from 'lucide-react';

const TaskManagement = () => {
    const [tasks, setTasks] = useState({
        chores: [
            { id: 1, title: 'Clean Kitchen', assignee: 'John', dueDate: '2024-11-10', status: 'pending' },
            { id: 2, title: 'Vacuum Living Room', assignee: 'Sarah', dueDate: '2024-11-09', status: 'completed' },
        ],
        maintenance: [
            { id: 1, title: 'Change Air Filters', dueDate: '2024-11-15', frequency: 'Monthly', status: 'pending' },
            { id: 2, title: 'Check Smoke Detectors', dueDate: '2024-12-01', frequency: 'Quarterly', status: 'pending' },
        ],
        shopping: [
            { id: 1, title: 'Groceries', items: ['Milk', 'Bread', 'Eggs'], priority: 'High' },
            { id: 2, title: 'Household Supplies', items: ['Paper Towels', 'Soap'], priority: 'Medium' },
        ]
    });

    const [activeTab, setActiveTab] = useState('chores');

    const TabButton = ({ label, icon, id }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    const TaskCard = ({ title, children, icon }) => (
        <Card className="mb-4">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {icon}
                        <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Plus className="h-5 w-5 text-blue-500" />
                    </button>
                </div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );

    const renderChores = () => (
        <TaskCard title="Chore Assignments" icon={<CheckCircle className="h-6 w-6 text-green-500" />}>
            <div className="space-y-4">
                {tasks.chores.map(chore => (
                    <div key={chore.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <input type="checkbox" checked={chore.status === 'completed'} className="h-5 w-5" />
                            <div>
                                <p className="font-medium">{chore.title}</p>
                                <p className="text-sm text-gray-500">Assigned to: {chore.assignee}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Due: {chore.dueDate}</span>
                            <button className="p-1 hover:bg-gray-200 rounded">
                                <UserPlus className="h-4 w-4 text-blue-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-200 rounded">
                                <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </TaskCard>
    );

    const renderMaintenance = () => (
        <TaskCard title="Maintenance Schedule" icon={<Clock className="h-6 w-6 text-orange-500" />}>
            <div className="space-y-4">
                {tasks.maintenance.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-500">Frequency: {task.frequency}</p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Next due: {task.dueDate}
                        </div>
                    </div>
                ))}
            </div>
        </TaskCard>
    );

    const renderShopping = () => (
        <TaskCard title="Shopping Lists" icon={<ShoppingCart className="h-6 w-6 text-purple-500" />}>
            <div className="space-y-4">
                {tasks.shopping.map(list => (
                    <div key={list.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">{list.title}</p>
                            <span className={`text-sm px-2 py-1 rounded ${
                                list.priority === 'High' ? 'bg-red-100 text-red-800' :
                                list.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {list.priority}
                            </span>
                        </div>
                        <ul className="list-disc list-inside">
                            {list.items.map((item, index) => (
                                <li key={index} className="text-sm text-gray-600">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </TaskCard>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Tasks & Responsibilities</h1>
                    <p className="text-gray-600 mt-2">Manage your household tasks and assignments</p>
                </div>

                <div className="flex space-x-4 mb-6">
                    <TabButton 
                        label="Chores" 
                        icon={<CheckCircle className="h-5 w-5" />} 
                        id="chores" 
                    />
                    <TabButton 
                        label="Maintenance" 
                        icon={<Home className="h-5 w-5" />} 
                        id="maintenance" 
                    />
                    <TabButton 
                        label="Shopping" 
                        icon={<ShoppingCart className="h-5 w-5" />} 
                        id="shopping" 
                    />
                </div>

                <div>
                    {activeTab === 'chores' && renderChores()}
                    {activeTab === 'maintenance' && renderMaintenance()}
                    {activeTab === 'shopping' && renderShopping()}
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;