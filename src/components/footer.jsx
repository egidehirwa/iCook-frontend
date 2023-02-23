import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey min-h-[80px] text-[15px] uppercase">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className='lg:w-1/2 flex py-6 justify-center lg:justify-start'>
          <p>©2023 - ICook. All rights reserved.</p>
        </div>
        <div className="lg:w-1/2 pb-4 lg:py-6 flex justify-around">
          <Link href="/privacy policy">Privacy policy</Link>
          <Link href="/about">About us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
