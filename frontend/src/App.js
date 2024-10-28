// src/App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import './styles.css'; // Import your CSS styles

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Laptop Dashboard</h1>
            </header>
            <main>
                <Dashboard />
            </main>
        </div>
    );
};

export default App;