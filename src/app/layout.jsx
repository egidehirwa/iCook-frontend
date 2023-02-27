import React from 'react';
import Header from "src/components/Header/header.jsx";
import Footer from "src/components/Footer/footer.jsx";
import BackToTopButton from "src/components/backToTop.jsx"
import "src/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-lightgrey'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <BackToTopButton />
      <Footer />
      </div>
  );
}
