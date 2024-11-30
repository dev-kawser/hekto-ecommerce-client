import { Link } from "react-router-dom";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import SecondaryButton from "../../ui/shared/SecondaryButton";

const Carts = () => {

    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"Shopping Cart"} />

            {/* Main Cart Section */}
            <div className="container mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Table */}
                    <div className="lg:col-span-2">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-700 border-b border-gray-300">
                                    <th className="py-3">Product</th>
                                    <th className="py-3">Price</th>
                                    <th className="py-3">Quantity</th>
                                    <th className="py-3 md:pl-0 pl-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Rows */}
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200"
                                    >
                                        <td className="py-4 flex items-center gap-4">
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="Product"
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-800">
                                                    Product Name {index + 1}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    Color: Brown, Size: XL
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-4 text-gray-600">
                                            $32.00
                                        </td>
                                        <td className="py-4">
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue="1"
                                                className="lg:w-16 w-10 md:ml-0 ml-3 p-2 border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </td>
                                        <td className="py-4 text-gray-800">
                                            $32.00
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-6">
                            <SecondaryButton title={"Update Cart"} />
                            <SecondaryButton title={"Clear Cart"} />
                        </div>
                    </div>

                    {/* Cart Totals & Shipping */}
                    <div className="space-y-6">
                        {/* Cart Totals */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Cart Totals
                            </h2>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Subtotal:</span>
                                <span>$160.00</span>
                            </div>
                            <div className="flex justify-between text-gray-700 font-semibold mb-2">
                                <span>Total:</span>
                                <span>$192.00</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">
                                ✅ Shipping & taxes calculated at checkout
                            </p>
                            <Link to={"/order-complete"}>
                                <button className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>

                        {/* Calculate Shipping */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Your Address
                            </h2>
                            <input
                                type="text"
                                placeholder="Bangladesh"
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Mirpur Dhaka - 1200"
                                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
