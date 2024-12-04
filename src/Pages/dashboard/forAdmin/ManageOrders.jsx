import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../ui/shared/Loading";
import { toast } from "react-hot-toast";

const ManageOrders = () => {
    // Fetch all orders
    const { data: allOrders, isLoading, refetch } = useQuery({
        queryKey: ["allOrders"],
        queryFn: async () => {
            const response = await axiosPublic.get("/orders");
            return response.data;
        },
    });

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await axiosPublic.patch("/orders/status", { orderId, newStatus });
            if (response.data.message) {
                toast.success("Order status updated successfully");
                refetch();
            }
        } catch (error) {
            console.error("Failed to update order status", error);
            toast.error("Failed to update order status");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-5">Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-purple text-white">
                        <tr>
                            <th className="p-3 border border-gray-300">#</th>
                            <th className="p-3 border border-gray-300">Order Date</th>
                            <th className="p-3 border border-gray-300">Customer</th>
                            <th className="p-3 border border-gray-300">Total Price</th>
                            <th className="p-3 border border-gray-300">Status</th>
                            <th className="p-3 border border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders?.map((order, index) => (
                            <tr key={order._id} className="text-center">
                                <td className="p-3 border border-gray-300">{index + 1}</td>
                                <td className="p-3 border border-gray-300">{order.date}</td>
                                <td className="p-3 border border-gray-300">
                                    {order.name} ({order.email})
                                </td>
                                <td className="p-3 border border-gray-300">
                                    ${order.totalPrice.toFixed(2)}
                                </td>
                                <td className="p-3 border border-gray-300">
                                    <select
                                        defaultValue={order.status}
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                        className="p-1 border border-gray-300 rounded">
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </td>
                                <td className="p-3 border border-gray-300">
                                    <button
                                        onClick={() => console.log("View Details")}
                                        className="px-3 py-1 bg-blue text-white rounded">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
