import { get2RandomWords } from "../utils/wordsApi";
import { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const getWordsApiData = async () => {
    const data = await get2RandomWords();
    createPassword(data);
  };

  const createPassword = (wordsArray) => {
    let word = "";
    for (let i = 0; i < wordsArray.length; i++) {
      const capitalizedWord =
        wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
      word += capitalizedWord;
    }

    const number = Math.floor(100 + Math.random() * 900);
    word += `#${number}`;

    setPassword(word);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={getWordsApiData}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        Generate Password
      </button>
      <h1 className="mt-10 text-4xl">{password}</h1>
    </div>
  );
};
