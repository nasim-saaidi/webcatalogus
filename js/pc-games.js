const container = document.querySelector(".container-md");

let jsonData;

if (window.location.pathname == "/subject-three/blizzard.html") {
    jsonData = "https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment"
}
else if (window.location.pathname == "/subject-three/riot-games.html") {
    jsonData = "https://mbo-sd.nl/period3-fetch/games-pc-riot-games"
}
else if (window.location.pathname == "/subject-three/epic-games.html") {
    jsonData = "https://mbo-sd.nl/period3-fetch/games-pc-epic-games"
}



fetch(jsonData)
    .then(myData => myData.text())
    .then(textData => showOnPage(textData));

function showOnPage(data) {
    articles = JSON.parse(data)
    for (i = 0; i < articles.length; i++) {
        createText(i);
    }
}

function createText(gameNumber) {


    placeText(i);
}


function placeText(gameNumber) {
    container.innerHTML +=
        `<div class="row m-3">
            <div class="col-5 d-flex align-items-center">
                <img class="w-100 border border-dark border-2 rounded" src="${articles[gameNumber].img}" alt="">
            </div>
            <div class="col-7 d-flex flex-colum justify-content-center bg-light border border-dark border-2 rounded flex-column" style="--bs-bg-opacity: .4;">
                <h4>${articles[gameNumber].title}</h4>
                <p>${articles[gameNumber].description}</p>
                <div class="row">
                    <div class="col">
                        <strong>${articles[gameNumber].price}</strong>
                        <p>${articles[gameNumber].genres}</p>
                    </div>
                    <div class="col">
                        <strong>${articles[gameNumber].releaseDate}</strong>
                        <p>${articles[gameNumber].platforms}</p>
                    </div>
                </div>
            </div>
        </div>`
}