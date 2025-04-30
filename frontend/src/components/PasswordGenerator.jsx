// import { usePasswordGenerator } from "../hooks/usePasswordGenerator";
import { get2RandomWords } from "../utils/wordsApi";
import { useEffect } from "react";

export const PasswordGenerator = () => {
  // const { password, loading, error, generate } = usePasswordGenerator();

  useEffect(() => {
    console.log(get2RandomWords());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50">
        Generate Password
      </button>
      {/* {error && <p className="mt-4 text-red-500">{error}</p>} */}
      {/* {password && !error && ( */}
      {/*   <p className="mt-4 text-lg text-gray-700">Contraseña: {password}</p> */}
      {/* )} */}
    </div>
  );
};
