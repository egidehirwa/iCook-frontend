import Image from "next/image";
import Link from "next/link";
import icon_hat from "src/public/icon_hat.svg";
import icon_clock from "src/public/icon_clock.svg";
import icon_fork from "src/public/icon_fork.svg";

const Recipe = ({ title, cookingTime, preppingTime, servingFor, image }) => {
  return (
    <div className="container flex flex-col md:flex-row py-[32px]">
      <Image
        src={image}
        width={500}
        height={450}
        alt="test photo"
        className=""
      />
      <div className="bg-white shadow-md pb-8 md:w-1/2 md:ml-[-50px] md:my-[30px] relative">
        <div className="flex flex-col text-base">
          <h2 className="text-3xl mx-8 py-[24px]">{title}</h2>
        </div>
        <div className="pl-24">
          <div className="flex flex-row">
            <Image src={icon_hat} alt="icon_hat" className="" />
            <p className="pt-2 pl-6">Cooking time : {cookingTime}</p>
          </div>
          <div className="flex flex-row">
            <Image src={icon_clock} alt="icon_clock" className="" />
            <p className="pt-2 pl-6">Prepping Time : {preppingTime}</p>
          </div>
          <div className="flex flex-row">
            <Image src={icon_fork} alt="icon_fork" className="" />
            <p className="pt-2 pl-6">Serving for : {servingFor}</p>
          </div>
          <div className="flex justify-start mt-4">
            <button className="bg-grey w-[150px] min-h-[40px] shadow-md rounded-xl hover:bg-white hover:border-[1px] hover:border-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="/recipies/recipe">View recipe</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
