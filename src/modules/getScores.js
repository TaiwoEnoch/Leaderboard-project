export const baseAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aOvKqYy7QCs3ip56vsm2/scores/';

const getScores = async () => {
  const scoreList = await fetch(baseAPI);
  return scoreList;
};

export default getScores;