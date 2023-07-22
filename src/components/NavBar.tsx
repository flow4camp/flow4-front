// NavBar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activeTab, setActiveTab] = useState("/home");
  const tabIcons = {
    "/home": {
      active: "/icons/home-active.svg",
      nonActive: "/icons/home.svg",
    },
    "/battle": {
      active: "/icons/dice-alt-active.svg",
      nonActive: "/icons/dice-alt.svg",
    },
    "/store": {
      active: "/icons/shop-active.svg",
      nonActive: "/icons/shop.svg",
    },
    "/mypage": {
      active: "/icons/user-active.svg",
      nonActive: "/icons/user.svg",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabContainer}>
        <NavLink
          to="/home"
          style={styles.tabItem}
          onClick={() => setActiveTab("/home")}
        >
          <img
            src={
              activeTab === "/home"
                ? tabIcons["/home"].active
                : tabIcons["/home"].nonActive
            }
            style={{ width: "25px" }}
            alt="Home"
          />
        </NavLink>
        <NavLink
          to="/battle"
          style={styles.tabItem}
          onClick={() => setActiveTab("/battle")}
        >
          <img
            src={
              activeTab === "/battle"
                ? tabIcons["/battle"].active
                : tabIcons["/battle"].nonActive
            }
            style={{ width: "25px" }}
            alt="Battle"
          />
        </NavLink>
        <NavLink
          to="/store"
          style={styles.tabItem}
          onClick={() => setActiveTab("/store")}
        >
          <img
            src={
              activeTab === "/store"
                ? tabIcons["/store"].active
                : tabIcons["/store"].nonActive
            }
            style={{ width: "25px" }}
            alt="Store"
          />
        </NavLink>
        <NavLink
          to="/mypage"
          style={styles.tabItem}
          onClick={() => setActiveTab("/mypage")}
        >
          <img
            src={
              activeTab === "/mypage"
                ? tabIcons["/mypage"].active
                : tabIcons["/mypage"].nonActive
            }
            style={{ width: "25px" }}
            alt="My Page"
          />
        </NavLink>
      </div>
    </div>
  );
}

interface Styles {
  container: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tabItem: React.CSSProperties;
}

const styles: Styles = {
  container: {
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: "16px",
  },
  tabItem: {
    textDecoration: "none",
    color: "#333",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default NavBar;
