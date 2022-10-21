window.addEventListener('load', init);




function init() {

    const container = document.getElementById('container');
    const cardCount = 32;

    for (let i = 0; i < cardCount; i++) {
        let newCard = document.createElement('div');
        newCard.setAttribute('class', 'card');
        newCard.setAttribute('id', `card ${i}`);
        let newBack = document.createElement('div');
        newBack.setAttribute('class', 'back');
        let newFront = document.createElement('div');
        newFront.setAttribute('class', 'front');
        newCard.append(newBack, newFront);
        newCard.addEventListener('click', cardClick);
        container.append(newCard);
    }

}

function cardClick(ev) {

    ev.target.classList.toggle('flipped');


}


