var searchButton = document.querySelector('#art-search')
var artImage = document.querySelector('#art-image')
var keywordSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
var objectSearch_QueryURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
var searchValue;
var objectNum;

function handleSearchSubmit(event) {
    event.preventDefault();

    searchValue = document.querySelector('#search-input').value;

    fetch(keywordSearch_QueryURL + searchValue)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            objectNum = data.objectIDs[5];
            console.log(data.objectIDs.length);
            displayObjectData();
            return;

        });


}

function displayObjectData() {
    console.log(objectNum);

    fetch(objectSearch_QueryURL + objectNum)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.primaryImage);
            $('#art-image').html("<img src=" + data.primaryImage + ">");
        });

}


searchButton.addEventListener('submit', handleSearchSubmit);

