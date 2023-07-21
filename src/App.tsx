import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import MyPage from "./pages/MyPage";
import Battle from "./pages/Battle";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
