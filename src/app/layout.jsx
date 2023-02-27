import React from 'react';
import Header from "@/components/Header/header.jsx";
import Footer from "@/components/Footer/footer.jsx";
import "src/app/globals.css";

export default function RootLayout({ children }) {
  return (

<html>
  <body>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  </body>
</html>

  );
}