import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

//protected user pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

//protected admin pages:
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminProductsPage from "./pages/admin/AdminProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="Page does not exist 404" />

        {/* Nested routes under a user protected route */}
        <Route element={<ProtectedRoutesComponent  admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>

        {/*Admin protected routee */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage/>} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route 
          path="/admin/new-products" 
          element={<AdminCreateProductPage />} 
          />
          <Route 
          path="/admin/edit-product" 
          element={<AdminEditProductPage />} 
          />
          <Route 
          path="/admin/orders" 
          element={<AdminOrdersPage />} />
          <Route 
          path="/admin/order-details" 
          element={<AdminOrderDetailsPage />} 
          />
          <Route 
          path="/admin/chats" 
          element={<AdminChatsPage />} />
          <Route 
          path="/admin/analytics" 
          element={<AdminAnalyticsPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
