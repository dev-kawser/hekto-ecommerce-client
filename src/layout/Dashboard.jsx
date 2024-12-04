import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";

const Dashboard = () => {
    const { currentUser } = useCurrentUser();
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex min-h-screen bg-lightPurple">
            {/* Sidebar for large screens */}
            <div className="xl:w-64 lg:w-52 lg:flex hidden bg-purple text-white flex-col justify-between">
                {/* Sidebar Header */}
                <div>
                    <div className="flex flex-col gap-2 px-2 mt-3">
                        <Link to={"/"} className="lg:text-xl text-lg lato font-bold text-center text-white underline">
                            Back Home
                        </Link>
                        <nav className="mt-6">
                            <ul className="flex flex-col gap-2">
                                {currentUser?.role === "admin" ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-users"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Users
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-offer-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Offer Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Orders
                                            </NavLink>
                                        </li>
                                        <div className="border"></div>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Home
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/my-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                My Orders
                                            </NavLink>
                                        </li>
                                        <div className="border"></div>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Home
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="px-2 py-4">
                    {currentUser?.photo && (
                        <div className="max-w-36 mx-auto mb-5">
                            <img
                                className="border-4 border-white rounded-full"
                                src={currentUser?.photo || "https://i.ibb.co.com/WWrPS5F/demo-user.png"}
                                alt="User Profile"
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="font-semibold uppercase">{currentUser?.name || "User"}</p>
                            <p className="text-sm text-gray-300">{currentUser?.email}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <NavLink
                            to="/account"
                            className="block p-2 rounded bg-navyBlue text-center hover:bg-navyBlue-dark">
                            Account
                        </NavLink>
                        <button
                            onClick={logout}
                            className="block p-2 rounded bg-red-600 text-center hover:bg-red-700">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Drawer for small screens */}
            <div
                className={`fixed top-0 left-0 h-full z-40 bg-purple text-white flex flex-col justify-between transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden w-64`}>
                <div className="mt-4 text-center">
                    <h4 className="font-bold">Dashboard</h4>
                </div>
                <nav className="mt-6 px-4">
                    <ul className="flex flex-col gap-2">
                        {currentUser?.role === "admin" ? (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-users"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-products"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-offer-products"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Offer Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-orders"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Orders
                                    </NavLink>
                                </li>
                                <div className="border"></div>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Home
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/my-orders"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        My Orders
                                    </NavLink>
                                </li>
                                <div className="border"></div>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Home
                                    </NavLink>
                                </li>
                            </>

                        )}
                    </ul>
                </nav>
                <div className="px-4 py-4">
                    <button onClick={logout} className="w-full p-2 rounded bg-pink text-center hover:bg-red">
                        Logout
                    </button>
                </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 right-7 z-50 bg-purple text-white p-3 rounded-full lg:hidden">
                {isOpen ? <FaTimes /> : <HiOutlineBars3 />}
            </button>

            {/* Main Content */}
            <div className="flex-1 lg:p-5 p-2 overflow-x-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
