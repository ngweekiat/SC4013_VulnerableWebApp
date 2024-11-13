import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import DevelopmentChatbot from './developmentchatbot'; // Import DevelopmentChatbot component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/developmentchatbot" element={<DevelopmentChatbot />} /> {/* Add Chatbot route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
