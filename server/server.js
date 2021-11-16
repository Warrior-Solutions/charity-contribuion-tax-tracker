const express = require('express');
const path = require('path'); // Attach file paths dynamically

// Import the two controllers
//! Fill in auth controller route
const authController = require(path.join(__dirname, ''));
const dashboardController = require(path.join(__dirname, './controllers/dashboardControllers.js'));


const app = express();
const port = 3000;

// serve the static file in the root directory
app.use(express.static(path.join(__dirname, './../index.html')));

app.get('/', dashboardController.testingServer, (req, res) => {
  return res.status(200).send("Server is up");
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

