const express = require('express');
const users = require('../project/MOCK_DATA.json');

const router = express.Router();

// Return full users' JSON data
router.get('/users', (req, res) => {
  return res.json(users);
});

// Return user by ID
router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); // Ensure ID is treated as an integer
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(user);
});

// Create a new user (placeholder)
router.post('/api/users', (req, res) => {
  return res.json({ status: 'pending' });
});

// Edit a user (placeholder)
router.patch('/api/users/:id', (req, res) => {
  return res.json({ status: 'pending' });
});

// Delete a user (placeholder)
router.delete('/api/users/:id', (req, res) => {
  return res.json({ status: 'deleted' });
});

module.exports = router;