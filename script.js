var apikey = "166a433c57516f51dfab1f7edaed8413"
var cityForecast = "Adelaide"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityForecast + "&appid="+ apikey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var todaystemp = (response.list[0].main.temp) - 273.15
    var todayshumidity = (response.list[0].main.humidity)
    var todayswindspeed = (response.list[0].wind.speed)
    var location = (response.city.name)

    document.getElementById("1temp").innerHTML = "Temperate: "+ Math.round(todaystemp)+" Degrees Celcius"
    document.getElementById("1hum").innerHTML = "Humidity: "+ todayshumidity
    document.getElementById("1wind").innerHTML = "Windspeed: " + todayswindspeed
    document.getElementById("cityname").innerHTML = location
  })
  