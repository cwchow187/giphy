$(document).ready(function(){

	var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
	];

	//add animals array to page
	// function animalButtons(){
	// for( var i = 0; i<animals.length; i++){
	// 	var x = $("<button>");
	// 	$(document).append(x);
		
	// }
	// };

	//function to make buttons add to page
	function populateButtons(){
		// $('#animals').empty();

		for (var i = 0; i < animals.length; i++){

			var b = $("<button>");
			b.addClass("animal-button");
			// b.attr("data-type", arrayToUse[i]);
			b.text(animals[i]);
			$('#animals').append(b);
			//change input to button
			$("#add-animal").on("click");

		}

	}

	populateButtons();

	$(document).on("click", ".animal-button", function(){
		$("#animals").empty();
		$(".animal-button").removeClass("active");
		$(this).addClass("active");

		var type = $(this).attr("data");
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    	$.ajax({
    		url: queryURL,
    		method: "GET"
    	}).then(function(response){
    		console.log(response);
    		var results = response.data;


    	  for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div class=\"animal-item\">");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;

          var animalImage = $("<img>");
          animalImage.attr("src", still);
          animalImage.attr("data-still", still);
          animalImage.attr("data-animate", animated);
          animalImage.attr("data-state", "still");
          animalImage.addClass("animal-image");

          animalDiv.append(p);
          animalDiv.append(animalImage);

          $("#animals").append(animalDiv);
        }
    	});

	});


});







