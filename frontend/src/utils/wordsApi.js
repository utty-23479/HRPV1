export const get2RandomWords = async (count = 2) => {
  try {
    const response = await fetch(
      `https://random-word-api.herokuapp.com/word?number=${count}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: `No words returned ${error}` };
  }
};
