

function SaveToLocalStorageByCityName(cityName)
{
    let favorites = GetLocalStorage();
    favorites.push(cityName.toLowerCase());
    SaveToLocalStorage(favorites);
    // localStorage.setItem('Favorites',JSON.stringify(favorites));
}


function SaveToLocalStorage(favorites){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

// function CheckLocalStorage(){
//     const localStorageItem = localStorage.getItem('Favorites');
//     localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
// }

function GetLocalStorage(){
    let localStorageData = localStorage.getItem('Favorites');
    //Check if the data even exists
    //If there is no existing data then return nothing!
    if(localStorageData == null){
        return [];
    }else{
        //However if there is data return that!
        return JSON.parse(localStorageData);
    }
   
}

function RemoveFromLocalStorage(cityName){
    const favorites = GetLocalStorage();
    let cityIndex = favorites.indexOf(cityName);

    //found cityname in array favorites
    favorites.splice(cityIndex,1);
    SaveToLocalStorage(favorites);
}

// localStorage.setItem('people','jateen angel');
//let people = ['jateen','angel']

//GetLocalStorage();
//console.log(people);
//SaveToLocalStorage();

export {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage}