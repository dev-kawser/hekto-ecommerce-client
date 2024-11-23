import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../../../ui/shared/Dropdown";
import SubNavbar from "./SubNavbar";
import { IoMdMenu } from "react-icons/io";
import { IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth()

    return (
        <div className="shadow">
            <SubNavbar />
            <div className="container py-4 flex items-center justify-between">
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
                                to="/offers"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) => (isActive ? 'text-pink' : '')}
                            >
                                Blogs
                            </NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) => (isActive ? 'text-pink' : '')}
                                >
                                    Account
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>
                <div className="hidden xl:flex lg:flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-r-0 border-lightGray rounded-l p-3 outline-none"
                    />
                    <button className="bg-pink text-white rounded-r p-3">
                        <IoSearchOutline />
                    </button>
                </div>

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


            </div>

            {isMobileMenuOpen && (
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="xl:hidden lg:hidden bg-purple font-semibold p-7"
                >
                    <ul className="flex flex-col gap-4 lato uppercase">
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
                                to="/products"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Offers
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
                                to="/blogs"
                                className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                            >
                                Blogs
                            </NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink
                                    to="/account"
                                    className={({ isActive }) => (isActive ? 'text-white' : 'text-black')}
                                >
                                    Account
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
