// [x] Indicate the server name for each request to make testing easier
// [x] custom server name and port as console arguments
// TODO error handeling for port already in use , server name already exists
// TODO change nginx conf loadbalancing from round robin to weighted round robin 
// TODO change nginx conf to use https intead of http
// TODO Add test code for new load balincing algorithm




const express = require("express");
const app = express();
var totalCalls = 0;

// Get the port and server name
const port = process.env.PORT || process.argv[2];
const serverName = process.env.SERVER_NAME || process.argv[3];

if (!port || !serverName) {
  console.error("Error: Both PORT and SERVER_NAME must be provided.");
  console.error(`Provided PORT: ${port || "None"}`);
  console.error(`Provided SERVER_NAME: ${serverName || "None"}`);
  process.exit(1); 
}
// Middleware to count calls
const callCounter = async (req, res, next) => {
  ++totalCalls;
  console.log(`Server: ${serverName}, Total Calls: ${totalCalls}`);
  next();
};

// Route to handle the requests
app.get("/", callCounter, (req, res) => {
  res.status(200).json({ server: serverName, total: totalCalls });
});

// Start the server
app.listen(port, () => {
  console.log(`Server ${serverName} is listening on port ${port}...`);
}).on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Error: Port ${port} is already in use.`);
  } else {
    console.error(`Error: ${err.message}`);
  }
  process.exit(1); // Termina o processo com código de erro
});

