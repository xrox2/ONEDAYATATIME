import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar />
            <div className="ml-64 flex flex-col">
                <TopBar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
