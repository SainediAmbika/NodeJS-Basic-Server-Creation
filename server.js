// Server creation using HTTP Module
const http = require("http");
const port ="8080";

http.createServer(function(request,response){
    response.write("Hello! Server Started");
    response.end();
}).listen(port);



/* Server creation using Express */

/* 
const express = require("express");
 const app = express();
app.listen("8080",()=>{
     console.log("Server running");
 });
 */