const express = require('express');
const router = express.Router();

let Contact;
try {
  Contact = require('../models/Contact');
} catch(e) {
  console.warn('Contact model not loaded:', e.message);
}

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required.' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Email is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }
    if (message.trim().length > 2000) {
      return res.status(400).json({ success: false, error: 'Message too long (max 2000 chars).' });
    }

    let savedId = null;

    // Try saving to MongoDB if connected
    const mongoose = require('mongoose');
    if (Contact && mongoose.connection.readyState === 1) {
      const contact = new Contact({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        ip: req.ip
      });
      const saved = await contact.save();
      savedId = saved._id;
      console.log(`📬 New message from ${name} <${email}> saved (id: ${savedId})`);
    } else {
      // Log it even if DB not connected
      console.log(`📬 New message from ${name} <${email}>: ${message.substring(0, 80)}...`);
    }

    res.status(201).json({
      success: true,
      message: `Got it, ${name.trim()}! I'll get back to you at ${email.trim()} soon. — Pranjal`,
      ...(savedId && { id: savedId })
    });

  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
});

// GET - sanity check
router.get('/', (req, res) => {
  res.json({ message: 'Contact API is live. Use POST to send a message.' });
});

module.exports = router;
