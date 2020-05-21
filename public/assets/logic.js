$(function () {
    $(".orderBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };

        // Adding new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    // Changes boolean value
    $(".devourBtn").click(function (event) {
        var id = $(this).data("burgerid");

        var devouredStatus = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(
            function () {
                location.reload();
            }
        );
    });


    // Deletes burger from db
    $("#clear").click(function (event) {
        $.ajax("/api/clearburgers", {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    })
});