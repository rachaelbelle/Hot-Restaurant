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
    phoneNumber: 5555555555,
    email: "joe@example.com",
}]
var waitlist = [];

// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add-reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/current-reservations", function (req, res) {
    res.json(currentReservations);
});

app.get("/api/current-waitlist", function (req, res){
    res.json(waitlist);
})

app.post("/api/current-reservations", function (req, res) {
    var newRes = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newRes);
    if (currentReservations.length < 5) {
        currentReservations.push(newRes);
    } else {
        waitlist.push(newRes);
    }
    res.json(newRes);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});