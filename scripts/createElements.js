let injectHere = document.getElementById('injectHere');

export default function CityFavoriteInOffcanvas(){
    let div = document.createElement('div');
    let pTag = document.createElement('p');
    let hr = document.createElement('hr');
    pTag.className = "cityTxtInTheOffCanvas marginBtmZero";
    pTag.textContent = "Stockton, CA";
    div.appendChild(pTag);
    div.appendChild(hr);
    injectHere.appendChild(div);
}

