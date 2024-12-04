import { Link, useNavigate } from "react-router-dom";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import useMyCarts from "../../hooks/useMyCarts";
import { useEffect, useState } from "react";
import axiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import NoDataFound from "../shared/NoDataFound";

const Carts = () => {

    const { currentUser, sortedMyCarts, myCartsRefetch } = useMyCarts();
    const [address, setAddress] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

        let total = 0;

        // Loop through sortedMyCarts to calculate total price
        sortedMyCarts?.forEach((item) => {
            total += item.cartData.productPrice * item.cartData.productQuantity;
        });

        // Set the total price in state
        setTotalPrice(total);
    }, [sortedMyCarts])

    useEffect(() => {

        myCartsRefetch()

        if (currentUser?.address && currentUser?.apartment && currentUser?.mobileNumber) {
            setAddress(true);
        }
    }, [currentUser?.address, currentUser?.apartment, currentUser?.mobileNumber, myCartsRefetch])

    const handleDeleteCarts = async () => {
        try {
            const response = await axiosPublic.delete(`/carts/delete/${currentUser?.email}`);

            if (response.data.message) {
                toast.success("All carts have been deleted successfully.");
                myCartsRefetch();
            } else {
                toast.error("Failed to delete carts.");
            }
        } catch (error) {
            toast.error("An error occurred while deleting carts.");
            console.error("Error deleting carts:", error);
        }
    };

    const handleQuantityUpdate = async (cartId, newQuantity) => {
        try {
            // Send the updated quantity to the backend
            const response = await axiosPublic.patch(`/carts/${cartId}`, { newQuantity });

            if (response.data.message) {
                toast.success("Cart updated successfully!");
                myCartsRefetch();
            } else {
                toast.error("Failed to update cart.");
            }
        } catch (error) {
            toast.error("An error occurred while updating the cart.");
            console.error("Error updating cart:", error);
        }
    };

    const handleOrder = async () => {

        const orderData = {
            userId: currentUser?._id,
            name: currentUser?.name,
            email: currentUser?.email,
            apartment: currentUser?.apartment,
            mobileNumber: currentUser?.mobileNumber,
            address: currentUser?.address,
            totalPrice: totalPrice,
            status: "pending",
            date: new Date().toLocaleString(),
            cartItems: sortedMyCarts?.map((item) => ({
                productId: item.cartData.productId,
                productTitle: item.cartData.productTitle,
                productPrice: item.cartData.productPrice,
                productQuantity: item.cartData.productQuantity
            }))
        };

        try {
            // Send the order data to the backend
            const response = await axiosPublic.post("/orders", orderData);
            if (response.data.message) {
                toast.success("Order placed successfully!");
                myCartsRefetch();
                navigate("/order-complete");
                handleDeleteCarts();

            } else {
                toast.error("Failed to place order.");
            }
        }
        catch (error) {
            toast.error("An error occurred while placing the order.");
            console.error("Error placing order:", error);
        }
    }

    if (!sortedMyCarts?.length > 0) return <NoDataFound />

    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"Shopping Cart"} />

            {/* Main Cart Section */}
            <div className="container mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Table */}
                    <div className="lg:col-span-2">
                        <div className="max-h-[500px] overflow-y-auto">
                            <table className="w-full border-collapse text-center">
                                <thead>
                                    <tr className="text-gray-700 border-b border-gray-300">
                                        <th className="py-3 text-sm md:text-base">Product</th>
                                        <th className="py-3 text-sm md:text-base">Price</th>
                                        <th className="py-3 text-sm md:text-base">Quantity</th>
                                        <th className="py-3 text-sm md:text-base">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedMyCarts?.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-2 flex items-center gap-4 justify-center text-sm">
                                                <img
                                                    src={item.cartData.productImage}
                                                    alt="Product"
                                                    className="w-12 h-12 object-cover rounded-md md:w-16 md:h-16"
                                                />
                                                <div className="text-left">
                                                    <p className="font-medium text-gray-800 truncate md:text-base">{item.cartData.productTitle}</p>
                                                    <p className="text-gray-500 text-xs md:text-sm">Date: {item.cartData.date}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-2 text-sm md:text-base text-gray-600">
                                                ${item.cartData.productPrice.toFixed(2)}
                                            </td>
                                            <td className="py-4 px-2 flex items-center justify-center gap-2">
                                                {/* Decrease Quantity Button */}
                                                <button
                                                    onClick={() => handleQuantityUpdate(item._id, item.cartData.productQuantity - 1)}
                                                    className="w-8 h-8 bg-rose-500 text-white rounded-full hover:bg-rose-600 flex items-center justify-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="number"
                                                    readOnly
                                                    value={item.cartData.productQuantity}
                                                    className="w-10 text-center border border-gray-300 rounded-md text-sm md:w-12 focus:outline-none"
                                                />
                                                {/* Increase Quantity Button */}
                                                <button
                                                    onClick={() => handleQuantityUpdate(item._id, item.cartData.productQuantity + 1)}
                                                    className="w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center justify-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </td>
                                            <td className="py-4 px-2 text-sm md:text-base font-medium text-gray-800">
                                                ${(item.cartData.productPrice * item.cartData.productQuantity).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        <div className="flex justify-center mt-6">
                            <SecondaryButton onClick={handleDeleteCarts} title={"Clear Cart"} />
                        </div>
                    </div>


                    {/* Cart Totals & Shipping */}
                    <div className="space-y-6">
                        {/* Cart Totals */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Cart Totals
                            </h2>
                            <div className="flex justify-between text-gray-700 font-semibold mb-2">
                                <span>Total:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">
                                ✅ Shipping & taxes calculated at checkout
                            </p>
                            {
                                address === false ?
                                    <Link to={"/account"}>
                                        <button className="w-full bg-pink text-white py-3 rounded-md font-medium hover:bg-red transition">
                                            Add address to Order
                                        </button>
                                    </Link>
                                    :
                                    <button
                                        onClick={handleOrder}
                                        className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition">
                                        Complete Order
                                    </button>
                            }
                        </div>

                        {/* Calculate Shipping */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Your Address
                            </h2>
                            <input
                                type="text"
                                readOnly
                                value={currentUser?.address}
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-not-allowed"
                            />
                            <input
                                type="text"
                                readOnly
                                value={currentUser?.apartment}
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-not-allowed"
                            />
                            <input
                                type="number"
                                readOnly
                                value={currentUser?.mobileNumber}
                                className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-not-allowed"
                            />
                            <p className="mt-4 text-sm">
                                Want to add address? Add address here{" "}
                                <Link to="/account" className="text-navyBlue font-medium underline">
                                    Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;
