const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.get("/hello", (req, res) => {
    res.send("Hello, hello!");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

