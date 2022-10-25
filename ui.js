window.addEventListener('load', init);

let cardsFlipped = 0;

function init() {

    const container = document.getElementById('container');

    const cardData = loadData();


    /* we need two data sets: one with the pairs linked (for knowing when a correct answer is found), one for creating the cards themselves.
     * cardData.dataPairs is the former.  For the latter, we just need to create a new, flattened array. */
    let dataList = cardData.dataPairs.flat();

    // figure out how many rows/columns are needed.
    const cardCount = dataList.length;



    // shuffle
    for (let i = 0; i < dataList.length; i++) {

        // grab a random index within the array and swap it with the next item in the array
        let randomIndex = Math.floor(Math.random() * dataList.length);
        [dataList[i], dataList[randomIndex]] = [dataList[randomIndex], dataList[i]];
    }

    // build zee deck
    for (let i = 0; i < dataList.length; i++) {
        let newCard = buildNewCard(dataList[i]);
        newCard.addEventListener('click', cardClick);
        container.append(newCard);
    }

}

// flip the card and check for matches
function cardClick(ev) {

    const flipped = ev.target;
    flipped.classList.toggle('flipped');
    
    



}

function buildNewCard(txt) {

    let newCard = document.createElement('div');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('id', `card-${txt}`);
    let newBack = document.createElement('div');
    newBack.setAttribute('class', 'back');
    let newFront = document.createElement('div');
    newFront.setAttribute('class', 'front');
    newFront.innerText = txt;
    newCard.append(newBack, newFront);
    return newCard;

}


