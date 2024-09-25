const express = require("express");

const app = express();
var totalCalls = 0;

//Midleware 
const callCounter = async (req, res, next) => {
  ++totalCalls;
  console.log(totalCalls);
  next();
};


//Route Handler
app.get("/", callCounter, (req, res) => {
  res.status(200).json({ total: totalCalls });
});

app.use(callCounter);

// Use process.argv to get command line arguments
const port = process.argv[2] || 5000; // Default to 5000 if no port is provided

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

