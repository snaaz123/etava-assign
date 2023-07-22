import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import ProductListPage from "../Pages/ProductListPage";
import ProductDetailPage from "../Pages/ProductDetailPage";
import CartPage from "../Pages/CartPage";
const MainRoutes=()=>{
    return (
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    );
}
 export default MainRoutes;