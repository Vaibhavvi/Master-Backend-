/* ----------------------- Today Topic --------------------*/

/*
01 --  Node.js Basic and NPM under Introduction to Node.js
02 --  Installing Node.js and npm basic to advanced
03 --  Working File with modules and node_modules understanding 
04 --  File System Operations and HTTP modules 
05 --  Dependency and DevDependencies in Node.js
06 --  Ceating a Simple Web Server
07 -- Understanding Default and Custom Script path in Node.js


/* ----------------------- File System Operations -------------------*/
const fs = require("fs");

// Creating a new file using writeFile() method
fs.writeFile("example.text", "Hello Vaibhav!", (err) => {
    if (err) throw err;
    else console.log("File created Sucessfully");
})

// Renaming a file using rename() method 
fs.rename("example.text", "newExample.text", (err)=>{
    if (err) throw err;
    else console.log("File rename Sucessfully");
})

// Unlinking or deleting a file using unlink() method 
fs.unlink("newExample.text", (err) =>{
    if (err) throw err;
    else console.log("File deleted Sucessfully");
})


/* ----------------------- Creating a Simple Web Server -------------------*/
const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello vaibhav, Welcome to Node.js");
})

server.listen(3000, () => {
    console.log("Server is listining on port 3000");
})