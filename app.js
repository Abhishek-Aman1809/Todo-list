const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/todo', (req, res) => {
  const task = req.body.task;
  const desc = req.body.description;
  res.redirect('/');
});
app.listen(3000)
