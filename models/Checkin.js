const mongoose = require('mongoose');

const checkinSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mood: { type: Number, required: true },
  stress: { type: Number, required: true },
  feelings: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Checkin', checkinSchema);
