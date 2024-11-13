const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { conversation, message } = req.body;

  // Convert the conversation to the format expected by the OpenAI API
  const formattedMessages = conversation.map((msg) => ({
    role: msg.from === 'user' ? 'user' : 'assistant',
    content: msg.text,
  }));

  // Append the current user message with additional text
  formattedMessages.push({ role: 'user', content: message });

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: formattedMessages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.json({ message: botMessage });
  } catch (error) {
    console.error('Error fetching response from ChatGPT API:', error);
    res.status(500).json({ error: 'Error communicating with ChatGPT' });
  }
});

module.exports = router;
