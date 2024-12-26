const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Asynchronous delay
    res.send('Hello World!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});