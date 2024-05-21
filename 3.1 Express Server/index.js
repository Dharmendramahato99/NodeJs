/*import express from "express";
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000.");
})*/

const http = require("http");

const myServer = http.createServer((req,res) => {
  console.log("New Req Rec.");
  res.end("Hello from Server");
});
myServer.listen(8000,() => console.log("Server Started!"));