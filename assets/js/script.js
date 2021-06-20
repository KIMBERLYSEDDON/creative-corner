var search = document.querySelector("#search");
var next = search.querySelector("#next");
var artImage = $("#art-image-container");
var featureEl = document.querySelector(".featureImage");

var keywordSearch_QueryURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=";
var objectSearch_QueryURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
// var test_QueryURL = 'https://api.quotable.io/random'
// var APIkey =""

var index = 0;

var favImageArray = [];

var objectA;
var objectB;
var objectC;
var data;

// ________________________



var favButtonClickHandler = function (event) {
  event.stopPropagation();
  var favorite = event.target.getAttribute("data-obj");
  if (favorite) {
    console.log(favorite);
  }
};

// Takes search input, takes the keyword and submits it to API as parameter.
// API returns all IDs connected to that parameter (can't figure out how to limit that)
// Those values are turned into an Array, a 'for' loop selects 3 of the IDs, assigns them to a
// variable and passes it off to displayObjectData.

function handleSearchSubmit(event) {
  event.preventDefault();
  // console.log("click");

  var searchValue = $("#search-input").val();
  console.log(searchValue);
  fetch(keywordSearch_QueryURL + searchValue)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data.objectIDs.length);
      if (data.objectIDs === null) {
        UIkit.modal.dialog(
          '<p style="text-align:center; padding: 20px; margin: 10em;">No results found. Try another word!</p>'
        );
        return;
      }
      console.log(data.objectIDs);
      dataValue = Object.values(data.objectIDs);

      // This for loops gets the 3 initial images onto the page.
      // index declaration after index=0 could be randomized to switch up initial results
      objectA = dataValue[0];
      objectB = dataValue[1];
      objectC = dataValue[2];
      for (var index = 0; index <= 1; index++) {
        var j = index;
        objectA = dataValue[j];
        j++;
        objectB = dataValue[j];
        j++;
        objectC = dataValue[j];
      }
      // console.log(data.objectIDs.length);
      displayObjectData();
      return dataValue;
    });
}
// clears the stage, takes the 3 defined values from handleSearchSubmit or next (function called on click, explained below), fetches those object IDs and appends the images to the DOM
function displayObjectData() {
  $("#image-result1").html("");
  $("#image-result2").html("");
  $("#image-result3").html("");

  fetch(objectSearch_QueryURL + objectA)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(objectA);


      console.log(data.primaryImageSmall);

      $("#image-result1").append(
        '<a class="uk-inline uk-width-auto" href=' +
          data.primaryImageSmall +
          ' data-caption="' +
          data.title +
          '"><img data-object=' +
          objectA +
          " src=" +
          data.primaryImageSmall +
          "> </a>"
      );
      $("#image-result1").append(
        '<button class="favBtn">Add to Favorites</button>'
      );
    });

  fetch(objectSearch_QueryURL + objectB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(objectB);
      $("#image-result2").append(
        '<a class="uk-inline uk-width-auto" href=' +
          data.primaryImageSmall +
          ' data-caption="' +
          data.title +
          '"><img data-object=' +
          objectB +
          " src=" +
          data.primaryImageSmall +
          "> </a>"
      );
      $("#image-result2").append(
        '<button class="favBtn">Add to Favorites</button>'
      );
    });

  fetch(objectSearch_QueryURL + objectC)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(objectC);
      $("#image-result3").append(
        '<a class="uk-inline uk-width-auto" href=' +
          data.primaryImageSmall +
          ' data-caption="' +
          data.title +
          '"><img data-object=' +
          objectC +
          " src=" +
          data.primaryImageSmall +
          "> </a>"
      );
      $("#image-result3").append(
        '<button class="favBtn">Add to Favorites</button>'
      );
    });
}

// listener function that increases the array index on all 3 images on click and re-runs displayObjectData()
next.addEventListener("click", function (event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();
  console.log("click");
  console.log(index);

  objectA = dataValue[index++];
  objectB = dataValue[index++];
  objectC = dataValue[index++];

  console.log(objectA, objectB, objectC);
  displayObjectData();
});

if (favImageArray.length === 0) {
  console.log("doing something");
  favImageArray = JSON.parse(localStorage.getItem("favoriteImages"));
  if (favImageArray.length === 0){console.log("no favs");}
};

artImage.on("click", ".favBtn", function (event) {
  event.stopPropagation();
  console.log(event.target);
  console.log(this);

  var favBtn = $(event.target);
  console.log(favBtn.siblings()[0]);

  console.log(favBtn.siblings()[0].href);
  console.log(favBtn.siblings()[0].children[0].attributes[0].value);
  var myObj = {
    href: favBtn.siblings()[0].href,
    ObjId: favBtn.siblings()[0].children[0].attributes[0].value,
  };
  // console.log(myObj);
  // console.log(favImageArray);
  favImageArray.push(myObj);
  console.log(favImageArray);
  localStorage.setItem("favoriteImages", JSON.stringify(favImageArray));
});

search.addEventListener("submit", handleSearchSubmit);

// This is just here to let me know the whole page of code ran at page load
// console.log("1_jsStart");

// On page load, a quote should be automatically generated and put on the page.
// there's a search bar to enter keywords.
// once search is initiated, 3 images will show up with at least 1 button to see more images, if time another to go back.

var getQuote = function (quote) {
    var apiUrl = 'https://api.quotable.io/random'
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayQuote(data.content, data.author);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
};



var displayQuote = function (quote, author){
      var quoteEl = document.createElement('p')
      quoteEl.setAttribute("class", "quoteEl uk-text-center uk-margin-auto-vertical uk-flex-middle uk-flex-center uk-child-width-expand")
      quoteEl.textContent = '"' + quote + '"' + '   -' + author
      document.querySelector("#quote").append(quoteEl)

  }
getQuote()