const CryptoJS = require('crypto-js');
const Checkin = require('../models/Checkin'); // adjust path as needed

const secretKey = process.env.DATA_ENCRYPTION_SECRET;

// Create a new check-in
const createCheckin = async (req, res) => {
  try {
    const encryptedFeelings = CryptoJS.AES.encrypt(req.body.feelings, secretKey).toString();

    const newCheckin = new Checkin({
      user: req.user.id,
      mood: req.body.mood,
      stress: req.body.stress,
      feelings: encryptedFeelings,
    });

    await newCheckin.save();
    res.status(201).json({ message: 'Check-in saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all check-ins for user
const getCheckins = async (req, res) => {
  try {
    const checkins = await Checkin.find({ user: req.user.id }).sort({ createdAt: -1 });

    // Decrypt feelings before sending
    const decryptedCheckins = checkins.map((checkin) => {
      const decrypted = CryptoJS.AES.decrypt(checkin.feelings, secretKey).toString(CryptoJS.enc.Utf8);
      return {
        ...checkin._doc,
        feelings: decrypted,
      };
    });

    res.status(200).json(decryptedCheckins);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createCheckin, getCheckins };
