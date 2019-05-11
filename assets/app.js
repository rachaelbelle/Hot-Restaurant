$("#addReservation").on("click", function () {
    event.preventDefault();
    var currentReservations = $("#table-search").val().trim();
    currentReservations = currentReservations.replace(/\s+/g, "").toLowerCase();
    $.get("/api/view-reservations/" + currentReservations, function (data) {
        console.log(data);
        var newCharacter = {
            name: $("#name").val().trim(),
            partyOf: $("#partyOf").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
            email: $("#email").val().trim()
          };
          // Question: What does this code do??
          $.post("/api/characters", newCharacter)
            .then(function(data) {
              console.log("add.html", data);
              alert("---Adding Reservation---");
            });
    });
    $(content).appendTo(selector);
});

var reservations = [];