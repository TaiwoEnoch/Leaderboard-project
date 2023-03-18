const sendScores = async (url, data) => {
  const SCORES = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return SCORES;
};

export default sendScores;