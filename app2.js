const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./Routes/authRoutes");
// Middleware to parse JSON request bodies
app.use(bodyParser.json()); 
//Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
  });

app.use('/auth',router)
const PORT = process.env.PORT || 3000; app.listen(PORT, () => {   
    console.log(`Server running on port ${PORT}`); 
});``
