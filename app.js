/*club example
let age = 22

if (age < 21) {
   console.log ("You can not enter the club!")
}
  else (age > 21) {
    console.log("Welcome!")
  }

//letter from king example
let age = 100

if (age < 100) {
  console.log("Not elegible")
} else if ( age === 100) {
  console.log ("Here is your birthday card from the King!")
} else {
  console.log("Not elegible, you have already gotten one.")
} */

/* roll dice function for a random number
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}
console.log( rollDice() )
*/

/*Logical AND(&&) & OR(||) operators example
AND(&&)
let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution()
}

Function showSolution() {
  console.log("Showing the solution..."
}
OR(||)
let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie()
}
function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
}
 */

// blackjack example
let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el");
let player = {
  name: "Derick",
  chips: 200,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  document.querySelector(".new-card").style.opacity = 1;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!";
    document.querySelector(".new-card").style.opacity = 0.8;
  } else {
    message = "You're out of the game!";
    document.querySelector(".new-card").style.opacity = 0.8;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (sum < 21) {
    console.log("Drawing a new card");
    let card = getRandomCard();
    // add the new card to the sum variable
    sum += card;
    //push new card to cards array
    cards.push(card);
    //call startGame() function
    renderGame();
  }
}
/* only allow the player to get new card if alive and does not have blackjack.
let isAlive = false
let hasBlackJack = true

if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    // add the new card to the sum variable
    sum += card;
    //push new card to cards array
    cards.push(card);
    //call startGame() function
    renderGame();
} */
