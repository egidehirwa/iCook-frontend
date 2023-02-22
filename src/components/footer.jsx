import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey h-[80px] text-[15px] uppercase">
<<<<<<< HEAD
      <div className='container mx-auto flex flex-col lg:flex-row align-center pt-5'>
        <div className='lg:w-1/2 flex'>
=======
      <div className="container mx-auto flex flex-row items-center pt-5">
        <div className="w-1/2 flex">
>>>>>>> 3e2ef6e73e3730f3b6ad839270a711ab7e0ddac3
          <p>©2023 - ICook. All rights reserved.</p>
        </div>
        <div className="lg:w-1/2 flex justify-around">
          <Link href="/privacy policy">Privacy policy</Link>
          <Link href="/about">About us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
