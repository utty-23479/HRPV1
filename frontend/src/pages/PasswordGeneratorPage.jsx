import { PasswordGenerator } from "../components/PasswordGenerator";
// import "../assets/css/PasswordGenerator.css";

function PasswordGeneratorPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <PasswordGenerator></PasswordGenerator>
        </div>
      </main>
    </>
  );
}

export default PasswordGeneratorPage;
