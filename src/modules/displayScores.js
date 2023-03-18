export const scoresTable = document.querySelector('.list-container');

const displayScores = (data) => {
  data.forEach((datum) => {
    scoresTable.innerHTML += `
      <li class="list-element">
        <span>${datum.user} : ${datum.score}</span>
      </li>
    `;
  });
};

export default displayScores;