import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import DetailMenu from "./pages/DetailMenu";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<DetailMenu />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
