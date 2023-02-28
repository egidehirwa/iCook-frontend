import React from "react";
import Header from "src/components/header.jsx";
import Footer from "src/components/footer.jsx";
import BackToTopButton from "src/components/backToTopButton.jsx";
import Cursor from "src/components/cursor.jsx"
import "src/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Cursor />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
