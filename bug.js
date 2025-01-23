const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database logic to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling
  }
  res.send(user); // Missing error handling if database operation fails
});

app.listen(3000, () => console.log('Server listening on port 3000'));