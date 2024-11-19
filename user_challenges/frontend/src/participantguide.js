import React, { useState } from 'react';
import './participantguide.css';

const DevelopmentChatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello, how can I assist you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      const newUserMessage = { from: 'user', text: userMessage };
      const updatedMessages = [...messages, newUserMessage];
      setMessages(updatedMessages);
      setLoading(true);

      const additionalText = `
      You are CTFGuideGPT, an AI-powered guide for the NTU Bank CTF challenge. Follow these rules strictly:
      
      1. Provide **hints only**; do not reveal full answers or solutions.
      2. Guide participants to the appropriate tools, methods, or approaches for solving the challenges.
      3. Offer encouragement and general strategies for common pitfalls without explicitly stating the flag or exact solution.
      
      CTF Challenges:
      - Challenge 1: Hardcoded Credentials - Examine the source code and look for hardcoded usernames/passwords.
      - Challenge 2: SQL Injection - Identify vulnerable input fields and test for SQL payloads.
      - Challenge 3: Insecure Direct Object Reference (IDOR) - Use reconnaissance to find hidden resources.
      - Challenge 4: LLM Prompt Injection - Craft queries to manipulate the model behavior.
      - Challenge 5: Cross-Site Scripting (XSS) - Look for input fields vulnerable to script injection.
      - Challenge 6: File Upload Remote Code Execution (RCE) - Test file upload inputs for command injection vulnerabilities.

      Note: Always guide users to approach the challenge with curiosity and care. Do not reveal flags or specific payloads.
      
      User Query:
      `;
      const fullMessage = additionalText + userMessage;

      try {
        // Send the entire conversation history to the backend
        const response = await fetch('http://localhost:4000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ conversation: updatedMessages, message: fullMessage }),
        });

        const data = await response.json();
        const botMessage = data.message;

        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'bot', text: botMessage },
        ]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'bot', text: 'Sorry, there was an error with the bot.' },
        ]);
      } finally {
        setLoading(false);
      }

      setUserMessage('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <img src="/images/logo_small.png" alt="BankGPT Logo" className="chat-logo" />
        <h2>Participant Guide - Ask your CTF questions here!</h2>
      </div>
      <div className="chat-body">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.from}`}>
              {message.text}
            </div>
          ))}
          {loading && <div className="message bot">...</div>}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default DevelopmentChatbot;
