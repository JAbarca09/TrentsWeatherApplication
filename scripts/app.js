let weatherData = [];

//tidy data will only contain the data that I need!
let tidyData;

function getData(){

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockton&units=imperial&appid=96b8d0dddf7a72fe527ea78d49c9586b')
    .then(resp => resp.json())
    .then(data => {
        weatherData = data
        // console.log(weatherData); all the data
        //state!
        console.log(weatherData.city.name); //Stockton
        console.log(weatherData.city.country); //US 
        console.log(weatherData.list[0].main.humidity);//humidity for the first day!
        console.log(weatherData.list[0].main.pressure);  //pressure for the first day!
        console.log(weatherData.list[0].weather[0].description); //description for the first day!
        console.log(Math.floor(weatherData.list[0].wind.speed)); //wind speed for the first day!
        console.log(weatherData.list[0].visibility); // visibility for the first day!

        //https://www.epochconverter.com/programming/#javascript
        //https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
        console.log(weatherData.city.sunrise); //sunrise
        console.log(weatherData.city.sunset);  //sunset

        console.log(Math.floor(weatherData.list[0].main.temp)); //temperature for the first day!
        console.log(Math.floor(weatherData.list[0].main.temp_min)) //temp_min first day
        console.log(Math.floor(weatherData.list[0].main.temp_max)) //temp_min first day

        console.log(Math.floor(weatherData.list[8].main.temp_min)); //temp_min for the second day!
        console.log(Math.floor(weatherData.list[8].main.temp_max)); //temp_max for the second day!

        console.log(Math.floor(weatherData.list[16].main.temp_min)); //temp_min for the third day
        console.log(Math.floor(weatherData.list[16].main.temp_max)); //temp_max for the third day

        console.log(Math.floor(weatherData.list[24].main.temp_min)); //temp_min for the fourth day
        console.log(Math.floor(weatherData.list[24].main.temp_max)); //temp_max for the fourth day

        console.log(Math.floor(weatherData.list[32].main.temp_min)); //temp_min for the fifth day
        console.log(Math.floor(weatherData.list[32].main.temp_max)); //temp_max for the fifth day
        
        
        
        
        // let obj = {
        //     cityName: weatherData.city.name;
        // }
        //Save our data into an object, the data that we will use!
        //Obtain  the first day's data...
    })
}

getData();

//I need code outside of the api to get the current date and time in JS like how we did in C# Unity!