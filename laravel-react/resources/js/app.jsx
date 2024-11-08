// app.jsx
import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FamilyDashboard from './components/dashboard/FamilyDashboard';
import RelationshipCard from './components/dashboard/Health/Relationship/RelationshipCard';
import ExtendedDialogueSession from './components/dashboard/Health/Relationship/ExtendedDialogueSession';
import TaskManagement from './components/dashboard/Calendar/Tasks/TaskManagement';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FamilyDashboard />} />
                <Route path="/relationship" element={<RelationshipCard />} />
                <Route path="/extendeddialogue" element={<ExtendedDialogueSession />} />
                <Route path="/tasks" element={<TaskManagement />} />

            </Routes>
        </Router>
    );
};

// Initialize the app
createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;
