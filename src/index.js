import './index.css';
import displayScores, { scoresTable } from './modules/displayScores';
import getScores from './modules/getScores';
import { sendScores } from './modules/addScores';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aOvKqYy7QCs3ip56vsm2/scores/';

const addScoreForm = document.getElementById('addScore');

document.querySelector('#refreshBtn').addEventListener('click', () => {
scoresTable.innerHTML = '';
  getScores()
    .then((res) => res.json())
    .then((data) => displayScores(data.result));
});

const getInputs = (e) => {
  e.preventDefault();

  const user = document.getElementById('name').value;
  const score = document.getElementById('scores').value;
  const data = { user, score };
  sendScores(url, data);
  addScoreForm.reset();
}

addScoreForm.addEventListener('submit', getInputs);