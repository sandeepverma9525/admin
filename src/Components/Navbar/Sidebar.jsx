
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome, FaBell, FaDownload, FaFileInvoice, FaUsers, FaWallet,
  FaKey, FaDollarSign, FaShareAlt, FaVideo, FaLifeRing,
  FaCreditCard, FaCog, FaSignOutAlt,FaChartBar,FaCheckCircle,FaBan,FaNetworkWired,FaSitemap,FaPercent,FaPaperPlane,FaUserShield,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";


function Sidebar({ isOpen, onClose, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/", { replace: true }); 
    window.location.reload();
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    // { name: "Analytics", icon: <FaChartBar  />, path: "/analytics" },
    // { name: "Reports", icon: <FaDownload   />, path: "/reports" },
    { name: "Affiliates", icon: <FaUsers    />, path: "/affiliates" },
    { name: "KYC Applications", icon: <FaCheckCircle  />, path: "/kycapplications" },
    { name: "Applications", icon: <FaUsers  />, path: "/applications" },
    { name: "Blocked Affiliates", icon: <FaBan />, path: "/blockedaffliates" },
    // { name: "Network", icon: <FaNetworkWired />, path: "/network" },
    { name: "Affiliate Tree", icon: <FaSitemap />, path: "/affiliatetree" },
    { name: "Finance", icon: <FaDollarSign />, path: "/finance" },
    { name: "Bonus Structure", icon: <FaPercent />, path: "/bonusstructure" },
    { name: "Withdrawals", icon: <FaPaperPlane />, path: "/withdrawals" },
    { name: "Epin", icon: <FaKey />, path: "/epin" },
    { name: "Wallets", icon: <FaWallet />, path: "/wallets" },
    { name: "Announcements", icon: <FaBell />, path: "/announcements" },
    { name: "Download Center", icon: <FaDownload />, path: "/downloads" },
    { name: "Support Tickets", icon: <FaLifeRing />, path: "/support" },
    { name: "Meetings", icon: <FaVideo />, path: "/meetings" },
    // { name: "Profile Settings", icon: <FaCog />, path: "/profile" },
    // { name: "Permissions", icon: <FaUserShield />, path: "/permissions" },
    { name: "ProfileSetting", icon: <FaUserShield />, path: "/profilesetting" },

    
    
    

    
    // { name: "My Invoices", icon: <FaFileInvoice />, path: "/invoices" },
    // { name: "My Team", icon: <FaUsers />, path: "/team" },
    // { name: "Earning Wallet", icon: <FaWallet />, path: "/wallet" },
    // { name: "My Payouts", icon: <FaDollarSign />, path: "/payouts" },
    // { name: "My Referrals", icon: <FaShareAlt />, path: "/referrals" },
    // { name: "Subscriptions", icon: <FaCreditCard />, path: "/subscriptions" },
  ];

  return (
    <div>
    {/* // <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`} style={{height:'1000%'}}> */}
    {/* ! baad me ye change  */}
    <div
  className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
  style={{ height: isOpen ? '100%' : '0',
    //  background: isOpen ? '#0c1a2b' : '0', 
    // overflow: isOpen ? 'scroll-y' : '0' 
    }}
>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index} >
            <Link to={item.path} 
            onClick={() => {
              console.log("clicked", item.path)
              if (onClose) onClose(); // 🔥 Close sidebar on link click
            }}
            
            // className={styles.link}
            className={`${styles.link} ${location.pathname === item.path ? styles.active : ""}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
        <li onClick={handleLogout} className={`${styles.link} ${styles.logout}`}>
          <FaSignOutAlt />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
