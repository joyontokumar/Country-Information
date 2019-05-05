window.onload = mainFun;
var pick = "";

function mainFun() {
    document.getElementById("myButton").addEventListener('click', loadUrl);
}

function loadUrl() {
    var xhr = new XMLHttpRequest;
    xhr.open('get', 'https://restcountries.eu/rest/v2/all', true);
    xhr.onload = ourData;
    xhr.send();
}

function ourData() {
    var data = JSON.parse(this.responseText);
    var output = document.getElementById("output");

    for (var i = 0; i < data.length; i++) {
        var myddata = data[i];
        console.log(myddata);
        pick += `<div class="country_list col-md-2">
            <p>country : ${myddata.name}</p>
            <img src="${myddata.flag}" class="img-respomsive img-fluid" />
            <p>Population: ${myddata.population}</p>
            <p>CaPital : ${myddata.capital}</p>
            <p>Languages : ${myddata.languages[0].name}</p>
            <p>Region : ${myddata.region}</p>
            <p>Mobile Code : ${myddata.callingCodes}</p>
        </div>`;
    }
    output.innerHTML = pick;
}