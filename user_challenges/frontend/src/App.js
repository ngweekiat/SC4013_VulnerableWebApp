import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import DevelopmentChatbot from './developmentchatbot'; // Import DevelopmentChatbot component
import FileUploadPage from './FileUpload';
import XssPage from './Xss';
import Participantguide from "./participantguide";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/developmentchatbot" element={<DevelopmentChatbot />} /> {/* Add Chatbot route */}
          <Route path="/xss" element={<XssPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} />
          <Route path="/participantguide" element={<Participantguide />} /> {/* Add Chatbot route */}
        </Routes >
      </div >
    </Router >
  );
}

export default App;
