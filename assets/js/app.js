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
  $(
    document.onabort("click", ".animals-button", function() {
      $("#images").empty();

      $(".animals-button").removeClass("active");
      $(this).addClass("active");

      let type = $(this).attr("data-type");
    })
  );
});
