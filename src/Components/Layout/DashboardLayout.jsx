// src/layout/DashboardLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Navbar/DashboardNavbar";
import Sidebar from "../Navbar/Sidebar";
import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const setIsLoggedIn = (value) => {
    localStorage.setItem("isLoggedIn", value);
  }

  return (
    <div className={styles.container}>
      <DashboardNavbar onToggle={toggleSidebar} />
      <div className={styles.main}>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} setIsLoggedIn={setIsLoggedIn} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
