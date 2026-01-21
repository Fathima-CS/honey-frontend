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
import PaymentSuccess from './user/pages/PaymentSuccess.jsx';
import PayamentError from './user/pages/PayamentError.jsx';
// ================= SELLER PAGES =================
import SellerLayout from './seller/SellerLayout.jsx';
import SellerDashboard from './seller/pages/SellerDashboard.jsx';
import AddProduct from './seller/pages/AddProduct.jsx';
import EditProduct from './seller/pages/EditProduct.jsx';
import MyProducts from './seller/pages/MyProducts.jsx';
import SellerOrders from './seller/pages/SellerOrders.jsx';
import SellerProfile from './seller/pages/Sellerprofile.jsx';

// ================= ADMIN PAGES =================
import AdminLayout from './admin/AdminLayout.jsx';
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import ManageUsers from './admin/pages/ManageUsers.jsx';
import VerifyProducts from './admin/pages/VerifyProducts.jsx';
import AdminOrders from './admin/pages/AdminOrders.jsx';
import AdminProfile from './admin/pages/AdminProfile.jsx';
import BuyerDashboard from './buyer/pages/BuyerDashboard.jsx';

// -----------------------


function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<MyProducts />} />

          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/process" element={<Process/>}></Route>
          <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
          <Route path="/payment-error" element={<PayamentError/>}></Route>

          {/* ================= SELLER ROUTES ================= */}
          
            <Route path="/seller" element={<SellerDashboard />} />
           <Route path="/seller/products" element={<MyProducts />} />
           <Route path="/seller/add-product" element={<AddProduct />} />
            <Route path="/seller/edit-product/:id" element={<EditProduct />} />
            <Route path="/seller/orders" element={<SellerOrders />} />
            <Route path="/seller/profile/:id" element={<SellerProfile />} />
          {/* -------------------buyer dashboard------------- */}
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

          {/* ================= ADMIN ROUTES ================= */}
          
            <Route path="/admin/dashboard"  element={<AdminDashboard />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/verify-products" element={<VerifyProducts />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/profile/:id" element={<AdminProfile />} />
          

          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
