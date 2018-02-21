// On page load:

var sportsArray = ["soccer", "basketball", "tennis", "football", "baseball"];

// Run displayButtons function
displayButtons();

function displayButtons() {

    $("#buttons-content").empty();
    for (var i = 0; i < sportsArray.length; i++) {
        console.log("hi");
        var addButton = $("<button>");
        addButton.attr({ title: "button-title", value: sportsArray[i] });
        addButton.addClass("btn btn-dark click-btn")
        addButton.text(sportsArray[i]);
        $("#buttons-content").append(addButton);
    }

}

// When the user clicks one of the buttons - function
$("body").on("click", ".click-btn", function (event) {
    event.preventDefault();
    var sport = $(this).attr("value");
    $("#sport-images").empty();
    var key = "33f9J1NS1KNBBxVurx0rzBIJN8LngQN4";
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=" + key;
    // AJAX call to GIPHY
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (response) {

        for (var i = 0; i < 10; i++) {
            var div = $("<div>")
            div.addClass("col-md-3")
            var image = $("<img>")
            image.attr("src", response.data[i].images.fixed_height_still.url);
            image.attr("data-state", "still");
            image.attr("data-animate", response.data[i].images.fixed_height.url);
            image.attr("data-still", response.data[i].images.fixed_height_still.url);
            image.addClass("control-image");
            var rating = $("<p>");
            rating.addClass("rating");
            rating.text("Rating: " + response.data[i].rating);
            div.append(rating);
            div.append(image);
            $("#sport-images").append(div);

        }
    });
});
// On click of form submit button - function
$("#add-sport").on("click", function (event) {
    event.preventDefault();
    var inputButton = $("#sport-input").val().trim();
    sportsArray.push(inputButton);
    $("#sport-input").val('');
    displayButtons();

});

// On click of image div - function
$("#sport-images").on("click", ".control-image", function () {
    console.log("Clicked Image");
    var imageState = $(this).attr("data-state");
    if (imageState == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animated");
    } else if (imageState == "animated") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


