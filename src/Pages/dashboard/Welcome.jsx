import { NavLink } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";


const Welcome = () => {

    const { currentUser } = useCurrentUser();

    return (
        <div>
            <div className="flex-1 p-5 bg-lightPurple">
                <div className="rounded-lg shadow-lg p-6 bg-white mb-8">
                    {/* Welcome Card */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Welcome Back, {currentUser?.name || "User"}!
                            </h2>
                            <p className="text-gray-600">
                                Ready to manage your dashboard? Here&apos;s a quick overview:
                            </p>
                        </div>
                        <div
                            className="w-16 h-16 md:block hidden rounded-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${currentUser?.photo || "https://via.placeholder.com/150"})`,
                            }}
                        ></div>
                    </div>
                </div>

                {/* Shortcut Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition-all">
                        <h3 className="text-xl font-semibold">My Orders</h3>
                        <p className="text-sm mt-2">Track and manage your orders.</p>
                        <NavLink
                            to="/dashboard/my-orders"
                            className="mt-4 inline-block text-sm font-medium text-white underline">
                            View Orders
                        </NavLink>
                    </div>

                    <div className="bg-navyBlue text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition-all">
                        <h3 className="text-xl font-semibold">Account Settings</h3>
                        <p className="text-sm mt-2">Manage your personal details.</p>
                        <NavLink
                            to="/dashboard/account"
                            className="mt-4 inline-block text-sm font-medium text-white underline">
                            Go to Account
                        </NavLink>
                    </div>

                    <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition-all">
                        <h3 className="text-xl font-semibold">Help & Support</h3>
                        <p className="text-sm mt-2">Need assistance? We&apos;re here to help.</p>
                        <NavLink
                            to="/dashboard/support"
                            className="mt-4 inline-block text-sm font-medium text-white underline">
                            Get Support
                        </NavLink>
                    </div>
                </div>

                {/* Recent Activity Widget */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-700">You placed an order for <b>Product X</b>.</p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                            <NavLink
                                to="/dashboard/my-orders"
                                className="text-sm font-medium text-purple underline">
                                View Order
                            </NavLink>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-700">Your profile was updated.</p>
                                <p className="text-sm text-gray-500">Yesterday</p>
                            </div>
                            <NavLink
                                to="/dashboard/account"
                                className="text-sm font-medium text-purple underline">
                                Go to Account
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;