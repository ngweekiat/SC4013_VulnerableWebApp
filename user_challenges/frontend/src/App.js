import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import DevelopmentChatbot from './developmentchatbot'; // Import DevelopmentChatbot component
<<<<<<< HEAD:frontend/src/App.js
import FileUploadPage from './FileUpload';
import XssPage from './Xss';
=======
import Participantguide from "./participantguide";
>>>>>>> 450ed1ece2cd66c9bcda9f991551b4ec2cd09f70:user_challenges/frontend/src/App.js

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/developmentchatbot" element={<DevelopmentChatbot />} /> {/* Add Chatbot route */}
<<<<<<< HEAD:frontend/src/App.js
          <Route path="/xss" element={<XssPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} />
=======
          <Route path="/participantguide" element={<Participantguide />} /> {/* Add Chatbot route */}
>>>>>>> 450ed1ece2cd66c9bcda9f991551b4ec2cd09f70:user_challenges/frontend/src/App.js
        </Routes>
      </div>
    </Router>
  );
}

export default App;
