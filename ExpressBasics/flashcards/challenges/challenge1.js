//Instrunctions: 
// Change the parameter names for the request and response objects to req and res.
// Respond with "I Love Treehouse!" as an <h2> tag. (add the h2 tags)
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h2>I Love Treehouse!</h2>");
});

app.listen(3000);
