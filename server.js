const express = require('express');

const app = express();

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
app.use(express.static('./static'))
