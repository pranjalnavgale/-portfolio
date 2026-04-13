const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 100 },
  email:   { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  ip:      { type: String, default: '' },
  read:    { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Index for quick lookup by email
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);
