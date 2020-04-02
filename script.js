var apikey = "166a433c57516f51dfab1f7edaed8413"


var button = document.getElementsByClassName("btn")
button[0].addEventListener("click",function(){
var cityForecast = document.getElementById("userinput").value
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityForecast + "&appid="+ apikey;
console.log(queryURL)

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

        for(var i=0;i<4;i++){
        var todaystemp = (response.list[i*8].main.temp) - 273.15
        var todayshumidity = (response.list[i*8].main.humidity)
        var todayswindspeed = (response.list[i*8].wind.speed)

        document.getElementById(i+"temp").innerHTML = "Temperate: "+ Math.round(todaystemp)+" Degrees Celcius"
        document.getElementById(i+"hum").innerHTML = "Humidity: "+ todayshumidity
        }

      })

})