// app.jsx
import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FamilyDashboard from './components/dashboard/FamilyDashboard';
import RelationshipCard from './components/dashboard/RelationshipCard';
import ExtendedDialogueSession from './components/dashboard/widgets/ExtendedDialogueSession';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FamilyDashboard />} />
                <Route path="/relationship" element={<RelationshipCard />} />
                <Route path="/extendeddialogue" element={<ExtendedDialogueSession />} />

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
