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
let currentDayIcon = document.getElementById('currentDayIcon');

//day2
let day2Day = document.getElementById('day2Day');
let day2Min = document.getElementById('day2Min');
let day2Max = document.getElementById('day2Max');
let day2Icon = document.getElementById('day2Icon');

//day3
let day3Day = document.getElementById('day3Day');
let day3Min = document.getElementById('day3Min');
let day3Max = document.getElementById('day3Max');
let day3Icon = document.getElementById('day3Icon');

//day4
let day4Day = document.getElementById('day4Day');
let day4Min = document.getElementById('day4Min');
let day4Max = document.getElementById('day4Max');
let day4Icon = document.getElementById('day4Icon');

//day5
let day5Day = document.getElementById('day5Day');
let day5Min = document.getElementById('day5Min');
let day5Max = document.getElementById('day5Max');
let day5Icon = document.getElementById('day5Icon');

//day6
let day6Day = document.getElementById('day6Day');
let day6Min = document.getElementById('day6Min');
let day6Max = document.getElementById('day6Max');
let day6Icon = document.getElementById('day6Icon');

//I HAVE NOT DONE ANY PICTURES YET!!!

//Buttons
let favoritesBtn = document.getElementById('favoritesBtn');
let searchBtn = document.getElementById('searchBtn');

//imports
import {GetLocationData, success, error} from "./geolocation.js";
import CityFavoriteInOffcanvas from "./createElements.js";
import {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage} from "./localStorage.js";

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
let forecastData = [];
let longitude;
let latitude;
// let lat; 
// let lon;

function getCurrentCityCoordinates(nameOfCity){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameOfCity}&APPID=8903d3033bcdc5adc4484ce6f5201cfd`)
    .then(resp => resp.json())
    .then(data => {
        let locationData = {
            cityName : data.city.name,
            countryInitials : data.city.country,
        };
        CityAndCountry.textContent = locationData.cityName + ", " +locationData.countryInitials;
        longitude = data.city.coord.lon;
        latitude = data.city.coord.lat; 
        getCurrentCityData(latitude, longitude);


    })//end of the fetch
}//end of the function




function getCurrentCityData(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=imperial&appid=96b8d0dddf7a72fe527ea78d49c9586b`)
    .then(resp => resp.json())
    .then(data => { 
        forecastData = data
        // console.log(forecastData.daily[1].weather[0].icon);
        let forecastObject = {
            currentDay: [
                {currentDayTemp: forecastData.current.temp},
                {currentDaySunrise: forecastData.daily[0].sunrise},
                {currentDaySunset: forecastData.daily[0].sunset},
                {currentDayWindSpeed: forecastData.current.wind_speed},
                {currentDayFeelsLike: forecastData.current.feels_like},
                {currentHumidity: forecastData.current.humidity},
                {currentDayVisibility: forecastData.current.visibility},
                {currentDayPressure: forecastData.current.pressure},
                {currentDateDt: forecastData.daily[0].dt},
                {currentWeatherDesc: forecastData.current.weather[0].description},
                {currentWeatherIcon: forecastData.current.weather[0].icon},
                {currentDayMin: forecastData.daily[0].temp.min},
                {currentDayMax: forecastData.daily[0].temp.max},
                {DtRn: forecastData.current.dt},
                {currentDayIcon: forecastData.daily[0].weather[0].icon}
            ],

            secondDay:[
                {secondDayMin: forecastData.daily[1].temp.min},
                {secondDayMax: forecastData.daily[1].temp.max},
                {secondDayIcon: forecastData.daily[1].weather.icon},
                {secondDayDateDt: forecastData.daily[1].dt},
                {secondDayIcon: forecastData.daily[1].weather[0].icon}
            ],

            thirdDay : [
                {thirdDayMin: forecastData.daily[2].temp.min},
                {thirdDayMax: forecastData.daily[2].temp.max},
                {thirdDayIcon: forecastData.daily[2].weather.icon},
                {thirdDayDateDt: forecastData.daily[2].dt},
                {thirdDayIcon: forecastData.daily[2].weather[0].icon}
            ],

            fourthDay: [
                {fourthDayMin: forecastData.daily[3].temp.min},
                {fourthDayMax: forecastData.daily[3].temp.max},
                {fourthDayIcon: forecastData.daily[3].weather.icon},
                {fourthDayDateDt: forecastData.daily[3].dt},
                {fourthDayIcon: forecastData.daily[3].weather[0].icon}
            ],

            fifthDay : [
                {fifthDayMin: forecastData.daily[4].temp.min},
                {fifthDayMax: forecastData.daily[4].temp.max},
                {fifthDayIcon: forecastData.daily[4].weather.icon},
                {fifthDayDateDt: forecastData.daily[4].dt},
                {fifthDayIcon: forecastData.daily[4].weather[0].icon}

            ],

            sixthDay: [
                {sixthDayMin: forecastData.daily[5].temp.min},
                {sixthDayMax: forecastData.daily[5].temp.max},
                {sixthDayIcon: forecastData.daily[5].weather.icon},
                {sixthDayDateDt : forecastData.daily[5].dt},
                {sixthDayIcon: forecastData.daily[5].weather[0].icon}
            ]  
        }//End of the object
        //day 1, displaying data!
        day1Temperature.textContent = Math.floor(forecastObject.currentDay[0].currentDayTemp)+ "°F";
        let txtDescription = forecastObject.currentDay[9].currentWeatherDesc;
        day1Description.textContent = txtDescription.toUpperCase();
        day1Min.textContent = Math.floor(forecastObject.currentDay[11].currentDayMin);
        day1Max.textContent = Math.floor(forecastObject.currentDay[12].currentDayMax);
        day1FeelsLike.textContent = Math.floor(forecastObject.currentDay[4].currentDayFeelsLike)+ "°F";
        day1Humidity.textContent = forecastObject.currentDay[5].currentHumidity+ "%"
        day1Wind.textContent = Math.round(forecastObject.currentDay[3].currentDayWindSpeed)+ " mph";
        day1Visibility.textContent = Math.round(forecastObject.currentDay[6].currentDayVisibility/1609)+ " mi"; //meters divided by 1609 converts meters to miles
        let Pressure = forecastObject.currentDay[7].currentDayPressure*0.0295;
        day1Pressure.textContent = Pressure.toFixed(2) + " in"; //hPa converted to inches of Mercury!
        currentDayIcon.src = "https://openweathermap.org/img/wn/" + forecastObject.currentDay[14].currentDayIcon + ".png";

        //converting unix timestamp to for the current day!
        let unixTimeStamp = forecastObject.currentDay[8].currentDateDt;
        let milliseconds = unixTimeStamp * 1000;
        let dateObject = new Date(milliseconds);
        let dayDate = dateObject.toLocaleDateString("en-US", {weekday: "long"});
        let currentMonth = dateObject.toLocaleDateString("en-US", {month: "long"});
        let currentNumDate = dateObject.toLocaleString("en-US", {day: "numeric"});
        day1MonthAndDate.textContent = currentMonth + " "+ currentNumDate+",";
        day1WeekDay.textContent = dayDate;
        day1Year.textContent = dateObject.toLocaleString("en-US", {year: "numeric"});
        //working on the current date

        //I looked at both dt's for Stockton Moscow and their values essentially the same, i can't differentiate between time zones!
        let currentDayUnixTimeStamp = forecastObject.currentDay[13].DtRn;
        let currentDayDate = new Date(currentDayUnixTimeStamp * 1000);
        let currentDayHours = currentDayDate.getHours();
        let currentDayMinutes = currentDayDate.getMinutes();
        currentTime.textContent = currentDayHours + ":" +currentDayMinutes;



        //coverting unix timestmp for the sunrise
        let sunriseUnix_timestamp = forecastObject.currentDay[1].currentDaySunrise;
        let sunriseDate = new Date(sunriseUnix_timestamp * 1000);
        let sunriseHours = sunriseDate.getHours();
        let sunriseMinutes = sunriseDate.getMinutes();
        //The time right now is in 24 hour time! Convert it to 12 hour time format!
        sunriseHours = ((sunriseHours + 11) %12 + 1);
        Day1Sunrise.textContent = sunriseHours+":"+sunriseMinutes+ " AM";


        //converting unix timestamp for the sunset!
        let sunsetUnix_timestamp = forecastObject.currentDay[2].currentDaySunset;
        let sunsetDate = new Date(sunsetUnix_timestamp * 1000);
        let sunsetHours = sunsetDate.getHours();
        let sunsetMinutes = sunsetDate.getMinutes();
        //Convert the 24 hour time to 12 hour format
        sunsetHours = ((sunsetHours + 11) %12 + 1);
        Day1Sunset.textContent = sunsetHours+":"+sunsetMinutes+ " PM";

        //day2
        day2Min.textContent = Math.floor(forecastObject.secondDay[0].secondDayMin)+ "°F";
        day2Max.textContent = Math.floor(forecastObject.secondDay[1].secondDayMax)+ "°F";
        day2Icon.src = "https://openweathermap.org/img/wn/" + forecastObject.secondDay[4].secondDayIcon + ".png";

        let unixTimeStamp2 = forecastObject.secondDay[3].secondDayDateDt;
        let milliseconds2 = unixTimeStamp2 * 1000;
        let dateObject2 = new Date(milliseconds2);
        let dayDate2 = dateObject2.toLocaleDateString("en-US", {weekday: "long"});
        day2Day.textContent = dayDate2;

        //day3
        day3Min.textContent = Math.floor(forecastObject.thirdDay[0].thirdDayMin)+ "°F";
        day3Max.textContent = Math.floor(forecastObject.thirdDay[1].thirdDayMax)+ "°F";
        day3Icon.src = "https://openweathermap.org/img/wn/" + forecastObject.thirdDay[4].thirdDayIcon + ".png";

        let unixTimeStamp3 = forecastObject.thirdDay[3].thirdDayDateDt;
        let milliseconds3 = unixTimeStamp3 * 1000;
        let dateObject3 = new Date(milliseconds3);
        let dayDate3 = dateObject3.toLocaleDateString("en-US", {weekday: "long"});
        day3Day.textContent = dayDate3;

        //day4
        day4Min.textContent = Math.floor(forecastObject.fourthDay[0].fourthDayMin)+ "°F";
        day4Max.textContent = Math.floor(forecastObject.fourthDay[1].fourthDayMax)+ "°F";
        day4Icon.src = "https://openweathermap.org/img/wn/" + forecastObject.fourthDay[4].fourthDayIcon + ".png";

        let unixTimeStamp4 = forecastObject.fourthDay[3].fourthDayDateDt;
        let milliseconds4 = unixTimeStamp4 * 1000;
        let dateObject4 = new Date(milliseconds4);
        let dayDate4 = dateObject4.toLocaleDateString("en-US", {weekday: "long"});
        day4Day.textContent = dayDate4;

        //day5
        day5Min.textContent = Math.floor(forecastObject.fifthDay[0].fifthDayMin)+ "°F";
        day5Max.textContent = Math.floor(forecastObject.fifthDay[1].fifthDayMax)+ "°F";
        day5Icon.src = "https://openweathermap.org/img/wn/" + forecastObject.fifthDay[4].fifthDayIcon + ".png";

        let unixTimeStamp5 = forecastObject.fifthDay[3].fifthDayDateDt;
        let milliseconds5 = unixTimeStamp5 * 1000;
        let dateObject5 = new Date(milliseconds5);
        let dayDate5 = dateObject5.toLocaleDateString("en-US", {weekday: "long"});
        day5Day.textContent = dayDate5;

        //day6
        day6Min.textContent = Math.floor(forecastObject.sixthDay[0].sixthDayMin)+ "°F";
        day6Max.textContent = Math.floor(forecastObject.sixthDay[1].sixthDayMax)+ "°F";
        day6Icon.src = "https://openweathermap.org/img/wn/" + forecastObject.sixthDay[4].sixthDayIcon + ".png";

        let unixTimeStamp6 = forecastObject.sixthDay[3].sixthDayDateDt;
        let milliseconds6 = unixTimeStamp6* 1000;
        let dateObject6 = new Date(milliseconds6);
        let dayDate6 = dateObject6.toLocaleDateString("en-US", {weekday: "long"});
        day6Day.textContent = dayDate6;

    })//end of the fetch
}//end of the function

//Get the five day forecast and the one day forecast!
searchBtn.addEventListener('click', function(e){
    getCurrentCityCoordinates(searchCityInputField.value);
});

let favOn = false;
favoritesBtn.addEventListener('click', function () {
    //if the button is clicked switch the favorite image with the other

    //If i favorite a city and go to another city the star remains filled it need to check if the next city searched is inside the favorites

    if(favOn == true){
        //Needs to be unfavorited
        RemoveFromLocalStorage(searchCityInputField.value);
        favoritesBtn.className = "blackstarImg button";

    }else{
        //Needs to be favorited icon full
        SaveToLocalStorageByCityName(searchCityInputField.value);
        favoritesBtn.className = "blackstarFilled button";

    }
    favOn = !favOn;

});


GetLocationData();
export{getCurrentCityCoordinates, getCurrentCityData, CityAndCountry, searchCityInputField}
