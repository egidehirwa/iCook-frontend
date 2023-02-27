<<<<<<< HEAD
import SearchBar from "@/components/searchbar";
import { Rubik, Inter, Satisfy } from "@next/font/google";
import Ingredient from "@/components/ingredient";
import "src/app/globals.css";


// Testing font variables with Tailwind

/* const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
}); */

const rubik = Rubik({  subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

=======
import SearchBar from "@/components/HomePage/searchbar";
import { ReactDOM } from "react";
import TodoApp from "@/components/HomePage/ingredientApp";
>>>>>>> c60b9c171958476ab32029d2f0c04844d711d454

export default function Home() {
  return (
    <main className="justify-center flex flex-col h-screen ">
      <div className=" text-center bg-red-100 h-3/5 flex flex-col ">
        <div className="pb-8">
          <h1 className="font-satisfy text-7xl">What is in your fridge ?</h1>
        </div>
        <div className="flex justify-center ">
          <SearchBar />
          <button className="ml-2 pl-2 pr-2 rounded-md h-12 bg-red border-2 border-red text-white transition-colors transform hover:bg-white hover:text-red hover:border-2 hover:border-red">
            Search for recipe
          </button>
        </div>
        <div id="root"></div>
      </div>
    </main>
  );
}


