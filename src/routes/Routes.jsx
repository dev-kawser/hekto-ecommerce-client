import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
]);

export default router;