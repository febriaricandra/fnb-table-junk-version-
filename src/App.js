import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import DetailMenu from "./pages/DetailMenu";
import Error from "./pages/Error";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./pages/admin/Layout";
import Orders from "./pages/admin/Orders";
import Reviews from "./pages/admin/Reviews";
import Barcode from "./pages/admin/Barcode";
import FormProduct from "./pages/admin/FormProduct";
// import Profit from "./pages/Profit";
// import { AuthProvider } from "./context/UserContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index path=":menuId/menu" element={<Menu />} exact />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<DetailMenu />} />
        <Route path="/menu/order" element={<Order />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profit" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="barcode" element={<Barcode />} />
        <Route path="add-product" element={<FormProduct />} />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* Tambahkan route untuk halaman error 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
