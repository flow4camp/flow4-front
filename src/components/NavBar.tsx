import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import MyPage from "../pages/MyPage";
import Battle from "../pages/Battle";

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
    <BrowserRouter>
      <div style={styles.tabContent}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      <div style={styles.container}>
        <div style={styles.tabContainer}>
          <Link
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
              style={{ width: "30px" }}
              alt="Home"
            />
          </Link>
          <Link
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
              style={{ width: "30px" }}
              alt="Battle"
            />
          </Link>
          <Link
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
              style={{ width: "30px" }}
              alt="Store"
            />
          </Link>
          <Link
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
              style={{ width: "30px" }}
              alt="My Page"
            />
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
interface Styles {
  container: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tabItem: React.CSSProperties;
  tabContent: React.CSSProperties;
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
    backgroundColor: "#f0f0f0",
    padding: "16px",
  },
  tabItem: {
    textDecoration: "none",
    color: "#333",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  tabContent: {
    marginTop: "16px",
    padding: "16px",
  },
};

export default NavBar;
