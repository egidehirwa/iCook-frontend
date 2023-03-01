import Image from "next/image";
import Link from "next/link";
import test from "src/public/test.jpeg";
import icon_hat from "src/public/icon_hat.svg";
import icon_clock from "src/public/icon_clock.svg";
import icon_fork from "src/public/icon_fork.svg";

const SearchResult = () => {
  return (
    <div className="container mx-auto lg:py-[40px]">
      <h3 className="text-2xl">Search result: Tiramisu</h3>
      <div className="flex flex-col lg:flex-row py-[32px]">
        <Image src={test} alt="test photo" className="lg:w-1/3" />
        <div className="bg-white shadow-md pb-8 lg:w-1/2 lg:ml-[-50px] lg:my-[30px] relative">
          <div className="flex flex-col pl-24 text-[16px]">
            <h2 className="text-3xl py-[24px]">Classic Tiramisu</h2>
            <div className="flex flex-row">
              <Image src={icon_hat} alt="icon_hat" className="" />
              <p className="pt-2 pl-6">Cooking Time: 15 minutes</p>
            </div>
            <div className="flex flex-row">
              <Image src={icon_clock} alt="icon_clock" className="" />
              <p className="pt-2 pl-6">Prepping Time: 20 minutes</p>
            </div>
            <div className="flex flex-row">
              <Image src={icon_fork} alt="icon_fork" className="" />
              <p className="pt-2 pl-6">Serving for: 2 persons</p>
            </div>
            <button className="bg-grey w-[150px] min-h-[40px] absolute right-12 shadow-md bottom-12 rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="/recipies/recipe" className="">
                View recipe
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
