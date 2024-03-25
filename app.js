const express = require('express');
const cors = require("cors");
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/initiateRequest', (req, res) => {
  const { data } = req.body;
   res.set('Access-Control-Allow-Origin', '*');
   res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  fs.appendFile('output.txt', data + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('File written successfully : ' + data);
      res.status(200).send('File written successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});