$(function () {
    $(".orderBurger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

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