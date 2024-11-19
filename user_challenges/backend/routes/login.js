// backend/routes/login.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Hardcoded credentials for demonstration
const hardcodedUsername = 'Test1';
const hardcodedPassword = 'password';

// Function to get userID from CTFd based on the username
const getUserIDByUsername = async (username) => {
  try {
    const response = await axios.get(
      `${process.env.CTFD_URL}/api/v1/users?field=name&value=${username}`,
      {
        headers: { Authorization: `Token ${process.env.CTFD_API_KEY}` },
      }
    );

    console.log("CTFd API Response:", response.data);

    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0].id;
    } else {
      console.log("User not found in CTFd.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user ID from CTFd:", error.message);
    return null;
  }
};

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === hardcodedUsername && password === hardcodedPassword) {
    const userID = await getUserIDByUsername(username);

    if (!userID) {
      return res.json({ success: false, message: "User ID not found in CTFd." });
    }

    try {
      const ctfdResponse = await axios.post(
        `${process.env.CTFD_URL}/api/v1/submissions`,
        {
          challenge_id: process.env.CHALLENGE_ID,
          user_id: userID,
          submission_type: "correct",
          provided: 'User logged in successfully',
        },
        {
          headers: { Authorization: `Token ${process.env.CTFD_API_KEY}` },
        }
      );

      if (ctfdResponse.status === 200 && ctfdResponse.data.success) {
        console.log("Points successfully awarded to user:", userID);
        res.json({ success: true, message: "Login successful! Points awarded." });
      } else {
        res.json({ success: true, message: "Login successful, but points may not have been awarded." });
      }
    } catch (error) {
      res.json({ success: true, message: "Login successful, but an error occurred with CTFd reporting." });
    }
  } else {
    res.json({ success: false, message: "Invalid credentials." });
  }
});

module.exports = router;
