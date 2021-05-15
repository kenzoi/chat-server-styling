const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const public = path.join(__dirname, '../client');
const router = require('./router');
// Middlewares



app.use(express.static(public));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
