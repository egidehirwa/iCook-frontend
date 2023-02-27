// 'use client';

// import { useState, useEffect } from 'react';
// import cursor from "src/public/cursor.svg";
// import Image from "next/image";


// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 z-50 w-16 h-16 pointer-events-none"
//       style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
//     >
//       {/* <Image src="src/public/cursor.svg" alt="Custom cursor" className="w-full h-full object-contain" /> */}
//       <Image src={cursor} alt="custom cursor"/>
//     </div>
//   );
// };

// export default CustomCursor;

