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
import About from "../Pages/about/About";
import Contact from "../Pages/contact/Contact";
import Offers from "../Pages/offers/Offers";
import Faq from "../Pages/faq/Faq";
import BlogDetails from "../Pages/blogs/BlogDetails";
import OfferProductDetails from "../Pages/offers/OfferProductDetails";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../Pages/dashboard/forAdmin/ManageUsers";
import ManageProducts from "../Pages/dashboard/forAdmin/ManageProducts";
import ManageOfferProducts from "../Pages/dashboard/forAdmin/ManageOfferProducts";
import ManageOrders from "../Pages/dashboard/forAdmin/ManageOrders";
import MyOrders from "../Pages/dashboard/forUser/MyOrders";
import Welcome from "../Pages/dashboard/Welcome";
import OrderDetails from "../Pages/dashboard/forAdmin/OrderDetails";
import AdminRoutes from "./AdminRoutes";
import UpdateProduct from "../Pages/dashboard/forAdmin/UpdateProduct";

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
                path: "/offers",
                element: <Offers />
            },
            {
                path: "/offerProduct/:id",
                element: <OfferProductDetails />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blog/:id",
                element: <BlogDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/faq",
                element: <Faq />
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
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                path: "welcome",
                element: <Welcome />,
            },
            // For User routes
            {
                path: "my-orders",
                element: <MyOrders />,
            },

            // For Admin routes
            {
                path: "manage-users",
                element: <AdminRoutes>
                    <ManageUsers />
                </AdminRoutes>,
            },
            {
                path: "order-details/:id",
                element: <OrderDetails />,
            },
            {
                path: "manage-products",
                element: <AdminRoutes>
                    <ManageProducts />
                </AdminRoutes>,
            },
            {
                path: "update-product/:id",
                element: <AdminRoutes>
                    <UpdateProduct />
                </AdminRoutes>,
            },
            {
                path: "manage-offer-products",
                element: <AdminRoutes>
                    <ManageOfferProducts />
                </AdminRoutes>,
            },
            {
                path: "manage-orders",
                element: <AdminRoutes>
                    <ManageOrders />
                </AdminRoutes>,
            },
        ],
    },
]);

export default router;