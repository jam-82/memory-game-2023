document.addEventListener('DOMContentLoaded', () => {

    // list all card options
    const cardArray = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
    ]

    
    // how to sort cardArray randomly
    cardArray.sort(() => 0.5 - Math.random())
    // console.log(cardArray)
    
    // 
    //put the randomly sorted cardArray into a grid
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    //create your board
    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
        
    
    // we get whatever card we flip with a data-id
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        // console.log(cardId)
        cardsChosen.push(cardArray[cardId].name)
        // console.log(cardsChosen)
        cardsChosenIds.push(cardId)
        // console.log(cardsChosenIds)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            console.log(cardsChosen)
            setTimeout(checkForMatch, 500)
        }
        // console.log(cardsChosen)
        // console.log(cardsChosenIds)

    }
    
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId) {
            console.log("You have clicked on the same image!")
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            
        } else if (cardsChosen[0] === cardsChosen[1]) {
            // console.log(cardsChosen[0])
            // console.log(cardsChosen[1])
            console.log('You have found a match')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            // console.log(cards)
            // cardsWon.push(cardsChosen)
            // console.log(cardsWon)
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            console.log('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = ' ' + cardsWon.length + ' Congratulations! You have won!'
        }

        // console.log(cardsChosen)
        // console.log(cardsWon)
    }
    
    // In the checkForMatch function: we have to make sure that people can't double click on the same image for one, otherwise it double click the same card and we would get a match(we need to prevent that for happening)
    
    createBoard()
    
    
})

