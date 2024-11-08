import React from 'react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';

export const TaskManager = () => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <TaskList />
                </div>
                <div>
                    <TaskForm />
                </div>
            </div>
        </DashboardLayout>
    );
};
