const express = require("express");
// the server
const app = express (); 

//when you see app.use we're adding something to the app - use is a method thus ()
//called static because it is serving static files hence (/)  
//whenever someone goes to this port - it will tke them to index.html 
app.use("/static", express.static("public"));



//port = 5000 on mac port5001
app.listen(5000, () => {
    console.log("listening on port 5000");
})
//node src/server.js
//listening on port 5000 