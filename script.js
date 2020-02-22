document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);

    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=23dd6eee90f143aa2387934fc5a805d9";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
        results += '<div class="current"><h2>Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description;
        if (i !== json.weather.length - 1)
            results += ", "
        }
        results += "</p>";
        results += "<p>High: " + json.main.temp_max;
        results += "/Low: " + json.main.temp_min + "</p>";
        results += "<p>Humidity: " + json.main.humidity + "</p>";
        results += "<p>Wind Speed: " + json.wind.speed + "</p></div>";
        document.getElementById("weatherResults").innerHTML = results;
      });

      const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=23dd6eee90f143aa2387934fc5a805d9";
        fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
        forecast += "<div class='time'><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
        forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += "<p>High: " + json.list[i].main.temp_max;
        forecast += "/Low: " + json.list[i].main.temp_min + "</p>";
        forecast += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
        forecast += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});
