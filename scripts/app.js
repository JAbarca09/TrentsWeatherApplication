let weatherData = [];

function getData(){

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockton&units=imperial&appid=96b8d0dddf7a72fe527ea78d49c9586b')
    .then(resp => resp.json())
    .then(data => {
        weatherData = data
        // console.log(weatherData); all the data
        console.log(weatherData.city.name); //Stockton
        console.log(weatherData.city.country); //US 
        console.log(weatherData.list[0].main.humidity);//humidity for the first day!
        console.log(weatherData.list[0].main.pressure); 
        console.log(weatherData.list[0].weather[0].description); //description for the first day!
        console.log(Math.floor(weatherData.list[0].wind.speed)); // wind speed for the first day
        //https://www.epochconverter.com/programming/#javascript
        //https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
        console.log(weatherData.city.sunrise); //sunrise
        console.log(weatherData.city.sunset);  //sunset

        console.log(Math.floor(weatherData.list[0].main.temp)); //temperature for the first day!
        console.log(Math.floor(weatherData.list[1].main.temp)); //temperature for the second day!
        console.log(Math.floor(weatherData.list[2].main.temp)); //temperature for the third day!
        console.log(Math.floor(weatherData.list[3].main.temp)); //temperature for the fourth day!
        console.log(Math.floor(weatherData.list[4].main.temp)); //temperature for the fifth day!

        //Obtain  the first day's data...
    })
}

getData();

