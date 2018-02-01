// On page load:
            // Set variables:
                // buttonTitles = ["baseball", "hockey", "football"]
                var sportsArray = ["baseball", "hockey", "football"];
                // var athletesArray = ["Kobe Bryant", "Michael Jordan", "Larry Bird", "Steve Young", "Troy Aikman"];
            // Run displayButtons function
                displayButtons();
        // displayButtons - function
            function displayButtons() {
                // Clear previous buttons from screen
                // $("#buttons-content").empty();
                // for loop through buttonTitles
                for (var i = 0; i < sportsArray.length; i++) {
                // Create a jQuery button
                    console.log("hi");
                    var addButton = $("<button>");
                // Add attribute to jQuery button created (attribute name: "button-title", attribute value: the button title at that index)
                    addButton.attr("title","button-title"); 
                    addButton.attr("value", sportsArray[i]);
                // Put the current buttonTitle that we are looping through in the button
                    addButton.text(sportsArray[i]);
                    console.log(addButton)
                // Append button to page
                    $("buttons-content").append(addButton);
                    console.log("hello");
                // for (var i = 0; i < athletesArray.length; i++) {
                //     $("#buttons-content").append("<button type='button' onclick='searchGif(\"" + athletesArray[i] + "\")' class='btn btn-primary' value=' " + athletesArray[i] + "'> " + athletesArray[i] + " </button>");

                }
                
            }
            

            
        // When the user clicks one of the buttons - function
            // prevent default

            // get the attribute of the button clicked, and store in a variables
            // clear out old images from the page (.empty)
            // AJAX call to GIPHY
                // Method | GET
                // URL | https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=(THE BUTTON ATTRIBUTE WE GOT EARLIER)
                // .done
                    // loop through response.data
                        // create a jQuery div
                        // create a jQuery image
                        // Set the src attribute of the jQuery image to be image that we are looping through
                        // Add data-state attribute to jQuery image = "still"
						// Add data-animateurl attribute to jQuery image
						// Add data-stillurl attribute to jQuery image
                    	// create a jQuery paragrapgh
                        // Put the rating from GIPHY response into the paragrapgh created
                        // Append jQuery image to jQuery div
                        // Append jQuery paragrapgh to jQuery div
                        // Append jQuery div to page
        // On click of form submit button - function
            // Create variable of user input text field
            // Push variable just created to array (buttonTitles)
            // Run displayButtons function
        // On click of image div - function
            // Set variable equal to image clicked data-state attribute
            // if (imageState == "still")
                // Set src attribute of image clicked to be data-animateurl attribute of the image clicked
                // Set data-state attribute of image clicked to be "animated"
            // else if (imageState == "animated")
				// Set src attribute of image clicked to be data-stillurl attribute of the image clicked
				// Set data-state attribute of image clicked to be "still"


                