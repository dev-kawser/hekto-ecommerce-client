import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
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
            <nav className="container flex items-center justify-between py-4">
                {/* Logo */}
                <Link to={"/"}>
                    <h3>Hekto</h3>
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
                    {user && (
                        <li className="hover:underline">
                            <NavLink
                                to="/account"
                                className={({ isActive }) => (isActive ? "text-pink" : "")}
                            >
                                Account
                            </NavLink>
                        </li>
                    )}

                </ul>

                <div className="xl:hidden lg:hidden flex items-center gap-3">
                    {
                        user ?
                            <h5 className="flex items-center gap-1 font-medium bg-pink text-white px-2 py-1 rounded">
                                <span>
                                    <IoLogOutOutline />
                                </span>
                                <button onClick={() => logout()}>Logout</button>
                            </h5>
                            :
                            <h4 className="flex items-center gap-1 font-semibold">
                                <span>
                                    <LuUser2 />
                                </span>
                                <Link to={"/login"}>Login</Link>
                            </h4>
                    }
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
                    <ul className="space-y-4 lato uppercase">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : "text-gray-900"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : "text-gray-900"
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/offers"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : "text-gray-900"
                                }
                            >
                                Offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : "text-gray-900"
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) =>
                                        isActive ? "text-pink" : "text-gray-900"
                                    }
                                >
                                    Account
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
