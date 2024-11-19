// FileUploadPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './fileUpload.css'

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a .txt file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setResponse(res.data.output || res.data.error);
    } catch (error) {
      setResponse("Error uploading file: " + error.message);
    }
  };

  return (
    <>
      <div className="dashboard-container">
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
          <h1>Date to day converter</h1>
          <h3>You are logged in as Admin</h3>
        </section>

        {/* Account Summary */}
        <section className="dashboard-summary">
          <div style={styles.container}>
            <h1>Upload Date string in a .txt file</h1>
            <form onSubmit={handleUpload} style={styles.form}>
              <input type="file" accept=".txt" onChange={handleFileChange} style={styles.fileInput} />
              <button type="submit" style={styles.button}>Upload File</button>
            </form>
            {response && <pre style={styles.response}>{response}</pre>}
          </div>

        </section>
      </div>
    </>

  );
};

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  fileInput: {
    padding: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  response: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
  },
};

export default FileUploadPage;