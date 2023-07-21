import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import MyPage from "./pages/MyPage";
import Battle from "./pages/Battle";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
      <div className="App">
        <NavBar />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter> */}
      </div>
  );
}

export default App;
