import React from "react";
import Header from "src/components/header.jsx";
import Footer from "src/components/footer.jsx";
import BackToTopButton from "src/components/backToTopButton.jsx";
import "src/app/globals.css";
import CustomCursor from "src/components/cursor.jsx"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <BackToTopButton />
          <CustomCursor />
          <Footer />
        </div>
      </body>
    </html>
  );
}
