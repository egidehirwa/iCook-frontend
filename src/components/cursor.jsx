// 'use client';

// import { useState, useEffect } from 'react';
// import Cursor from "src/public/cursor.svg";
// import Image from "next/image";


// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

// useEffect(() => {
//     const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", setFromEvent);
//     return () => window.removeEventListener("mousemove", setFromEvent);
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 z-50 w-16 h-16 pointer-events-none"
//       style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
//     >
//       <Image src={Cursor} alt="Custom Cursor" className="w-full h-full object-contain" />
//     </div>
//   );
// };

// export default CustomCursor;

// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Cursor from "src/public/cursor.svg";
// // import CursorHover from "src/public/cursor.svg"; // New hover image import
// // import Image from "next/image";


// // const CustomCursor = () => {
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [hover, setHover] = useState(false); // New hover state

// //   useEffect(() => {
// //     const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
// //     window.addEventListener("mousemove", setFromEvent);
// //     return () => window.removeEventListener("mousemove", setFromEvent);
// //   }, []);

// //   const handleMouseEnter = () => {
// //     setHover(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setHover(false);
// //   };

// //   return (
// //     <div
// //       className="fixed top-0 left-0 z-50 w-16 h-16 pointer-events-none"
// //       style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
// //     >
// //       <Image
// //         src={hover ? CursorHover : Cursor} // Use different image based on hover state
// //         alt="Custom Cursor"
// //         className="w-full h-full object-contain"
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       />
// //     </div>
// //   );
// // };

// // export default CustomCursor;
 