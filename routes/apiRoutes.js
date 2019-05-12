const reservationsData = require("../data/reservations");
const waitlistData = require("../data/waitlist")

module.exports = function (app) {
    app.get("/api/add-reservation", function (req, res) {
        res.json(reservationsData);
    });

    app.get("/api/view-table", function (req, res) {
        res.json(waitlistData);
    });

    app.post("/api/add-reservation", function (req, res) {
        if (reservationsData.length < 5) {
            reservationsData.push(req.body);
            res.json(true);
        }
        else {
            waitlistData.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
    
        res.json({ ok: true });
      });
}