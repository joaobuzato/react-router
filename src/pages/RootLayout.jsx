import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main className={styles.content}>
        <Outlet></Outlet>
      </main>
    </>
  );
}
