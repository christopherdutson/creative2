document.getElementById("stockSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("stockInput").value;
    if (value === "")
      return;
    console.log(value);

    const url = "https://cloud.iexapis.com/stable/stock/" + value + "/batch?types=quote&token=pk_39e010827203485580028f38b56f8111";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
        results += '<div class="current"><h2>Company Name: ' + json.quote.companyName + '</h2>';
        results += '<p>Open Price: $' + json.quote.open + "</p>";
        results += '<p>Close Price: $' + json.quote.close + "</p>";
        results += '<p>High: $' + json.quote.high + "</p>";
        results += '<p>Low: $' + json.quote.low + "</p>";
        results += '<p>Latest Price: $' + json.quote.latestPrice + "</p>";
        results += '</div>';
        document.getElementById("stockResults").innerHTML = results;
      });
});

