import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/navbar/Navbar";
import Footer from "../Pages/shared/footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;