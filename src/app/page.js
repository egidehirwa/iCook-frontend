import Image from "next/image";
import { Poppins } from "@next/font/google";
import { Rubik } from "@next/font/google";
import styles from "./page.module.css";

const poppins = Poppins({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>This is the Nextjs app</div>
    </main>
  );
}
