import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import DetailMenu from "./pages/DetailMenu";
import Error from "./pages/Error";
import Index from "./pages/admin/Index";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Meja from "./pages/admin/Meja";
// import { AuthProvider } from "./context/UserContext";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<DetailMenu />} />
      <Route path="*" element={<Error />} />
      <Route path="/index" element={<Index />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/index/meja" element={<Meja />} />
    </Routes>
  );
}

export default App;
