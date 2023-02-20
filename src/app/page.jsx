import SearchBar from "@/components/searchbar";
import { Rubik, Inter } from "@next/font/google";
import Ingredient from "@/components/ingredient";



// Testing font variables with Tailwind

/* const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
}); */

const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });




export default function Home() {
  return (
<<<<<<< HEAD
    <main className="justify-center flex flex-col ">
      <div className=" w-full flex  bg-orange-600 ">
        <h1>Header</h1>
      </div>
      <div className=" text-center bg-orange-100">
        <div>
          <h1>What is in your fridge</h1>
        </div>
        <div className="flex justify-center">
          <SearchBar />
          <button className="ml-2 pl-2 pr-2 rounded-md bg-red-700 text-white">
            Search for recipe
          </button>
=======
    <main className="justify-center flex flex-col h-screen ">
      <div className=" w-full flex  bg-orange-600 "><h1>Header</h1></div>
      <div className=" text-center bg-orange-100 h-4/5 flex flex-col justify-center">
        <div className="pb-8">
          <h1 className="text-5xl">What is in your fridge ?</h1>
        </div>
        <div className="flex justify-center ">
          <SearchBar/>
          <button className="ml-2 pl-2 pr-2 rounded-md bg-red-700 border-2 border-red-700 text-white transition-colors duration-700 transform hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700">Search for recipe</button>

>>>>>>> 2b5d604a430f1cc4b1685cd0bce086f4d4f50501
        </div>
        <Ingredient />
      </div>
      <div className=" flex self-center w-full bg-orange-200">
        <h1>Footer</h1>
      </div>
    </main>
  );
}
