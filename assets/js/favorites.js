var storedFavs = JSON.parse(localStorage.getItem("favoriteImages"));
var favContainer = $('#favContainer')
console.log(storedFavs);
console.log(storedFavs[0].href);

var loadStoredFavs = function (num) {
    for (var i = 0; i <= storedFavs.length - 1; i++) {
        favContainer.append('<div><div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[i].href + '></img></div></div>');
    }
};


loadStoredFavs();
console.log("contact");