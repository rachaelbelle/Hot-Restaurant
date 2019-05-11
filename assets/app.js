$("#search-btn").on("click", function () {
    var currentReservations = $("#table-search").val().trim();
    currentReservations = currentReservations.replace(/\s+/g, "").toLowerCase();
    $.get("/api/view-reservations/" + currentReservations, function (data) {
        console.log(data);
        if (data) {
            $("#stats").show();
            $("#name").text(data.name);
            $("#role").text(data.role);
            $("#age").text(data.age);
            $("#force-points").text(data.forcePoints);
        } else {
            $("#name").text("Sorry, the information you're looking for cannot be found.");
            $("#stats").hide();
        }
    });
    $(content).appendTo(selector);
});


var reservations = [];