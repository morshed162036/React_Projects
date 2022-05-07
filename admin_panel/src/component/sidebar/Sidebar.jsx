import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">MT Studio</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <Link to={"/users"} style={{ textDecoration: "none" }}>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <InventoryIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditScoreIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color_option"></div>
        <div className="color_option"></div>
        {/* <div className="color_option"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
