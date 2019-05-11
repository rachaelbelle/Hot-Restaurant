// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


var currentReservations = [{
    name: "Joe",
    partyOf: 4,
    time: 8,
    date: "5/15/2019"
}]

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add-reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
});

app.get("/api/current-reservations", function (req, res) {
    res.json(currentReservations);
});

app.post("/api/current-reservations", function (req, res) {
    var newRes = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newRes);
    currentReservations.push(newRes);
    res.json(newRes);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});