import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { currentUser } = useCurrentUser();
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex min-h-screen bg-lightPurple">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-28"
                    } bg-purple text-white transition-all duration-300 flex flex-col justify-between`}>
                {/* Sidebar Header */}
                <div>
                    <button
                        onClick={toggleSidebar}
                        className="text-xl p-3 focus:outline-none hover:bg-purple">
                        {isOpen ? "<" : ">"}
                    </button>
                    <div className="flex flex-col gap-2 px-2 mt-3">
                        <h2 className="text-lg font-bold text-center text-white">
                            {isOpen ? "Dashboard" : "DB"}
                        </h2>
                        <nav className="mt-6">
                            <ul className="flex flex-col gap-2">
                                {/* Links for Users */}
                                {currentUser?.role === "admin" ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-users"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive
                                                        ? "bg-navyBlue"
                                                        : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Users
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive
                                                        ? "bg-navyBlue"
                                                        : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-offer-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive
                                                        ? "bg-navyBlue"
                                                        : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Offer Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive
                                                        ? "bg-navyBlue"
                                                        : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Orders
                                            </NavLink>
                                        </li>
                                    </>
                                )
                                    :
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/my-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive
                                                        ? "bg-navyBlue"
                                                        : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                My Orders
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="px-2 py-4">
                    {
                        currentUser?.photo &&
                        <div className="max-w-36 mx-auto mb-5">
                            <img
                                className="border-4 border-white rounded-full"
                                src={currentUser?.photo || "https://i.ibb.co.com/WWrPS5F/demo-user.png"} alt="" />
                        </div>
                    }
                    <div className="flex items-center gap-3">

                        {isOpen && (
                            <div>
                                <p className="font-semibold uppercase">{currentUser?.name || "User"}</p>
                                <p className="text-sm text-gray-300">{currentUser?.email}</p>
                            </div>
                        )
                        }
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

            {/* Main Content */}
            <div className="flex-1 p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
