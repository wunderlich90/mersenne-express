HTTP Jargon


HTTP
"HyperText Transfer Protocol"

The context for all of this Describes requests, responses, and how to structure them




Request
What the client (browser) sends to the server

app.get('/quotes', function(req, res)
                        //  ^ req === request




Response
What the server sends back to the client This can be anything, including HTML, CSS, JS files (static content), or objects, arrays, etc... (dynamic content, data, JSON)

app.get('/quotes', function(req, res) {
                            //  ^ response

    // send back JSON data (array)
    res.send(['a', 'b', 'c']);
});





JSON
JavaScript Object Notation

The main format for data that's sent across the internets.

Looks like javascript objects, but with double quotes

[
    {
        "text": "Debugging is like being the detective in a crime movie where you are also the murderer",
        "author": "Filipe Fortes"
    }
]






URLs / Routes / Paths
The path is a noun, describing what type data we're working with.

We use these terms somewhat interchangeably.

Often we exclude the "domain" or the "host",like, /quotes

In express:

app.get('/quotes', function(req, res)
//      ^ path / route / url








Method
A verb that describes what the client wants to do, with the data.

In HTTP, there 4 main methods that we'll use:

GET: retrieve some data from the server
POST: send some new data to the server
PUT: Update some existing data on the server
DELETE: Delete some data from the server
In express:

app.get('/quotes', function(req, res) 
//  ^ this is our method

app.put('/quotes', ...

app.post('/quotes', ...

app.delete('/quotes', ...
Endpoint
The whole thing that we're listening for.

Path + Method = Endpoint

// Our GET /quotes endpoint
app.get('/quotes', function(req, res) {
API
The entire server.

A bunch of endpoints = An API

In general: "Application Programming Interface" A way for programs to communicate with one another.