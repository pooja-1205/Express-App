const express = require("express");
const app = express();
const path = require("path");

// Enable parsing of JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Route that was sending plain text (optional use, kept as comment)
/*
app.get("/", function (req, res) {
  res.send("chal raha hai"); // 'chal raha hai' means 'It's working'
});
*/

// Render 'index.ejs' from the 'views' folder on root route
app.get("/", function (req, res) {
  res.render("index");
});

// Dynamic routing: capture 'username' from URL and respond with a greeting
app.get("/profile/:username", function (req, res) {
  res.send(`Welcome, ${req.params.username}`);
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
