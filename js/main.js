//console.log("You got this, don't worry");



const masterList= {
// make the array for truths
truthList: [
    'Have you ever ghosted someone on tinder?',
    'Worst tinder date in detail',
    'Have you ever hooked up with a tinder date',
    'Do you take tinder seriously? Why or why not?',
    'Message your last tinder match in deatil why your last relationship didn not work',
    'Message a tinder match with the first letter O your biggest insecurity',
    'Describe in detail what your type is',
    'Admit your biggest mistake to your opponent and a match on tinder',
    'Admit why you would not date youself and that most people do not learn until they date you',
    'Explain why you chose each picture on your profile and who you are hoping to attract',
    'Read your last 3 messages. Did you repond to them?'

],
// make the array for dares
dareList: [
    "Swipe right on the next 5 people",
    "Let the other player swipe the next 10 people",
    "Let the other player choose a pick-up line and send it to your last match",
    "Message your last match that you want to meet their family",
    "Give your number to your last 5 matches",
    "Go to one of your matches' instagram and like the last 10 posts",
    "Message any 5 of your matches saying 'asking why they slept with your ex?'",
    "Ask your last match if they will go on a date with you",
    "Change your picture on tinder to an embarrassing one",
    "Message 3 matches saying you only made a tinder to piss off your boyfriend",
    "Swipe right for the next 30 seconds and if they message, you have to hold a conversation with them",
    "Google pick up lines and let the other player choose one to put in bio"
]
}

class Game {
    constructor(playGame){
        this.playedList = [];
        this.player1Points = 0;
        this.player2Points = 0;
        this.rounds = 1;
    };
};


var modal = document.getElementById("myModal");
var tButton = document.getElementById('t');
var dButton = document.getElementById('d');
var rButton = document.getElementById('r');
var point = document.getElementById("did");
var noPoint = document.getElementById("nope");


tButton.onclick = function() {
    modal.style.display = "block";
    document.getElementById('t').showModal(masterList.truthList[Math.floor(Math.random() * masterList.truthList.length)]);
}

dButton.onclick = function() {
    modal.style.display = "block";
}

rButton.onclick = function() {
    modal.style.display = "block";
}

point.onclick = function() {
    modal.style.display = "none";
}

noPoint.onclick = function() {
    modal.style.display = "none";
}

// FUNCTIONS 




// make the functions to call the Truths in random upon clicking the truth button
// function randomTruth() {
//          alert(masterList.truthList[Math.floor(Math.random() * masterList.truthList.length)]);
//     }
//     const tButton = document.getElementById('t');
//           tButton.addEventListener("click", randomTruth);


// // make the functions to call the Dares in random upon clicking the dare button
// function randomDare() {
//     alert(masterList.dareList[Math.floor(Math.random() * masterList.dareList.length)]);
// }
//     const dButton = document.getElementById('d');
//           dButton.addEventListener("click", randomDare);


// // make the function to call a random in random upon clicking the random button
// function random() {
//     if (Math.floor(Math.random() * 2)) {
//         alert(masterList.dareList[Math.floor(Math.random() * masterList.dareList.length)]);
//     } else {
//         alert(masterList.truthList[Math.floor(Math.random() * masterList.truthList.length)]);
//     }
// }
//     const rButton = document.getElementById('r');
//           rButton.addEventListener("click", random);


// // create a function for player turns 
function makeTurn(player1, player2) {
   
}

// create a function to pop up the truth, dare, or random 




// create a function for the did it button to give the point and return to game page

// create a function for nope button to give no points and return to game page

// create a function for random & did it gives 2 points and returns to game page 

// make a function to show points earned

// create a function that will show when a player wins