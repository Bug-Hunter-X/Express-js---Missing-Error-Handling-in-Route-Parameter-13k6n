const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.json(userData);
});