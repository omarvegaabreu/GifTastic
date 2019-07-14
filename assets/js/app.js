//Create an array to hold buttons

$(document).ready(function() {
  let animals = ["lion", "Zebra", "Elephant", "Giraffe"];

  //function to make buttons add to the page
  function populateButtons(arrayToUse, classToadd, arreaToAddTo) {
    $(arreaToAddTo).empty();

    for (let i = 0; i < arrayToUse.length; i++) {
      let a = $("<button>");

      a.addClass(classToadd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);

      $(arreaToAddTo).append(a);
    }
  }
  //Create a function that will populate the images from the giphy API
  $(document).on("click", ".animals-button", function() {
      $("#images").empty();

      $(".animals-button").removeClass("active");
      $(this).addClass("active");

      let type = $(this).attr("data-type");
      let queryURL =
        "http:api.giphy.com/v1/gifs/search?q=" +
        type +
        "api_key=r3bhcK4a4SJx6g1cuDCKj8yBu3jnBBJ8&limit=10";

      //ajax call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        let results = response.data;

        for (let i = 0; i < results.length; i++) {
          //variables
          let animalsDiv = $(`<div class=\"animals-item\">`);
          let rating = results[i].rating;
          let p = $(`<p>`).text("Rating: " + rating);
          let animated = results[i].images.fixed_height.url;
          let still = results[i].images.fixed_height.url;
          let animalsImage = $("<img>");

          //functions
          animalsImage.attr("src", still);
          animalsImage.attr("data-still", still);
          animalsImage.attr("data-animate", animated);
          animalsImage.attr("data-state", "still");

          animalsImage.addClass("animals-image");

          animalsDiv.append(a);
          animalsDiv.append(animalsImage);

          $("#images").append(animalsDiv);
        }
      });
    })
  );
});
