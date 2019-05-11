$("#search-btn").on("click", function () {
    var currentReservations = $("#table-search").val().trim();
    currentReservations = currentReservations.replace(/\s+/g, "").toLowerCase();
    $.get("/api/view-reservations/" + currentReservations, function (data) {
        console.log(data);
        if (data) {
            $("#stats").show();
            $("#name").text(data.name);
            $("#partyOf").text(data.partyOf);
            $("#time").text(data.time);
            $("#date").text(data.date);
        } else {
            $("#name").text("Sorry, the information you're looking for cannot be found.");
            $("#stats").hide();
        }
    });
    $(content).appendTo(selector);
});


var reservations = [];