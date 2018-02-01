// On page load:
            // Set variables:
            var sportsArray = ["mouse", "monkey", "panda"];
                
            // Run displayButtons function
            displayButtons();
        // displayButtons - function
            function displayButtons() {
                // Clear previous buttons from screen
                $("#buttons-content").empty();
                // for loop through buttonTitles
                for (var i = 0; i < sportsArray.length; i++) {
                // Create a jQuery button
                    console.log("hi");
                    var addButton = $("<button>");
                // Add attribute to jQuery button created (attribute name: "button-title", attribute value: the button title at that index)
                    addButton.attr({title:"button-title", value:sportsArray[i]}); 
                    addButton.addClass("btn btn-dark click-btn")
                // Put the current buttonTitle that we are looping through in the button
                    addButton.text(sportsArray[i]);
                // Append button to page
                    $("#buttons-content").append(addButton);
                }
                
            }
            

            
        // When the user clicks one of the buttons - function
        $("body").on("click", ".click-btn", function(event){
            // prevent default
            event.preventDefault();
            // get the attribute of the button clicked, and store in a variables
            var animal = $(this).attr("value");
            // clear out old images from the page (.empty)
            $("#animal-images").empty();
            var key = "33f9J1NS1KNBBxVurx0rzBIJN8LngQN4";
            var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + key;
            // AJAX call to GIPHY
            $.ajax({
                // URL | https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=(THE BUTTON ATTRIBUTE WE GOT EARLIER)
                url: queryUrl,
                // Method | GET
                method: "GET"
            }).done(function(response){
                    console.log(response);
                    console.log("here")
                    console.log(response.data.length);
                    // loop through response.data
                    for (var i = 0; i < response.data.length; i++) {
                        // create a jQuery div
                        var div = $("<div>")
                        div.addClass("col-md-4")
                        // create a jQuery image
                        var image = $("<img>")
                        // Set the src attribute of the jQuery image to be image that we are looping through
                        image.attr("src", response.data[i].images.fixed_height_still.url);
                        // Add data-state attribute to jQuery image = "still"
                        image.attr("data-state", "still");
						// Add data-animateurl attribute to jQuery image
                        image.attr("data-animate", response.data[i].images.fixed_height.url);
						// Add data-stillurl attribute to jQuery image
                        image.attr("data-still", response.data[i].images.fixed_height_still.url);
                        // Add class to the jQuery image
                        image.addClass("control-image");
                    	// create a jQuery paragrapgh
                        var rating = $("<p>");
                        rating.addClass("rating");
                        // Put the rating from GIPHY response into the paragrapgh created
                        rating.text("Rating: " + response.data[i].rating);
                        // Append jQuery paragrapgh to jQuery div
                        div.append(rating);
                         // Append jQuery image to jQuery div
                        div.append(image);
                        // Append jQuery div to page
                        $("#animal-images").append(div);

                    }
            });
        });
        // On click of form submit button - function
        $("#add-animal").on("click", function(event){
            event.preventDefault();
            // Create variable of user input text field
            var inputButton = $("#animal-input").val().trim();
            // Push variable just created to array (buttonTitles)
            sportsArray.push(inputButton);
            // Clear the input text after clicking
            $("#animal-input").val('');
            // Run displayButtons function
            displayButtons();

        });
        // On click of image div - function
        $("#animal-images").on("click", ".control-image", function(){
            // Set variable equal to image clicked data-state attribute
            console.log("Clicked Image");
            var imageState = $(this).attr("data-state");
            if (imageState == "still") {
                // Set src attribute of image clicked to be data-animateurl attribute of the image clicked
                $(this).attr("src", $(this).attr("data-animate"));
                // Set data-state attribute of image clicked to be "animated"
                $(this).attr("data-state", "animated");
            } else if (imageState == "animated") {
				// Set src attribute of image clicked to be data-stillurl attribute of the image clicked
                $(this).attr("src", $(this).attr("data-still"));
				// Set data-state attribute of image clicked to be "still"
                $(this).attr("data-state", "still");
            }
        });


                