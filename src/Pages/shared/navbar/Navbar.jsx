import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef(null);
    const { user, logout } = useAuth();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener("mousedown", closeDropDown);
        return () => {
            document.removeEventListener("mousedown", closeDropDown);
        };
    }, []);

    return (
        <div className="shadow">
            {/* SubNavbar */}
            <SubNavbar />

            {/* Main Navbar */}
            <nav className="container flex items-center justify-between py-3">
                {/* Logo */}
                <Link to={"/"}>
                    <h3>BazaarNest</h3>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6">
                    <li className="hover:underline">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "text-pink" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="relative" ref={dropDownMenuRef}>
                        <button
                            onClick={() => setDropDownState(!dropDownState)}
                            className="relative flex items-center gap-1 py-2 hover:underline"
                        >
                            <span>Services</span>
                            <svg
                                className={`${dropDownState ? "" : "rotate-180"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m18 15-6-6-6 6" />
                            </svg>
                        </button>
                        {dropDownState && (
                            <ul
                                data-aos="fade-in"
                                data-aos-duration="500"
                                className="absolute top-10 z-10 space-y-2 rounded-md bg-purple p-2 text-white">
                                <li className="px-3 hover:underline">
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li className="px-3 hover:underline">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="px-3 hover:underline">
                                    <Link to="/contact">Contact</Link>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li className="hover:underline">
                        <NavLink
                            to="/products"
                            className={({ isActive }) => (isActive ? "text-pink" : "")}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="hover:underline">
                        <NavLink
                            to="/offers"
                            className={({ isActive }) => (isActive ? "text-pink" : "")}
                        >
                            Offers
                        </NavLink>
                    </li>
                    <li className="hover:underline">
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => (isActive ? "text-pink" : "")}
                        >
                            Blogs
                        </NavLink>
                    </li>
                </ul>

                <div className="xl:hidden lg:hidden flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div>
                            <h5>
                                <Link to={"/carts"}>
                                    <div className="relative w-fit">
                                        <FiShoppingCart className="text-2xl" />
                                        <span className="absolute mx-auto -right-4 -top-2 flex size-5 items-center justify-center rounded-full bg-pink text-center text-[15px] text-white">
                                            0
                                        </span>
                                    </div>
                                </Link>
                            </h5>
                        </div>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <MdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="lg:hidden bg-purple text-white p-5"
                >
                    <ul className="space-y-4 lato text-lg">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-pink font-semibold" : "text-gray-900"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "text-pink font-semibold" : "text-gray-900"
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/offers"
                                className={({ isActive }) =>
                                    isActive ? "text-pink font-semibold" : "text-gray-900"
                                }
                            >
                                Offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/wishlists"
                                className={({ isActive }) =>
                                    isActive ? "text-pink font-semibold" : "text-gray-900"
                                }
                            >
                                Wishlists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "text-pink font-semibold" : "text-gray-900"
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) =>
                                        isActive ? "text-pink font-semibold" : "text-gray-900"
                                    }
                                >
                                    Account
                                </NavLink>
                            </li>
                        )}
                        <li>
                            {
                                user ?
                                    <li>
                                        <NavLink
                                            onClick={() => logout()}
                                            className="text-white bg-pink py-1 px-3 rounded"
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                    :
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-pink"
                                                    : "text-gray-900"
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                            }
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
