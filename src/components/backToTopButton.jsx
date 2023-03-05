"use client";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-0 right-0 mb-6 mr-6 p-4 bg-yellow text-black shadow-md rounded-xl hover:bg-lightgrey hover:border-gray-600 ${
        showButton ? "block" : "hidden"
      }`}
    >
      Back to Top
    </button>
  );
}

