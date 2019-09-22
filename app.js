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

/* when you hit any subroute whose main route is cat you will get the 
welcome to the cat page message */
app.get("/cat/:name", (req, res) => { 
    res.send("WELCOME TO A CAT PAGE"); 
});

/* when you hit a route that matches this structure 
 the terminal should log an request object of key value pairs
 that are equal to the path variables */  
app.get("/:subredditName/comments/:id/:title", (req, res) => { 
    console.log(req.params); 
    res.send("WELCOME TO A COMMENTS PAGE"); 
}); 
// if you go to any route not predefined in app.js you get a 404 ERROR MESSAGE.
app.get ("*", (req, res) => { 
    res.send(" 404 ERROR!!!"); 
}); 


// to use the route express needs to listen at the requested port 
app.listen(3000, () => { 
console.log("the server has started"); 
}); 