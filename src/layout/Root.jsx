import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/navbar/Navbar";
import Footer from "../Pages/shared/footer/Footer";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Root = () => {
    const [showButton, setShowButton] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />

            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-purple text-white p-3 rounded-full shadow-lg hover:bg-navyBlue transition-all transform hover:scale-110 duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default Root;
