//console.log("You got this, don't worry");

// make the array for truths
const truthList = [
    'Have you ever ghosted someone on tinder?',
    'Worst tinder date in detail',
    'Have you ever hooked up with a tinder date',
    'Do you take tinder seriously? Why or why not?',
    'Message your last tinder match in deatil why your last relationship didn not work',
    'Message a tinder match with the first letter O your biggest insecurity',
    'Describe in detail what your type is',
    'Admit your biggest mistake to your opponent and a match on tinder',
    'Admit why you would not date youself and that most people do not learn until they date you',
    'Explain why you chose each picture on your profile and who you are hoping to attract'
]

// make the array for dares
const dareList = [
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
    "Swipe right for the next 30 seconds and if they message, you have to hold a conversation with them"
]

// FUNCTIONS 

// make the functions to call the Truths in random
function randomTruth() {
    for (let tListIdx = truthList.length -1; tListIdx >0; tListIdx--){
    return truthList[Math.floor(Math.random() * truthList.length)]
    };
}
randomTruth();
console.log(randomTruth(truthList));

// make the functions to call the Dares in random
function randomDare() {
    for (let dListIdx = dareList.length +1; dListIdx > 0; dListIdx--){
      return dareList[Math.floor(Math.random() * dareList.length)]
    };
}
randomDare();
console.log(randomDare(dareList));


// make a function that will choose a random truth or dare


// manipulate teh DOM for user interactions

    // random button
    // truth button
    // dare button
    // did it button
    // nope button


// create a function that will show when a player wins

// make a function to show points earned 
