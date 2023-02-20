import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-grey h-[80px] text-[15px] uppercase">
      <div className='container mx-auto flex flex-row items-center pt-5'>
        <div className='w-1/2 flex'>
          <p>©2023 - ICook. All rights reserved.</p>
        </div>
        <div className="w-1/2 flex justify-around">
          <Link href="/privacy policy">Privacy policy</Link>
          <Link href="/about">About us</Link> 
        </div>
      </div>

    </div>
  );
};

export default Footer;
