// QUIZ AND TIMER START WHEN THE "START" BUTTON IS CLICKED 
//ONE QUESTION LEADS TO THE NEXT aka NOT ALL QUESTIONS PRESENTED AT ONCE
//WRONG ANSWERS REMOVE TIME FROM THE CLOCK
//THE QUIZ ENDS WHEN ALL QUESTIONS ARE ANSWERED
//WHEN THE QUIZ ENDS USERS CAN SAVE THEIR INITIALS AND SCORE







// COUNTDOWN TIMER FORMULA 
const startingMinutes = 4;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time --;
}
// COUNTDOWN FROMULA END

{
    question: "What Planet is Chewbacca from?",
    choice1: "Kashyyyk",
    choice2: "Naboo",
    choice3: "Tatooine",
    choice4: "Corusant",
    answer: 1
},
{
    question: "What color is Lord Vader's Lightsaber?",
    choice1: "Blue",
    choice2: "Yellow",
    choice3: "Purple",
    choice4: "Red",
    answer: 4
},
{
    question: "Who is Lukes father?",
    choice1: "Mace Windu",
    choice2: "R2-D2",
    choice3: "Lord Vader",
    choice4: "Emperor Palpatine",
    answer: 3
},
{
    question:   "What doesn't Anikin Skywalker like?",
    choice1: "Sand",
    choice2: "Children",
    choice3: "Tomatoes",
    choice4: "Cats",
    answer: 1
},
{
    question: "What is the best movie in the series?",
    choice1: "A New Hope",
    choice2: "The Empire Strikes Back",
    choice3: "Attack Of the Clones",
    choice4: "Star Wars Holiday Special",
    answer: 2
},
{
    question: "Are the new Star Wars movies Worth Watching?",
    choice1: "Yes",
    choice2: "Some",
    choice3: "No",
    choice4: "Absolutely Not",
    answer: 4
},
{
    question: "What is the name of Han Solo's ship?",
    choice1: "Ebon Hawk",
    choice2: "Century Eagle",
    choice3: "Millenium Falcon",
    choice4: "Decade Osprey",
    answer: 3
},
{
    question: "Who does Anikin fall in love with ?",
    choice1: "Scarlett Johansson",
    choice2: "Princess Padme",
    choice3: "Yoda",
    choice4: "C3-P0",
    answer: 2
},
{
    question: "What did Admiral Akbar say upon arrival at the second Death Star?",
    choice1: "Get me a gun!",
    choice2: "It's a trap!",
    choice3: "Search and destroy!",
    choice4: "For the Rebellion!",
    answer: 2
},
{
    question: "Who Wrote the Star Wars movies?",
    choice1: "Alfred Hitchcock",
    choice2: "Hugh Hefner",
    choice3: "George Lucas",
    choice4: "Tina Turner",
    answer: 3
},
];