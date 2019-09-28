var express = require('express')
var app = express()

// ===============
//    Routes
// ===============
app.get('/', function(req, res) {
   res.send('Hi There, this is pretty damn cool')
})

app.get('/bye', function(req, res) {
   res.send('Goodbye')
})

app.get('/dog', function(req, res) {
   // The console log goes to the server terminal window
   console.log('Someone made a get request at /dog')
   // This goes to the localhost:3000 in the browser
   res.send('Meow')
})

app.listen(3000, process.env.IP, function() {
   console.log('Server has started')
})