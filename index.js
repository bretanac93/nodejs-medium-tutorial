const express = require('express');

const app = express();

app.get('/:name?', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `You know nothing ${name || 'Stranger'}`,
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
