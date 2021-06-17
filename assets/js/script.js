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
      quoteEl.textContent = '"' + quote + '"' + '   -' + author
      console.log(quoteEl)
      document.querySelector("#quote").appendChild(quoteEl)

  }
  getQuote()