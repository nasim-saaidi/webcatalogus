console.log('js loaded')

const mobileGame = document.querySelector('.mobile-games')

function fetchData(url) {
    fetch(url)
        .then(myData => myData.json())
        .then(myJsonData => showData(myJsonData))
}

function showData (myJsonData) {
    console.log(myJsonData);
    for (let i = 0; i < myJsonData.length; i++) {
        const game = myJsonData[i];
        const card = createCard(game)
        mobileGame.innerHTML += card;
    }
}

function createCard(game) {
    const card = `
    <div class="card" style="width: 18rem;">
  <img src="${game.img}" class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title">${game.title}</h5>
    <p class="card-text">${game.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${game.genres}</li>
    <li class="list-group-item">${game.downloadFrom}</li>
    <li class="list-group-item">${game.releaseDate}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link"></a>
    <a href="#" class="card-link"></a>
  </div>
</div>
    `
    return card;
}
