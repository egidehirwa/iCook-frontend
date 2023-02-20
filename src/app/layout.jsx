<<<<<<< HEAD
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
=======
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
>>>>>>> 2b5d604a430f1cc4b1685cd0bce086f4d4f50501
  );
}
