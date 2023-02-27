import React from "react";
import Header from "src/components/header.jsx";
import Footer from "src/components/footer.jsx";
import "src/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-lightgrey">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
