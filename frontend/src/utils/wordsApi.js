export const get2RandomWords = async (count = 2) => {
  try {
    const response = await fetch(
      `https://random-word-api.herokuapp.com/word?length=7&number=${count * 2}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: `No words returned ${error}` };
  }
};
