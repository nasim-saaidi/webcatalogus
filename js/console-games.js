const container = document.querySelector(".lop");

const consoleGamesElement = document.querySelector('.console-games')

function fetchData(url) {
    fetch(url)
        .then(myData => myData.json())
        .then(myJsonData => showData(myJsonData))
}

function showData(myJsonData) {
    console.log(myJsonData)

    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element)
        consoleGamesElement.innerHTML += card;
    }
}



function createCard(game) {
    const card = `
    <div class="col d-flex align-items-stretch">
  <div class="card">
    <img class="card-img-top" src="${game.img}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${game.title}</h4>
      <p class="card-text">${game.description}</p>
    </div>
    <div class="card-body d-flex align-items-stretch">
      <div class='row'>

        <div class="border border-dark border-1">
          <div class='col'>
            <p>Genre:</p>
            <div>${game.genres}</div>
          </div>
        </div>
        <br>
        <div class="border border-dark border-1">
          <div class="col">
            <p>Player count:</p>
            <div>${game.playerCount}</div>
          </div>
        </div>
        <br>
        <div class="border border-dark border-1">
          <div class="col">
            <p>Release date:</p>
            <div>${game.firstGame}</div>
          </div>
        </div>
        <br>
        <div class="border border-dark border-1">
        <div class="col ">
          <p>sales:</p>
          <div>${game.sales}</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    `

    return card;
}