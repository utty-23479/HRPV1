// import { get2RandomWords } from "../utils/wordsApi";
// import { useState, useRef } from "react";
//
// export const PasswordGenerator = () => {
//   const [passwords, setPasswords] = useState([]);
//   const selectRef = useRef();
//
//   const getWordsApiData = async () => {
//     const numberSelected = Number(selectRef.current.value);
//     const data = await get2RandomWords(numberSelected);
//     createPassword(data);
//   };
//
//   const getRandomNumber = () => Math.floor(100 + Math.random() * 900);
//
//   const createPassword = (wordsArray) => {
//     let word = "";
//     let cont = 0;
//     for (let i = 0; i < wordsArray.length; i++) {
//       const capitalizedWord =
//         wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
//       word += capitalizedWord;
//       cont++;
//       if (cont === 2) {
//         cont = 0;
//         word += `#${getRandomNumber()}`;
//         setPasswords((prev) => [...prev, word]);
//         word = "";
//       }
//     }
//     console.log(passwords);
//   };
//
//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       <h1 className="mb-5 text-4x1">Password Generator</h1>
//       <div className="w-full mb-5 max-w-sm min-w-[200px]">
//         <div className="relative">
//           <select
//             ref={selectRef}
//             className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
//           >
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//             <option value={5}>5</option>
//             <option value={6}>6</option>
//             <option value={7}>7</option>
//             <option value={8}>8</option>
//             <option value={9}>9</option>
//             <option value={10}>10</option>
//           </select>
//         </div>
//       </div>
//       <button
//         onClick={getWordsApiData}
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50"
//       >
//         Generate Password
//       </button>
//       {passwords.map((password, index) => (
//         <h1 key={`${index} + ${password}`}>{password}</h1>
//       ))}
//       {/* <h1 className="mt-10 text-4xl">{passwords}</h1> */}
//     </div>
//   );
// };

import { get2RandomWords } from "../utils/wordsApi";
import { useState, useRef } from "react";

export const PasswordGenerator = () => {
  const [passwords, setPasswords] = useState([]);
  const selectRef = useRef();

  const getWordsApiData = async () => {
    const numberSelected = Number(selectRef.current.value);
    const data = await get2RandomWords(numberSelected);
    createPassword(data);
  };

  const getRandomNumber = () => Math.floor(100 + Math.random() * 900);

  const createPassword = (wordsArray) => {
    let word = "";
    let cont = 0;
    const newPasswords = [];

    for (let i = 0; i < wordsArray.length; i++) {
      const capitalizedWord =
        wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
      word += capitalizedWord;
      cont++;

      if (cont === 2) {
        cont = 0;
        word += `#${getRandomNumber()}`;
        newPasswords.push(word);
        word = "";
      }
    }

    // Actualiza el estado una sola vez
    setPasswords(newPasswords);
    console.log(newPasswords);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="mb-5 text-4xl font-bold">Password Generator</h1>

      <div className="w-full mb-5 max-w-sm min-w-[200px]">
        <div className="relative">
          <select
            ref={selectRef}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={getWordsApiData}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        Generate Password
      </button>

      <div className="mt-6 space-y-2">
        {passwords.map((password, index) => (
          <h1 key={`${index}-${password}`} className="text-lg font-mono">
            {password}
          </h1>
        ))}
      </div>
    </div>
  );
};
