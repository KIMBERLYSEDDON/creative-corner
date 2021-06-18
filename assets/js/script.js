var getQuote = function (quote) {
    var apiUrl = 'https://api.fisenko.net/quotes'
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data.text, data.author);
            displayQuote(data.text, data.author);
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
      quoteEl.setAttribute("class", " uk-overlay uk-responsive-width uk-text-center uk-margin-xlarge-top")
      // var quoteTxt = document.createElement('p')
      // quoteTxt.setAttribute("class", "uk-text-center")
      quoteEl.textContent = '"' + quote + '"' + '   -' + author
      // console.log(quoteTxt)
      // quoteEl.appendChild(quoteTxt)
      document.querySelector("#quote").append(quoteEl)

  }
getQuote()


// var displayQuote = function (quote, author){
//   var quoteCloud = document.createElement('img')
//   quoteCloud.setAttribute("src", "./images/cloudscreenshot.jpg")
//   quoteCloud.setAttribute("alt", "thought cloud")
//   // <img src="./images/cloudscreenshot.jpg" alt="cloud">
//     var quoteEl = document.createElement('div')
//     quoteEl.setAttribute("class", "uk-position-cover, border: 2px solid black")
//     // var quoteTxt = document.createElement('p')
//     quoteEl.setAttribute("class", "color: black, z-index: 5")
//     quoteEl.textContent = '"' + quote + '"' + '   -' + author
//     // console.log(quoteTxt)
//     // quoteEl.appendChild(quoteTxt)
//     quoteCloud.appendChild(quoteEl)
//     document.querySelector("#quote").appendChild(quoteCloud)

// }