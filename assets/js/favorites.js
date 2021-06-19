var storedFavs = JSON.parse(localStorage.getItem("favoriteImages"));
var favContainer = $('#favContainer')
console.log(storedFavs);
console.log(storedFavs[0].href);


// This will become a 'for' loop that iterates through storedFavs.length 
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[0].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[1].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[2].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[3].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[4].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[5].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[6].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[8].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[9].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[10].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[11].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[12].href + '></img></div>');
favContainer.append('<div class="uk-card uk-card-default uk-card-body"><img src=' + storedFavs[13].href + '></img></div>');

console.log("contact");