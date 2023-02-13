import Image from "next/image";
import { Rubik, Inter } from "@next/font/google";
import styles from "./page.module.css";

// Testing font variables with Tailwind

/* const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
}); */

const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>This is the Nextjs app</div>
    </main>
  );
}
