const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userData = await fetchUserData(userId); //Simulate database interaction
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

async function fetchUserData(userId) {
  //Simulate fetching from a database. Replace with actual DB call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        '1': { id: '1', name: 'John Doe' },
        '2': { id: '2', name: 'Jane Smith' },
      };

      resolve(users[userId]);
    }, 500); 
  })
}