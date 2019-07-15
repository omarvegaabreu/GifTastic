$(document).ready(function() {
  const searches = ["Lion", "Zebra", "Elephant", "Girafe", "Hippo", "Monkey"];

  createButtons();

  //a button click listener on the document so that new buttons are considered as well
  $(document).on("click", "button", function() {
    let apiKey = "r3bhcK4a4SJx6g1cuDCKj8yBu3jnBBJ8&limit=10";
    let search = $(this).attr("data-search");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=" +
      apiKey +
      "&limit=10";
    $("#display").empty();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      const results = response.data;
      console.log(results, searches);
      for (let i = 0; i < results.length; i++) {
        let newDiv = $("<div class = 'fadeInRight'>");
        var h2 = $("<h2 class='alert alert-light col-md-10'>").text(search);
        let p = $("<p>").html(
          "<span class='badge badge-info'>Rating: " +
            results[i].rating +
            "</span>"
        );
        let divImage = $("<img>");
        divImage.attr("src", results[i].images.fixed_height_still.url);

        divImage.attr("data-state", "still");
        divImage.attr("data-still", results[i].images.fixed_height_still.url);
        divImage.attr("data-animate", results[i].images.fixed_height.url);

        newDiv.append(divImage, p);
        $("#display").append(newDiv);
        // ==================================
      }
      $("#search-title").html(h2);
    });
  });

  function createButtons() {
    $("#buttons-view").empty();

    // Loops through the array of search items
    for (let i = 0; i < searches.length; i++) {
      let a = $("<button>");
      a.addClass("btn btn-light");
      a.attr("data-search", searches[i]);
      a.text(searches[i]);
      $("#buttons-view").append(a);
    }
  }

  // Prevents the default form option
  $("#add-search").on("click", function(event) {
    event.preventDefault();
    if (
      $("#button-input")
        .val()
        .trim() != ""
    ) {
      const newButton = $("#button-input")
        .val()
        .trim();
      searches.push(newButton);

      createButtons();
    }
  });

  $(document).on("click", "img", function() {
    const state = $(this).attr("data-state");

    if (state === "animate") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    } else if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
  });
});
