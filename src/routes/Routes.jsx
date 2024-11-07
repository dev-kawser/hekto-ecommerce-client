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
import Shop from "../Pages/shop/Shop";

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
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
        ],
    },
]);

export default router;