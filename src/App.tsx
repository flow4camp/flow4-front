import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import MyPage from "./pages/MyPage";
import Battle from "./pages/Battle";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import EditCharacter from "./pages/EditCharacter";
import EditMetroLine from "./pages/EditMetroLine";
import StaminaStore from "./pages/StaminaStore";
import BattleGround from "./pages/BattleGround";

import "./App.css";
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit-character" element={<EditCharacter />} />
          <Route path="/edit-metroline" element={<EditMetroLine />} />
          <Route path="/stamina-store" element={<StaminaStore />} />
          <Route path="/battle-ground" element={<BattleGround />} />
        </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
