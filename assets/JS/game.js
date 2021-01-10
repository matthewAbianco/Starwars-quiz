// HTML ELEMENT AND CLASS REFERENCES 
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
// HTML ELEMENT AND CLASS REFERENCE END 

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


// QUIZ QUESTIONS 
let questions = [
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
// QUIZ QUESTONS END

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;

// START GAME BUTTON 
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};
// START GAME BUTTON END

// GETTING A NEW QUESTION 
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
// GOES TO THE FINAL PAGE AFTER THE ABOVE FORMULA ENDS //
        return window.location.assign('./end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};


// CLICK EVENT LISTENER ON QUESTION CHOICES
choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
        
      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

// ADDS COLOR TO ANSWER AND GOES TO NEXT QUESTION AFTER TIMER AS COMPLETED //
      selectedChoice.parentElement.classList.add(classToApply);
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });
// CLICK EVENT LISTENER ON QUESTION CHOICES
// GETTING A NEW QUESTION END 
startGame();