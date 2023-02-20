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
        </div>
        <Ingredient />
      </div>
      <div className=" flex self-center w-full bg-orange-200">
        <h1>Footer</h1>
      </div>
    </main>
  );
}
