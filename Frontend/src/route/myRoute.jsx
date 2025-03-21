import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import Product from "../pages/Product";
import CategoryProducts from "../pages/CategoryProducts";
import { Cat } from "lucide-react";
import Cart from "../pages/Cart";
import OrderDetails from "../pages/OrderDetails";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import RoleBasedRoute from "./RoleBasedRoute"

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:name",
        element: <CategoryProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // Role-based routing for orders
      { path: "/orders", element: <AdminOrders/> },
      {
        path: "/admin/products",
        element: <AdminProducts />,
      },
    ],
  },
]);
export default myRoute;
