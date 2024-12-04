import { NavLink } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import axiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ui/shared/Loading";

const Welcome = () => {
    const { currentUser } = useCurrentUser();

    const { data: myOrders, isLoading } = useQuery({
        queryKey: ["myOrders", currentUser?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/orders/${currentUser?.email}`);
            return response.data;
        },
        enabled: !!currentUser?.email,
    });

    const sortedOrders = myOrders?.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {currentUser?.role === "admin" ? (
                "admin"
            ) : (
                <div className="flex-1 lg:p-5 p-2 bg-lightPurple">
                    <div className="rounded-lg shadow-lg p-6 bg-white mb-8">
                        {/* Welcome Card */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="lg:text-2xl text-lg font-bold text-navyBlue">
                                    <span className="lg:text-lg text-base">Welcome Back,</span>{" "}
                                    {currentUser?.name || "User"}!
                                </h2>
                                <p className="text-gray lato">
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
                            <h3 className="lg:text-xl text-lg font-semibold">My Orders</h3>
                            <p className="text-sm mt-2">Track and manage your orders.</p>
                            <NavLink
                                to="/dashboard/my-orders"
                                className="mt-4 inline-block text-sm font-medium text-white underline"
                            >
                                View Orders
                            </NavLink>
                        </div>

                        <div className="bg-navyBlue text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition-all">
                            <h3 className="lg:text-xl text-lg font-semibold">Account Settings</h3>
                            <p className="text-sm mt-2">Manage your personal details.</p>
                            <NavLink
                                to="/account"
                                className="mt-4 inline-block text-sm font-medium text-white underline"
                            >
                                Go to Account
                            </NavLink>
                        </div>

                        <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition-all">
                            <h3 className="lg:text-xl text-lg font-semibold">Help & Support</h3>
                            <p className="text-sm mt-2">Need assistance? We&apos;re here to help.</p>
                            <NavLink
                                to="/contact"
                                className="mt-4 inline-block text-sm font-medium text-white underline"
                            >
                                Get Support
                            </NavLink>
                        </div>
                    </div>

                    {/* Recent Activity Widget */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                        <div className="space-y-4 lato">
                            {sortedOrders?.slice(0, 3).map((order, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-700">
                                            You placed an order at {order?.date}
                                        </p>
                                        <p className="text-sm text-gray-500">Total Price: <b>${order?.totalPrice}</b></p>
                                    </div>
                                    <NavLink
                                        to={`/dashboard/order-details/${order?._id}`}
                                        className="text-sm font-medium text-purple underline"
                                    >
                                        View Details
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Welcome;
