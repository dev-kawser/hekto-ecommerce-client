import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/home/Home";
import Blogs from "../Pages/blogs/Blogs";
import ErrorPage from "../Pages/shared/ErrorPage";
import Login from "../Pages/authentication/Login";

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
                path: "/blogs",
                element: <Blogs />
            },
        ],
    },
]);

export default router;