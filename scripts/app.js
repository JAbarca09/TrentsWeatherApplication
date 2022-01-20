let weatherData = [];

//tidy data will only contain the data that I need!

function getData() {

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

            console.log(Math.floor(weatherData.list[17].main.temp_min)); //temp_min for the third day
            console.log(Math.floor(weatherData.list[17].main.temp_max)); //temp_max for the third day

            console.log(Math.floor(weatherData.list[25].main.temp_min)); //temp_min for the fourth day
            console.log(Math.floor(weatherData.list[25].main.temp_max)); //temp_max for the fourth day

            console.log(Math.floor(weatherData.list[32].main.temp_min)); //temp_min for the fifth day
            console.log(Math.floor(weatherData.list[32].main.temp_max)); //temp_max for the fifth day



            // fetch the dates for each of the five dates!
            // console.log(weatherData.list[0].dt_txt);



            //Save our data into an object, the data that we will use!
            let weatherInfo = {
                cityName: weatherData.city.name,
                cityCountry: weatherData.city.country,
                firstDay: [
                    {firstDayTemp: weatherData.list[0].main.temp},
                    {firstDayMin: weatherData.list[0].main.temp_min},
                    {firstDayMax: weatherData.list[0].main.temp_max},
                    {firstDaySunrise: weatherData.city.sunrise},
                    {firstDaySunset: weatherData.city.sunset},
                    {firstDayVisibility: weatherData.list[0].visibility},
                    {firstDayWindSpeed: weatherData.list[0].wind.speed},
                    {firstDayDescription: weatherData.list[0].weather[0].description},
                    {firstDayPressure: weatherData.list[0].main.pressure},
                    {firstDayHumidity: weatherData.list[0].main.humidity},
                    {firstDayFeelsLike: weatherData.list[0].main.feels_like},
                    {firstDayDate: weatherData.list[0].dt_txt}
                ],
                secondDay: [
                    {secondDayMinTemp: weatherData.list[8].main.temp_min},
                    {secondDayMaxTemp: weatherData.list[8].main.temp_max},
                    {secondDayFeelsLike: weatherData.list[8].main.feels_like},
                    {secondDayDate: weatherData.list[8].dt_txt}
                ],
                thirdDay: [
                    {thirdDayMinTemp: weatherData.list[17].main.temp_min},
                    {thirdDayMaxTemp: weatherData.list[17].main.temp_max},
                    {thirdDayFeelsLike: weatherData.list[17].main.feels_like},
                    {thirdDayDate: weatherData.list[17].dt_txt}
                ],
                fourthDay: [
                    {forthDayMinTemp: weatherData.list[25].main.temp_min},
                    {forthDayMaxTemp: weatherData.list[25].main.temp_max},
                    {forthDayFeelsLike: weatherData.list[25].main.feels_like},
                    {fourthDayDate: weatherData.list[25].dt_txt}
                ],
                fifthDay: [
                    {fifthDayMinTemp: weatherData.list[32].main.temp_min},
                    {fifthDayMaxTemp: weatherData.list[32].main.temp_max},
                    {fifthDayFeelsLike: weatherData.list[32].main.feels_like},
                    {fifthDayDate: weatherData.list[32].dt_txt}
                ]
            };


            //JT's example!
            // let obj = {
            //     cityName: weatherData.city.name;
            // }
        })
}

getData();

//I need code outside of the api to get the current date and time in JS like how we did in C# Unity!