import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";
import axiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../ui/shared/Loading";
import { toast } from "react-hot-toast";

const MyOrders = () => {
    const { currentUser } = useCurrentUser();

    const { data: myOrders, isLoading, refetch } = useQuery({
        queryKey: ["myOrders", currentUser?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/orders/${currentUser?.email}`);
            return response.data;
        },
        enabled: !!currentUser?.email,
    });

    const handleCancelOrder = async (orderId) => {
        try {
            const response = await axiosPublic.patch("/orders/status", {
                orderId,
                newStatus: "canceled",
            });

            if (response.data.message) {
                toast.success("Order canceled successfully");
                refetch();
            }
        } catch (error) {
            console.error("Failed to cancel order", error);
            toast.error("Failed to cancel the order. Please try again.");
        }
    };

    const sortedOrders = myOrders?.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-5">My Orders</h2>
            {sortedOrders?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-purple text-white">
                            <tr>
                                <th className="p-3 border border-gray-300">#</th>
                                <th className="p-3 border border-gray-300">Order Date</th>
                                <th className="p-3 border border-gray-300">Products</th>
                                <th className="p-3 border border-gray-300">Total Price</th>
                                <th className="p-3 border border-gray-300">Status</th>
                                <th className="p-3 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders.map((order, index) => (
                                <tr key={order._id} className="text-center lato">
                                    <td className="p-3 border border-gray-300">{index + 1}</td>
                                    <td className="p-3 border border-gray-300">{order.date}</td>
                                    <td className="p-3 border border-gray-300">
                                        {order.cartItems.map((item) => (
                                            <div key={item.productId} className="mb-2">
                                                <p>
                                                    <strong>{item.productTitle}</strong> x {item.productQuantity}
                                                </p>
                                            </div>
                                        ))}
                                    </td>
                                    <td className="p-3 border border-gray-300">${order.totalPrice.toFixed(2)}</td>
                                    <td className="p-3 border border-gray-300">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${order.status === "pending"
                                                ? "bg-yellow-300 text-yellow-900"
                                                : order.status === "processing"
                                                    ? "bg-cyan-300 text-cyan-900"
                                                    : order.status === "completed"
                                                        ? "bg-green-300 text-green-900"
                                                        : order.status === "canceled"
                                                            ? "bg-red text-white"
                                                            : "bg-gray-300 text-gray-900"
                                                }`}>
                                            {order.status}
                                        </span>

                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        {order.status === "pending" ? (
                                            <button
                                                onClick={() => handleCancelOrder(order._id)}
                                                className="px-3 py-1 bg-red text-white rounded hover:bg-red-600">
                                                Cancel
                                            </button>
                                        ) : (
                                            <span className="text-gray-500">N/A</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-lg text-gray-600">You have no orders yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
