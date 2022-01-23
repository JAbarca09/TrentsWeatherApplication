//enable geolocation on macs
import {CityAndCountry, getCurrentCityCoordinates,getCurrentCityData} from './app.js';


function success(position){
    console.log(position)
    //save the coordinates and pass them in
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //I cannot get the user's city and country data because that is in the  getCurrentCityCoordinates fetch!
    //I have no access to that data just by using longitude and latitude
    CityAndCountry.textContent = 'User Location';
    getCurrentCityData(lat, lon);
}

function error(err){
    console.warn(err);
    //run a default location, do a random location from the following!
    let rCities = ['Stockton', 'Sydney', 'Tokyo', 'Moscow', 'London', 'Michoacan', 'Jalisco', 'Modesto', 'Lodi', 'Sacramento', 'Tracy'];
    let randomCity = Math.floor((Math.random() * rCities.length));
    getCurrentCityCoordinates(rCities[randomCity]);
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function GetLocationData(){

    //Navigator
    //3 options
    navigator.geolocation.getCurrentPosition(success, error, options);
}

export {GetLocationData, success, error}