import Image from "next/image";
import Link from "next/link";
import logo from "/src/public/icook-logo.png";

const Header = () => {
  return (
    <div className="container lg:mx-auto lg:h-[150px] text-[18px] flex lg:flex-row lg:justify-between lg:items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="iCook Logo"
          className="w-[220px] pt-12"
        />
      </Link>
      <div className="flex flex-col lg:flex-row justify-around lg:w-1/2 pt-6 border-gray-600">
        <button className="bg-yellow shadow-md px-8 min-h-[40px] items-center rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600">
          <Link href="/search-result" className="">
            Recipe by category
          </Link>
        </button>
        <button className="bg-yellow shadow-md px-8 min-h-[40px] items-center rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600">
          <Link href="/randomRecipe" className="">
            Random Recipe
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
