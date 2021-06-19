var storedFavs = JSON.parse(localStorage.getItem("favoriteImages"));
var favContainer = $('#favContainer')



if (storedFavs === null) {
    storedFavs = "";
}


var loadStoredFavs = function (num) {
    for (var i = 0; i <= storedFavs.length - 1; i++) {
        favContainer.append('<div><div class="uk-card uk-card-default uk-card-body"><a href=' + storedFavs[i].href + '><img src=' + storedFavs[i].href + '></img></a></div></div>');
    }
};

loadStoredFavs();
// console.log(storedFavs);
// console.log(storedFavs[0].href);
console.log("contact");