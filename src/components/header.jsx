import Image from "next/image";
import Link from "next/link";
import logo from "/src/public/icook-logo.png";

const Header = () => {
  return (
    <div className="container mx-auto h-[150px] text-[18px] lg:flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="iCook Logo"
          className="w-[250px] pt-12 md:items-center"
        />
      </Link>
      <div className="flex justify-around lg:w-1/2 border-b-[1px] pb-6 border-gray-600 space-x-1">
        <button className="bg-yellow px-8 min-h-[50px] items-center rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600">
          <Link href="/recipe-by-category" className="">
            Recipe by category
          </Link>
        </button>
        <button className="bg-yellow px-8 items-center rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600">
          <Link href="/random-recipe" className="">
            Random Recipe
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
