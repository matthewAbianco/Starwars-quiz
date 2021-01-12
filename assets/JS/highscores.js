// HTML ELEMENT AND CLASS REFERENCES 
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// HTML ELEMENT AND CLASS REFERENCES END

// STORES AND ADDS THE "li" ATTRIBUTE TO EACH NAME
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
  // STORES AND ADDS THE "li" ATTRIBUTE TO EACH NAME END