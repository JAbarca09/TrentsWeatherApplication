// let favorites = [
//     'Lodi','Stockton','Tokyo'
// ]
let favorites = [];

function SaveToLocalStorageByCityName(cityName)
{
    favorites.push(cityName);
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}


function SaveToLocalStorage(){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

function CheckLocalStorage(){
    const localStorageItem = localStorage.getItem('Favorites');
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
}


function GetLocalStorage(){
    // const localStorageData = localStorage.getItem('Favorites');
    // favorites = JSON.parse(localStorageData);
    //console.log(favorites);
    CheckLocalStorage();
    //favorites = JSON.parse(localStorage.getItem('Favorites'));
    return favorites;
}

function RemoveFromLocalStorage(cityName){
    let cityIndex = favorites.indexOf(cityName);
    //found cityname in array favorites
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}

// localStorage.setItem('people','jateen angel');
//let people = ['jateen','angel']

//GetLocalStorage();
//console.log(people);
//SaveToLocalStorage();

export {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage}