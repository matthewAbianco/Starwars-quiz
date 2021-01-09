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