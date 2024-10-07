const axios = require("axios");

const NUM_REQUESTS = 10; 
const nginxURL = "http://localhost"; 

async function testLoadBalancer() {
    for (let i = 1; i <= NUM_REQUESTS; i++) {
        try {
            const response = await axios.get(nginxURL);
            console.log(`Request ${i}: Response from ${response.data.server} totalcalls ${response.data.total}`);
        } catch (error) {
            console.error(`Request ${i} failed: ${error.message}`);
        }
    }
}

testLoadBalancer();
