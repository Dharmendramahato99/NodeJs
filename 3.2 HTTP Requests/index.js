import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Dharmendra Mahato!");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Mobile No: +916206430139</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p>My Name is Dharmendra!</p>");
});

app.listen(port, () => {
    console.log("Server running on port 3000.");
})