import { Routes, Route, Navigate } from 'react-router-dom';

import AccountSettings from '../pages/account-settings';
import Order from '../pages/orders/list';
import OrderDetail from '../pages/orders/order-detail';
import Wishlist from '../pages/wishlist';
import Addresses from '../pages/addresses';
import EarnRefer from '../pages/referrals';
import Layout from '../layout/Layout';
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import ErrorPage from '../pages/ErrorPage';

function CustomerDashboard() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<AccountSettings />} />
        <Route path='myprofile' element={<AccountSettings />} />
        <Route path='orders' element={<Order />} />
        <Route path='orders/:orderId' element={<OrderDetail />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='addresses' element={<Addresses />} />
        <Route path='referrals' element={<EarnRefer />} />
      </Route>

      <Route path='/customer/login' element={<Login />} />
      <Route path='/customer/forgot-password' element={<ForgotPassword />} />
      <Route path='/customer/reset-password' element={<ResetPassword />} />

      <Route path='/customer/*' element={<ErrorPage />} />
    </Routes>
  );
}

export default CustomerDashboard;
