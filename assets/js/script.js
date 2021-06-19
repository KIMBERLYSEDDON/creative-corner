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
      quoteEl.setAttribute("class", "quoteEl uk-text-center uk-margin-auto-vertical uk-flex-middle uk-flex-center uk-child-width-expand")
      quoteEl.textContent = '"' + quote + '"' + '   -' + author
      document.querySelector("#quote").append(quoteEl)

  }
getQuote()