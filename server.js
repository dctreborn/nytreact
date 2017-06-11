// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Articles Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//MongoDB routes
// -------------------------------------------------
//get main route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//get all saved articles
app.get("/api", function(req, res){
  Article.find({}).sort(["date", -1]).exec(function(err, doc){
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

//send saved articles to db
app.post("/api", function(req, res){
  Article.create({
    title: req.body.title,
    url: req.body.url
  }, function(err){
    if (err) {
      console.log(err);
    } else {
      res.send("Saved article");
    }
  });
});

//delete saved article
app.get("/api/:id", function(req, res){
  Article.remove({_id: req.params.id}, function(err, doc){
    if (err) {
      console.log(err)
    } else {
      res.send(doc);
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
