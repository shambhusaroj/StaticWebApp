const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/initiateRequest', (req, res) => {
  const { data } = req.body;
  
  fs.appendFile('output.txt', data + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('File written successfully');
      res.status(200).send('File written successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});