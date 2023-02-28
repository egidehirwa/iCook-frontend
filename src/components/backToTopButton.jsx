// "use client";
// import React, { useState, useEffect } from "react";

// const BackToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 200) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     });
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {showButton && (
//         <button
//           className="fixed bottom-0 right-0 mb-6 mr-6 p-4 bg-red"
//           onClick={handleClick}
//         >
//           Back to Top
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTopButton;

"use client";
import { useState } from "react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 ${
        showButton ? "block" : "hidden"
      }`}
    >
      Top
    </button>
  );
}
