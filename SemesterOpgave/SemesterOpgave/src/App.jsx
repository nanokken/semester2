// hooks
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/ProductPage/ProductPage";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";
import StorePolicy from "./pages/StorePolicy/StorePolicy";

// components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import CTA from "./components/CTA/CTA";

import "./App.css";

function App() {



  return (
    <Router>
      <Navigation />
      <CTA />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/StorePolicy" element={<StorePolicy />} />
  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
