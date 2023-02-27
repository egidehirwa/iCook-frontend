"use client";

import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button
          className="fixed bottom-0 right-0 mb-6 mr-6 p-4 bg-red text-black rounded-full shadow-lg hover:bg-grey"
          onClick={handleClick}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
