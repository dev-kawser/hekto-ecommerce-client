import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/home/Home";
import Blogs from "../Pages/blogs/Blogs";
import ErrorPage from "../Pages/shared/ErrorPage";
import Login from "../Pages/authentication/Login";
import Register from "../Pages/authentication/Register";
import ForgotPassword from "../Pages/authentication/ForgotPassword";
import Products from "../Pages/products/Products";
import ProductDetails from "../Pages/products/ProductDetails";
import Account from "../Pages/account/Account";
import PrivateRoute from "./PrivateRoute";
import Carts from "../Pages/carts/Carts";
import OrderComplete from "../Pages/orderComplete/OrderComplete";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/account",
                element: <PrivateRoute>
                    <Account />
                </PrivateRoute>
            },
            {
                path: "/carts",
                element: <PrivateRoute>
                    <Carts />
                </PrivateRoute>
            },
            {
                path: "/order-complete",
                element: <PrivateRoute>
                    <OrderComplete />
                </PrivateRoute>
            },
        ],
    },
]);

export default router;