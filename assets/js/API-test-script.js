var searchEl = document.querySelector('#searchEl')
var artImage = document.querySelector('#art-image')
var keywordSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&perPage=100&q='
var objectSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
var searchValue;

var index = 0;

var objectA;
var objectB;
var objectC;
var data;
var objIDs = [];

function handleSearchSubmit(event) {
    event.preventDefault();
    // console.log("click");
    searchValue = document.querySelector('#search-input').value;

    fetch(keywordSearch_QueryURL + searchValue)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.objectIDs.length);
            console.log(data);
            objIDs = data;


            for (var index = 0; index <= 10; index++) {
                var j = index
                objectA = data.objectIDs[j];

                j++;

                objectB = data.objectIDs[j];

                j++;

                objectC = data.objectIDs[j];
                // console.log("j after= " + j);
            }

            // console.log(data.objectIDs.length);
            displayObjectData();
            return;

        });



}


function displayObjectData() {



    fetch(objectSearch_QueryURL + objectA)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.primaryImage);
            $('#art-image').append("<img src=" + data.primaryImage + ">");
        });

    fetch(objectSearch_QueryURL + objectB)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.primaryImage);
            $('#art-image').append("<img src=" + data.primaryImage + ">");
        });

    fetch(objectSearch_QueryURL + objectC)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.primaryImage);
            $('#art-image').append("<img src=" + data.primaryImageSmall + ">");
        });

}


searchEl.addEventListener('submit', handleSearchSubmit);

// console.log("pagebottom");