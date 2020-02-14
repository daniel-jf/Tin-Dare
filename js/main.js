
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
    "Google pick up lines and let the other player choose one to put in bio",
    "Swipe 2 times to the right and once to the left",
],
challengeList: [
    "Upload a provocative picture on your tinder",
    "Swipe right for 10 seconds and if you match, message them you want to hook up",
    "Let the other read your last tinder conversation",

]
}


//VARIABLES 

const modal = document.getElementById("myModal");
const tButton = document.getElementById('t');
const dButton = document.getElementById('d');
const point = document.getElementById("did");
const noPoint = document.getElementById("nope");

const rModal = document.getElementById("myRModal");
const rButton = document.getElementById('r');
const rPoint = document.getElementById('rDid');
const rNoPoint = document.getElementById('rNope');

const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');

const scoreboard = {p1Points: '', p2Points: ''};

const player1 = 'Player 1';
const player2 = 'Player 2';

let turn = 1;


//FUNCTIONS FOR PLAYER POINTS
// Player 1 score 
p1.textContent = "Player 1: "+scoreboard.p1Points;


// Player 2 score
p2.textContent = "Player 2: "+scoreboard.p2Points;



// FUNCTIONS FOR BUTTONS

//For truth button
tButton.onclick = function() {
    modal.style.display = "block";
    document.getElementById('message').innerText = masterList.truthList[Math.floor(Math.random() * masterList.truthList.length)];
}

//For dare button
dButton.onclick = function() {
    modal.style.display = "block";
    document.getElementById('message').innerText = masterList.dareList[Math.floor(Math.random() * masterList.dareList.length)];

}

//For random button
rButton.onclick = function() {
    rModal.style.display = "block";
    if (Math.floor(Math.random() * 2)) {
       document.getElementById('rMessage').innerText = masterList.dareList[Math.floor(Math.random() * masterList.dareList.length)];
    } else {
    document.getElementById('rMessage').innerText = masterList.challengeList[Math.floor(Math.random() * masterList.challengeList.length)];
    }
}

//For did it button
point.onclick = function() {
    if (turn == 1){
    scoreboard.p1Points++;

    p1.textContent = `Player 1: ${ scoreboard.p1Points }`
    modal.style.display = "none";

    } else {
    scoreboard.p2Points++;
    p2.textContent = ` Player 2: ${scoreboard.p2Points} `
    }
  
    modal.style.display = "none";
    turn *= -1;

    if (scoreboard.p1Points == 10) {
        alert("Congrats! "+ player1 + " won!")
    } else if (scoreboard.p2Points == 10) {
        alert("Congrats! "+ player2 + " won!")
    }
}

//For nope button
noPoint.onclick = function() {
    modal.style.display = "none";
    turn *= -1;
}

//For random did it button
rPoint.onclick = function() {
    if (turn == 1 ){
    scoreboard.p1Points += 2;
    p1.textContent = `Player 1: ${ scoreboard.p1Points }`
    modal.style.display = "none";

    } else {
    scoreboard.p2Points += 2;
    p2.textContent = ` Player 2: ${scoreboard.p2Points} `
    }
  
    rModal.style.display = "none";
    turn *= -1;

    if (scoreboard.p1Points == 10) {
        alert("Congrats! "+ player1 + " won!")
    } else if (scoreboard.p2Points == 10) {
        alert("Congrats! "+ player2 + " won!")
    }
}


//For random nope button
rNoPoint.onclick = function() {
    rModal.style.display = "none";
}


// create a function for random & did it gives 2 points and returns to game page 
