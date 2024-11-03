import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../../../ui/shared/Dropdown";
import SubNavbar from "./SubNavbar";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <SubNavbar />
            <div className="container my-4 py-1 flex items-center justify-between sticky top-0 z-50">
                <Link to={"/"}>
                    <h3>Hekto</h3>
                </Link>
                <div className="hidden xl:block lg:block">
                    <ul className="flex items-center gap-7">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <DropDown
                                items={['About', 'Contact', 'FAQ']}
                                to={['/about', '/contact', '/faq']}
                            />
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/account"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Account
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden xl:flex lg:flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-l p-3 outline-none"
                    />
                    <button className="bg-pink text-white rounded-r p-3">
                        <IoSearchOutline />
                    </button>
                </div>
                <button
                    className="xl:hidden lg:hidden"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <MdClose size={24} /> : <IoMdMenu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="xl:hidden lg:hidden bg-pink text-white p-7"
                >
                    <ul className="flex flex-col gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/account"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
