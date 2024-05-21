//const http = require("http");
//const fs = require("fs");
//const url = require("url");
const express = require("express");



/*const myServer = http.createServer((req,res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
       if (req.method === "GET") res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi,${username}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup Form");
        else if(req.method === "POST") {
          //DB Query
          res.end("Sucess");
        }
      default:
        res.end("404 Not Found");
    }
  });
});
myServer.listen(8000,() => console.log("Server Started!"));*/
const app = express();

app.get("/", (req,res) => {
  return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page");
});

app.get("/profile", (req, res) => {
  return res.send("Profile Page");
});

app.listen(8000, () => console.log("Server Started!"));

//const myServer = http.createServer(app);

//myServer.listen(8000,() => console.log("Server Started!"));