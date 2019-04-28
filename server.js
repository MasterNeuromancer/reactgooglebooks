const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const axios = require("axios");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooksDB", { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", (req, res) => {
  db.Book
    .find({})
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).json(err));
});

app.get("/api/books/search", (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.body.search}`)
    .then(response => res.json(response.data))
      // response.data.items[0].volumeInfo.title +
      // response.data.items[0].volumeInfo.authors[0] +
      // response.data.items[0].volumeInfo.description +
      // response.data.items[0].volumeInfo.imageLinks.smallThumbnail +
      // response.data.items[0].volumeInfo.infoLink))
    .catch(err => res.status(422).json(err));
});

app.post("/api/new", (req, res) => {
  db.Book
    .create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});