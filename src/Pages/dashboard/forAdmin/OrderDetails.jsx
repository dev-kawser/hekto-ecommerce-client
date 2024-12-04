import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../ui/shared/Loading";

const OrderDetails = () => {
    const { id } = useParams();

    const { data: order, isLoading, isError } = useQuery({
        queryKey: ["orderDetails", id],
        queryFn: async () => {
            const response = await axiosPublic.get(`/orders/details/${id}`);
            return response.data;
        },
    });

    if (isLoading) return <Loading />;

    if (isError || !order)
        return (
            <div className="text-center text-red-600 mt-5">
                Failed to load order details. Please try again.
            </div>
        );

    return (
        <div className="p-6 bg-white shadow-lg rounded-md max-w-3xl mx-auto lg:mt-10 mt-5">
            <h2 className="lg:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Order Details
            </h2>
            <div className="border-t pt-4 space-y-4 lato">
                {/* Order Summary */}
                <div>
                    <h3 className="lg:text-lg text-base font-medium text-gray-600 underline">Order Info</h3>
                    <p>
                        <strong>Order ID:</strong> {order._id}
                    </p>
                    <p>
                        <strong>Date:</strong> {order.date}
                    </p>
                    <p>
                        <strong>Status:</strong>{" "}
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
                    </p>
                </div>

                {/* Customer Details */}
                <div>
                    <h3 className="lg:text-lg text-base font-medium text-gray-600 underline">
                        Customer Info
                    </h3>
                    <p>
                        <strong>Name:</strong> {order.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {order.email}
                    </p>
                    <p>
                        <strong>Mobile:</strong> {order.mobileNumber}
                    </p>
                    <p>
                        <strong>Address:</strong> {order.address}, {order.apartment}
                    </p>
                </div>

                {/* Products in Order */}
                <div>
                    <h3 className="lg:text-lg text-base font-medium text-gray-600 underline">
                        Ordered Products
                    </h3>
                    <div className="border-t mt-2 pt-2 space-y-3">
                        {order.cartItems.map((item) => (
                            <div
                                key={item.productId}
                                className="flex justify-between items-center border-b pb-2">
                                <p className="text-gray-700 font-medium">
                                    {item.productTitle} x {item.productQuantity}
                                </p>
                                <p className="text-gray-700 font-medium">
                                    ${item.productPrice.toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="lg:text-lg text-base font-bold text-gray-800 mt-3">
                        Total Price: ${order.totalPrice.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
