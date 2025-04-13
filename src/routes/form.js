const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const pool = require('../config/database');
const auth = require('../middleware/auth');

// Submit form
router.post('/', auth, [
  body('name').trim().notEmpty().escape(),
  body('age').isInt({ min: 1, max: 120 }),
  body('phone_number').matches(/^\+?[\d\s-]{10,}$/),
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age, phone_number, email } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO form_submissions (user_id, name, age, phone_number, email) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, name, age, phone_number, email]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      age,
      phone_number,
      email
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get form submissions
router.get('/', auth, async (req, res) => {
  try {
    const [submissions] = await pool.execute(
      'SELECT * FROM form_submissions WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 