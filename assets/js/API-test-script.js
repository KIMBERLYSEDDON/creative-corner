var search = document.querySelector("#search")
var next = search.querySelector("#next")
var artImage = document.querySelector('#art-image-container')
// var APIkey ="1b3ef6189bf76e75dcc7ee085772fb27"

var keywordSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
var objectSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
// var test_QueryURL = 'https://api.quotable.io/random'
// var APIkey =""

var index = 0;
var IDs = [];

var objectA;
var objectB;
var objectC;
var objAURL;

var data;
// var dataValue = [];

// Takes search input, takes the keyword and submits it to API as parameter. 
// API returns all IDs connected to that parameter (can't figure out how to limit that)
// Those values are turned into an Array, a 'for' loop selects 3 of the IDs, assigns them to a 
// variable and passes it off to displayObjectData.

function handleSearchSubmit(event) {
    event.preventDefault();
    // console.log("click");
    searchValue = document.querySelector('#search-input').value;

    fetch(keywordSearch_QueryURL + searchValue)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // console.log(data.objectIDs.length);
            console.log(data.objectIDs);
            dataValue = Object.values(data.objectIDs)

            // This for loops gets the 3 initial images onto the page.
            // index declaration after index=0 could be randomized to switch up initial results 
            for (var index = 0; index <= 15; index++) {
                var j = index
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
    $('#image-result1').html("");
    $('#image-result2').html("");
    $('#image-result3').html("");
    
    fetch(objectSearch_QueryURL + objectA)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(objectA);
            console.log(data.primaryImageSmall);

            $('#image-result1').append('<a class="img-card uk-inline uk-width-auto" href=' + data.primaryImageSmall + ' data-caption="' + data.title +'"><img src=' + data.primaryImageSmall + '> </a>');
            $('#image-result1').append('<button id="objAFavBtn" class="bookmark uk-button-text uk-overlay-primary" uk-overlay-icon="icon: bookmark; ratio: 2"></button>');
            objAURL = data.primaryImageSmall
            $( "#objAFavBtn").click(function(event){
                event.stopPropagation();
                console.log("objA click");
                // saveFavorites();
            });


        });

    fetch(objectSearch_QueryURL + objectB)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(objectB);
            $('#image-result2').append('<a class="img-card uk-inline uk-width-auto" href=' + data.primaryImageSmall + '><img src=' + data.primaryImageSmall + '> </a>');
            $('#image-result2').append('<button id="objBFavBtn" class="bookmark uk-button-text uk-overlay-primary" uk-overlay-icon="icon: bookmark; ratio: 2"></button>');
            $( "#objBFavBtn").click(function(event){
                event.stopPropagation();
                console.log("objB click");
            });
        });

    fetch(objectSearch_QueryURL + objectC)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(objectC);
            $('#image-result3').append('<a class="uk-inline uk-width-auto" href=' + data.primaryImageSmall + '><img class="img-card" src=' + data.primaryImageSmall + '> </a>');
            $('#image-result3').append('<button id="objCFavBtn" class="bookmark uk-button-text uk-overlay-primary" uk-overlay-icon="icon: bookmark; ratio: 2"></button>');
            $( "#objCFavBtn").click(function(event){
                event.stopPropagation();
                console.log("objC click");
            });
        });
}



// function saveFavorites() {
// console.log(objectA);
    
//     IDs = {
//       objIds: objectA,
//       url: objAURL,
//     };


//     localStorage.setItem("IDs", JSON.stringify(IDs));
//   }

// listener function that increases the array index on all 3 images on click and re-runs displayObjectData()
next.addEventListener("click", function (event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();
    console.log("click");
    console.log(index);


    objectA = dataValue[index++]
    objectB = dataValue[index++]
    objectC = dataValue[index++]

    console.log(objectA, objectB, objectC);
    displayObjectData();


});


search.addEventListener('submit', handleSearchSubmit);


// This is just here to let me know the whole page of code ran at page load
console.log("1_jsStart");

// On page load, a quote should be automatically generated and put on the page

// there's a search bar to enter keywords

// once search is initiated, 3 images will show up with at least 1 button to see more images, if time another to go back