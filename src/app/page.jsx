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

    <main className="justify-center flex flex-col h-screen ">
      <div className=" text-center bg-red-100 h-3/5 flex flex-col ">
        <div className="pb-8">
          <h1 className=" atext-7xl">What is in your fridge ?</h1>
        </div>
        <div className="flex justify-center ">
          <SearchBar/>
          <button className="ml-2 pl-2 pr-2 rounded-md bg-red-700 border-2 border-red-700 text-white transition-colors duration-700 transform hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700">Search for recipe</button>
        </div>
        <Ingredient />
      </div>
    </main>
  );
}
