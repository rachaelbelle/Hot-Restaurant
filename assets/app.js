$("#addReservation").on("click", function () {
    event.preventDefault();

    var newRes = {
        name: $("#name").val().trim(),
        partyOf: $("#partyOf").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim(),
        email: $("#email").val().trim()
    };
    $.post("/api/current-reservations", newRes)
        .then(function (data) {
            console.log("add.html", data);
            alert("---Adding Reservation---");
        });
});