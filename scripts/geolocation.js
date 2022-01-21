//enable geolocation on macs

function success(position){
    console.log(position);
}

function error(err){
    console.warn(err);
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

export default GetLocationData;
