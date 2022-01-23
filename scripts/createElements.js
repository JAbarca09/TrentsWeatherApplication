import {getCurrentCityCoordinates, searchCityInputField} from './app.js';
let injectHere = document.getElementById('injectHere');

export default function CityFavoriteInOffcanvas(searchCityInputField){
    let div = document.createElement('div');
    let pTag = document.createElement('p');
    let hr = document.createElement('hr');
    let a = document.createElement('a');
    //Should I make an on lick event? Probably
    pTag.className = "cityTxtInTheOffCanvas marginBtmZero";
    pTag.textContent = "Stockton, CA";
    a.appendChild(pTag);
    //div has anchor and hr tag
    div.appendChild(a);
    div.appendChild(hr);
    injectHere.appendChild(div);
}


//I also need a function to remove the created element!

