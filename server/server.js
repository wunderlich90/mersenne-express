console.log('Look Ma, my first express app!');

// Load the express library from node_modules/express
const express = require('express');

// Load the body parser module
const bodyParser = require('body-parser');

// create our "app" (server)
const app = express();

//My data!!
const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movie where you are also the murderer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

// Tell express where to find all of our "public" files (aka "client side" files)
// We also call these "static assets"
app.use(express.static('./server/public'));

// Setup body parser
// Tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for requests coming to a specific URL:
// http://localhost:5000/quotes
app.get('/quotes', function (req, res) {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);
    
    //Send back data to the client
    //array of quote objects
    res.send(quotes);
});

// GET /first-quote
app.get('/first-quote', function(req, res) {
    res.send(quotes[0]);
});

// POST /quotes
app.post('/quotes', function(req, res) {
    console.log('Woohoo, we got a new quote!');

    // Body parser gives us req.body
    console.log('req.body', req.body);
    let newQuote = req.body;
    quotes.push(newQuote);

    if (!newQuote.author || !newQuote.text) {
        // Set status code to 400 (client messed up)
        // and send bacvk a useful message in response body
        res.status(400).send( {
            message: 'Missing a required fiewld! Try agsain, try harder.'
        });
        // End the function!
        // Otherwise we'll end up with multiple responses, and get an error
        return;
    }

    res.sendStatus(200);
    
});
// Listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like our onReady function
    console.log('App is up and running on localhost:5000');
    
});
