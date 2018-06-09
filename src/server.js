const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });
  app.set('PORT', 3001);
}

const PORT = app.get('PORT') || 3001;

app.listen(PORT, () => {
  console.log('Express Server is Running on', PORT);
});