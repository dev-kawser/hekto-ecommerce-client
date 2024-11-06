import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/navbar/Navbar";
import Footer from "../Pages/shared/footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;