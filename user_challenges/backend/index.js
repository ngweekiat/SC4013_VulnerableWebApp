const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Hardcoded credentials for demonstration
const hardcodedUsername = 'Test1';
const hardcodedPassword = 'password';

app.use(cors());
app.use(bodyParser.json());

// Function to get userID from CTFd based on the username
const getUserIDByUsername = async (username) => {
  try {
    const response = await axios.get(
      `${process.env.CTFD_URL}/api/v1/users?field=name&value=${username}`,
      {
        headers: { Authorization: `Token ${process.env.CTFD_API_KEY}` },
      }
    );

    // Log the response data for debugging
    console.log("CTFd API Response:", response.data);

    // Check if the response contains any users
    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0].id; // Return the user ID of the first matching user
    } else {
      console.log("User not found in CTFd.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user ID from CTFd:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    return null;
  }
};

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if credentials match the hardcoded ones
  if (username === hardcodedUsername && password === hardcodedPassword) {
    const userID = await getUserIDByUsername(username);

    if (!userID) {
      return res.json({ success: false, message: "User ID not found in CTFd." });
    }

    try {
      // Notify CTFd of successful login to award points
      const ctfdResponse = await axios.post(
        `${process.env.CTFD_URL}/api/v1/submissions`,
        {
          challenge_id: process.env.CHALLENGE_ID,
          user_id: userID, // Award points to the retrieved userID
          submission_type: "correct",
          provided: 'User logged in successfully',
        },
        {
          headers: { Authorization: `Token ${process.env.CTFD_API_KEY}` },
        }
      );

      // Check if CTFd API response indicates success
      if (ctfdResponse.status === 200 && ctfdResponse.data.success) {
        console.log("Points successfully awarded to user:", userID);
        res.json({ success: true, message: "Login successful! Points awarded." });
      } else {
        console.error("CTFd did not confirm the submission as successful.");
        console.error("CTFd Response:", ctfdResponse.data);
        res.json({ success: true, message: "Login successful, but points may not have been awarded." });
      }

    } catch (error) {
      console.error("Error reporting to CTFd:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      res.json({ success: true, message: "Login successful, but an error occurred with CTFd reporting." });
    }
  } else {
    res.json({ success: false, message: "Invalid credentials." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
