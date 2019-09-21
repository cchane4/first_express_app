let express = require("express"); 
let app = express(); 
/* make our first route : at the root route send back a response in the form a string 
"Hi there" */
app.get("/", (req, res) => { 
    res.send("Hi There"); 
}); 
// localhost:3000/bye should have text that says goodbye 
app.get("/bye", (req, res) => { 
    res.send("Goodbye"); 
});

// localhost:3000/dog should have text to say dog 
/* when you hit the route /dog in the browser, the terminal 
should have a message that says "someone made a request to /dog"*/
app.get("/dog", (req, res) => { 
    console.log("someone made a request to /dog");
    res.send("dog"); 
}); 
// to use the route express needs to listen at the requested port 
app.listen(3000); 