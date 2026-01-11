import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NotFound from './components/NotFound.jsx';

// ================= USER PAGES =================
import Home from './user/pages/Home.jsx';
import Login from './user/pages/Login.jsx';
import Register from './user/pages/Register.jsx';
import Products from './user/pages/Products.jsx';
import ProductDetails from './user/pages/ProductDetails.jsx';
import Cart from './user/pages/Cart.jsx';
import Checkout from './user/pages/Checkout.jsx';
import Orders from './user/pages/Orders.jsx';
import Profile from './user/pages/Profile.jsx';
import Process from './user/pages/Process.jsx'
// ================= SELLER PAGES =================
import SellerLayout from './seller/SellerLayout.jsx';
import SellerDashboard from './seller/pages/SellerDashboard.jsx';
import AddProduct from './seller/pages/AddProduct.jsx';
import EditProduct from './seller/pages/EditProduct.jsx';
import MyProducts from './seller/pages/MyProducts.jsx';
import SellerOrders from './seller/pages/SellerOrders.jsx';
import SellerProfile from './seller/pages/SellerProfile.jsx';

// ================= ADMIN PAGES =================
import AdminLayout from './admin/AdminLayout.jsx';
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import ManageUsers from './admin/pages/ManageUsers.jsx';
import VerifyProducts from './admin/pages/VerifyProducts.jsx';
import AdminOrders from './admin/pages/AdminOrders.jsx';
import AdminProfile from './admin/pages/AdminProfile.jsx';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/process" element={<Process/>}></Route>
          {/* ================= SELLER ROUTES ================= */}
          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<SellerDashboard />} />
            <Route path="add-product" element={<AddProduct/>} />
            <Route path="edit-product/:id" element={<EditProduct />} />
            <Route path="my-products" element={<MyProducts />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="profile" element={<SellerProfile />} />
          </Route>

          {/* ================= ADMIN ROUTES ================= */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="verify-products" element={<VerifyProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
