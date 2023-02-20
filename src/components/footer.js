import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-grey min-h-[80px] text-[15px] uppercase">
      <div className='container mx-auto flex flex-row'>
        <div className='w-1/2 justify-center'>
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
