
import { useState } from "react";
import styles from "./DashboardNavbar.module.css";
import logo from "./logo1.png";

function DashboardNavbar({ onToggle }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoimg} /></div>
      <div className={styles.toggle} onClick={onToggle}>
        ☰
      </div>
    </nav>
  );
}

export default DashboardNavbar;
