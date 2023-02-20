// import { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const GoToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Add an empty dependency array to only execute this code on the client-side.

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button
//       className={`fixed bottom-5 right-5 z-50 p-2 rounded-full ${
//         showButton ? 'block' : 'hidden'
//       }`}
//       onClick={handleClick}
//     >
//       <FaArrowUp />
//       <span className="ml-2">Go to Top</span>
//     </button>
//   );
// };

// export default GoToTopButton;
