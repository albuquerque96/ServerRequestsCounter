const express = require("express");
const router = express.Router();

// Authentication middleware 
const authenticate = (req, res, next) => {   
    
    const { email, password } = req.body;
    // Example authentication logic  
     if (email === 'user@example.com' && password === 'password') {     
        next();// User authenticated, pass control to the next middleware/route handler   
    } 
    else {
        res.status(401).json({ message: 'Authentication failed' });   
    } 
};  

router.post('/login', authenticate, (req, res) => {   
    res.json({ message: 'Login successful' }); 
});  
router.get('/', (req, res) => {   
    res.send('Welcome to the home page!'); 
});  

module.exports = router;
