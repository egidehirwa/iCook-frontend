'use client';

import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const links = document.querySelectorAll('a, button');

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('hovered');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
      });
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach((link) => {
        link.removeEventListener('mouseover', () => {
          cursor.classList.add('hovered');
        });
        link.removeEventListener('mouseleave', () => {
          cursor.classList.remove('hovered');
        });
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ left: position.x, top: position.y }}></div>
    </>
  );
};

export default CustomCursor;

