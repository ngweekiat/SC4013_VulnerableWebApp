

// AnnouncementPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './xss.css'
const XssPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [isAdmin, setIsAdmin] = useState(true); // Simulated admin state

  // Simulated login (for demonstration purposes)
  useEffect(() => {
    // In a real application, authentication would be handled securely
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  // Fetch announcements from the server
  // useEffect(() => {
  //   axios.get('/api/announcements')
  //     .then(response => {
  //       setAnnouncements(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching announcements:', error);
  //     });
  // }, []);

  useEffect(() => {
        document.cookie = "flag=NTU{StoredXSS_CookieJar}"; // cookie is the hashed password to deactivate the AI
      }, []);

  // Handle new announcement submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin) {
      alert('Only admins can post announcements.');
      return;
    }
    setAnnouncements([...announcements, newAnnouncement]);
    setNewAnnouncement('');
    
  };

  return (<>

<div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <img src="/images/logo.png" alt="Bank Logo" className="dashboard-logo" />
        <nav className="dashboard-nav">
          <a href="#">Home</a>
          <a href="#">Accounts</a>
          <a href="#">Investments</a>
          <a href="#">Loans</a>
          <a href="#">Settings</a>
        </nav>
        <button className="logout-button">Logout</button>
      </header>
      {/* Welcome Message */}
      <section className="dashboard-welcome">
        <h1>Announcements page</h1>
        <h3>You are logged in as Admin</h3>
      </section>

      {/* Account Summary */}
      <section className="dashboard-summary">
      <div style={styles.container}>
      <h1>NTU Bank Announcements</h1>

      {isAdmin && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <textarea
            style={styles.textarea}
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            placeholder="Enter announcement here..."
          />
          <button type="submit" style={styles.button}>Post Announcement</button>
        </form>
      )}

      <div style={styles.announcements}>
        {announcements.map((announcement, index) => (
          <div
            key={index}
            style={styles.announcement}
          >
            {/* Vulnerability: Using dangerouslySetInnerHTML without sanitization */}
            <p><span dangerouslySetInnerHTML={{ __html: announcement }} /></p>
          </div>
        ))}
      </div>
    </div>
      </section>
    
    </div>
  </>
    
  );
};

// Simple inline styles for demonstration
const styles = {

  form: {
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  announcements: {
    borderTop: '1px solid #ccc',
    paddingTop: '20px',
  },
  announcement: {
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
};

export default XssPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from '../../components/Sidebar'; 

// import SERVER_URL from '../../config';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar open/close

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   useEffect(() => {
//     document.cookie = "secret_cookie=$1$OSfoE3oj$KrNtM5iLuBS9IlLtZ5cEf."; // cookie is the hashed password to deactivate the AI
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setOutput(input);

//     try {
//       const response = await axios.post(`${SERVER_URL}/xss`, { input });
//       if (response.data.status ) {
//       }
      
//       //navigate('/chatbot');
//     } catch (error) {
      
//     }
    
//   };

//   const handleDrawerToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="App">
//       <Sidebar 
//         open={sidebarOpen} 
//         handleDrawerToggle={handleDrawerToggle}  
//       />
//       <div className={`mainContent ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <header className="App-header">
//           <h1>I have a cookie.</h1>
//           <form onSubmit={handleSubmit} className="App-form">
//             <input
//               type="text"
//               value={input}
//               onChange={handleInputChange}
//               placeholder="Input"
//               className="App-input"
//             />
//             <button type="submit" className="App-button">Submit</button>
//           </form>
//           <p className="App-reflection">Reflecting your input: <span dangerouslySetInnerHTML={{ __html: output }} /></p>
//         </header>
//       </div>
//     </div>
//   );
// }

// export default App;