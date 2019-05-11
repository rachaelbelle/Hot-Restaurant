$("#addReservation").on("click", function () {
    event.preventDefault();

    if (currentReservations.length < 5) {
        var newRes = {
            name: $("#name").val().trim(),
            partyOf: $("#partyOf").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
            email: $("#email").val().trim()
        };
        // Question: What does this code do??
        $.post("/api/current-reservations", newRes)
            .then(function (data) {
                console.log("add.html", data);
                alert("---Adding Reservation---");
            });
    }
});


// var currentReservations = $("#table-search").val().trim();
//     currentReservations = currentReservations.replace(/\s+/g, "").toLowerCase();
// $.get("/api/view-reservations/" + currentReservations, function (data) {


// };