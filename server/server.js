console.log('Look Ma, my first express app!');

// Load the express library from node_modules/express
const express = require('express');

// create our "app" (server)
const app = express();


// Tell express where to find all of our "public" files (aka "client side" files)
// We also call these "static assets"
app.use(express.static('./server/public'))

// Listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like our onReady function
    console.log('App is up and running on localhost:5000');
    
});
