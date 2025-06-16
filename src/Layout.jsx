import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaList,
  FaShoppingCart,
  FaBell,
  FaCog,
} from "react-icons/fa";

const Layout = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Users", icon: <FaUsers />, path: "/users" },
    { name: "Products", icon: <FaBoxOpen />, path: "/products" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { name: "Notifications", icon: <FaBell />, path: "/notifications" },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.title}>
        <span role="img" aria-label="logo">🟡</span> <span>GoldTrade</span>
      </div>
      <ul style={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              <span style={styles.icon}>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS
const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#000",
    color: "#fff",
    height: "100vh",
    padding: "10px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px",
    marginBottom: "20px",
    color: "#FFD700",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  menuList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  link: {
    padding: "12px 10px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    color: "#fff",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  activeLink: {
    backgroundColor: "#1a1a1a",
    color: "#FFD700",
  },
  icon: {
    fontSize: "16px",
  },
};

export default Layout;
