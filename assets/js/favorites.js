var storedFavs = JSON.parse(localStorage.getItem("favoriteImages"));
var favContainer = $('#favContainer')
var clrFavs = $('#clrFavs')


if (storedFavs === null) {
    storedFavs = "";
}


var loadStoredFavs = function (num) {
    for (var i = 0; i <= storedFavs.length - 1; i++) {
        favContainer.append('<div><div class="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover"><a href=' + storedFavs[i].href + '><img src=' + storedFavs[i].href + '></img></a></div></div>');
    }
};

clrFavs.on("click",function (event) {
    
  var favImageArray = []

    localStorage.setItem("favoriteImages", JSON.stringify(favImageArray));
    location.reload();
  });

loadStoredFavs();
// console.log(storedFavs);
// console.log(storedFavs[0].href);
console.log("contact");
