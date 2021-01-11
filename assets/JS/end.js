const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 3;

// TAKES USER QUIZ SCORE AND MAKES IT THE FINAL SCORE 
finalScore.innerText = mostRecentScore;


// KEEP SAVE SCORE BUTTON DISABLED UNTIL A STRING IS ENTERED INTO THE "USERNAME" BOX
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
// KEEP SAVE SCORE BUTTON DISABLED UNTIL A STRING IS ENTERED INTO THE "USERNAME" BOX END


// SAVE HIGH SCORE TO LOCAL STORAGE 
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(3);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
// SAVE HIGH SCORE TO LOCAL STORAGE END