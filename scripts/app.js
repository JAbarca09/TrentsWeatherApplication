//Jesse Abarca
//1/21/22
//Weather Sprint-Day4
//Submit your entire project, provide a link to your site, and submit your prototype you were using for the project!

//connections that need to be established!
let searchCityInputField = document.getElementById('searchCityInputField');

//Used to display data!
let CityAndCountry = document.getElementById('CityAndCountry'); //Ex. Stockton, US
let day1Temperature = document.getElementById('day1Temperature'); //Temperature of first day
let day1Description = document.getElementById('day1Description'); //Description
let day1WeekDay = document.getElementById('day1WeekDay'); //Ex. Saturday
let day1MonthAndDate = document.getElementById('day1MonthAndDate') //Ex. January 15th
let day1Year = document.getElementById('day1Year'); //Ex. 2022
let currentTime = document.getElementById('currentTime')//Ex. 11:58 AM
let day1FeelsLike = document.getElementById('day1FeelsLike'); //Ex. 74°F
let day1Min = document.getElementById('day1Min'); //Ex. 67
let day1Max = document.getElementById('day1Max'); //Ex. 75
let day1Humidity = document.getElementById('day1Humidity'); //Ex. 65%
let day1Pressure = document.getElementById('day1Pressure'); //Ex. 30.14 in
let day1Visibility = document.getElementById('day1Visibility'); //Ex. 10.2 mi
let day1Wind = document.getElementById('day1Wind'); //Ex. 4 mph
let Day1Sunrise = document.getElementById('Day1Sunrise'); //Ex. 7:10 AM
let Day1Sunset = document.getElementById('Day1Sunset'); //Ex. 5:13 PM

//day2
let day2Day = document.getElementById('day2Day');
let day2Min = document.getElementById('day2Min');
let day2Max = document.getElementById('day2Max');

//day3
let day3Day = document.getElementById('day3Day');
let day3Min = document.getElementById('day3Min');
let day3Max = document.getElementById('day3Max');

//day4
let day4Day = document.getElementById('day4Day');
let day4Min = document.getElementById('day4Min');
let day4Max = document.getElementById('day4Max');

//day5
let day5Day = document.getElementById('day5Day');
let day5Min = document.getElementById('day5Min');
let day5Max = document.getElementById('day5Max');

//day6
let day6Day = document.getElementById('day6Day');
let day6Min = document.getElementById('day6Min');
let day6Max = document.getElementById('day6Max');

//I HAVE NOT DONE ANY PICTURES YET!!!

//Buttons
let favoritesBtn = document.getElementById('favoritesBtn');
let searchBtn = document.getElementById('searchBtn');



//imports
import GetLocationData from "./geolocation.js";
import createFavoriteInOffcanvas from "./createElements.js";

//lat and long OneCal current day!  https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//
// put in a city https://api.openweathermap.org/data/2.5/forecast?q=Stockton&APPID=8903d3033bcdc5adc4484ce6f5201cfd

//function for fetching
//variables for one call with latitude and longitude
let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall";
let lat= '?lat=';
let lon = '&lon=';
let apiKey = '&appid=';
let cityName = '?city=';


//url for one day, the current day!
let weatherCall_pt1 = "https://api.openweathermap.org/data/2.5/weather";
let weatherCall_city_pt2 = "?q=";


//url for the 5 day forecast
//call without information api.openweathermap.org/data/2.5/forecast?q={city name}&units=imperial&appid=
//http://api.openweathermap.org/data/2.5/forecast?q={cityname}&units=imperial&appid=96b8d0dddf7a72fe527ea78d49c9586b;
let weatherData = [];
let currentDayData = [];

function getDataFiveDayForeCastByCityName(nameOfCity) {

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${nameOfCity}&units=imperial&appid=96b8d0dddf7a72fe527ea78d49c9586b`)
        .then(resp => resp.json())
        .then(data => {
            weatherData = data
            // console.log(weatherData); all the data
            //state!
            // console.log(weatherData.city.name); //Stockton
            // console.log(weatherData.city.country); //US 
            console.log(weatherData.list[0].main.humidity);//humidity for the first day!
            console.log(weatherData.list[0].main.pressure);  //pressure for the first day!
            // console.log(weatherData.list[0].weather[0].description); //description for the first day!
            // console.log(Math.floor(weatherData.list[0].wind.speed)); //wind speed for the first day!
            // console.log(weatherData.list[0].visibility); // visibility for the first day!

            //https://www.epochconverter.com/programming/#javascript
            //https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
            // console.log(weatherData.city.sunrise); //sunrise
            // console.log(weatherData.city.sunset);  //sunset


            //Save our data into an object to keep things neat!
            let weatherInfo = {
                cityName: weatherData.city.name,
                cityCountry: weatherData.city.country,
                secondDay: [
                    { secondDayTemp: weatherData.list[0].main.temp },
                    { secondDayMin: weatherData.list[0].main.temp_min },
                    { secondDayMax: weatherData.list[7].main.temp_max },
                    { secondDaySunrise: weatherData.city.sunrise },
                    { secondDaySunset: weatherData.city.sunset },
                    { secondDayVisibility: weatherData.list[0].visibility },
                    { secondDayWindSpeed: weatherData.list[0].wind.speed },
                    { secondDayDescription: weatherData.list[0].weather[0].description },
                    { secondDayPressure: weatherData.list[0].main.pressure },
                    { secondDayHumidity: weatherData.list[0].main.humidity },
                    { secondDayFeelsLike: weatherData.list[0].main.feels_like },
                    { secondDayDate: weatherData.list[0].dt_txt }
                ],
                thirdDay: [ 
                    { thirdDayMinTemp: weatherData.list[8].main.temp_min },
                    { thirdDayMaxTemp: weatherData.list[16].main.temp_max },
                    { thirdDayFeelsLike: weatherData.list[8].main.feels_like },
                    { thirdDayDate: weatherData.list[8].dt_txt }
                ],
                fourthDay: [ 
                    { fourthDayMinTemp: weatherData.list[17].main.temp_min },
                    { fourthDayMaxTemp: weatherData.list[23].main.temp_max },
                    { fourthDayFeelsLike: weatherData.list[17].main.feels_like },
                    { fourthDayDate: weatherData.list[17].dt_txt }
                ],
                fifthDay: [ 
                    { fifthDayMinTemp: weatherData.list[25].main.temp_min },
                    { fifthDayMaxTemp: weatherData.list[31].main.temp_max },
                    { fifthDayFeelsLike: weatherData.list[25].main.feels_like },
                    { fifthDayDate: weatherData.list[25].dt_txt }
                ],
                sixthDay: [ 
                    { sixthDayMinTemp: weatherData.list[32].main.temp_min },
                    { sixthDayMaxTemp: weatherData.list[39].main.temp_max },
                    { sixthDayFeelsLike: weatherData.list[32].main.feels_like },
                    { sixthDayDate: weatherData.list[32].dt_txt }
                ]
               
            };//end of the object

           //day2-6
           day2Min.textContent = Math.floor(weatherInfo.secondDay[1].secondDayMin)+ "°F";
           day2Max.textContent = Math.floor(weatherInfo.secondDay[2].secondDayMax)+ "°F";

           //day3
           day3Min.textContent = Math.floor(weatherInfo.thirdDay[0].thirdDayMinTemp)+ "°F";
           day3Max.textContent = Math.floor(weatherInfo.thirdDay[1].thirdDayMaxTemp)+ "°F";

           //day4
           day4Min.textContent = Math.floor(weatherInfo.fourthDay[0].fourthDayMinTemp)+ "°F";
           day4Max.textContent = Math.floor(weatherInfo.fourthDay[1].fourthDayMaxTemp)+ "°F";
            
            //day5
            day5Min.textContent = Math.floor(weatherInfo.fifthDay[0].fifthDayMinTemp)+ "°F";
            day5Max.textContent = Math.floor(weatherInfo.fifthDay[1].fifthDayMaxTemp)+ "°F";

            //day6
            day6Min.textContent = Math.floor(weatherInfo.sixthDay[0].sixthDayMinTemp)+ "°F";
            day6Max.textContent = Math.floor(weatherInfo.sixthDay[1].sixthDayMaxTemp)+ "°F";

        })//End of the fetch!
}//End of the function

function getCurrentDayData(nameOfCity){
    fetch(`api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=imperial&APPID=96b8d0dddf7a72fe527ea78d49c9586b`)
    .then(resp => resp.json())
    .then(data => {

    })
}

//Get the five day forecast and the one day forecast!
searchBtn.addEventListener('click', function(e){

    getDataFiveDayForeCastByCityName(searchCityInputField.value);            
});

favoritesBtn.addEventListener('click', function () {
    //if the button is clicked switch the favorite image with the other
    if (favoritesBtn.className == "blackstarImg button") {
        favoritesBtn.className = "blackstarFilled button";

    } else if (favoritesBtn.className == "blackstarFilled button") {
        favoritesBtn.className = "blackstarImg button";
    }
});


GetLocationData();

