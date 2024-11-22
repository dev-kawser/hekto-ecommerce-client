import Lottie from "lottie-react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import worldAnimation from "../../../public/worldAnimation.json"

const Account = () => {
    return (
        <div>
            <TinnyBanner title={"My Account"} />
            <div className="flex flex-col lg:flex-row items-center lg:gap-10 container">
                {/* Animation Section */}
                <div className="w-72 lg:w-[500px] md:hidden lg:block flex-shrink-0">
                    <Lottie animationData={worldAnimation} loop={true} />
                </div>

                {/* Form Section */}
                <div className="flex-1 max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h2>
                    <div className="mb-6">
                        <input
                            type="text"
                            value="Email"
                            readOnly
                            className="w-full p-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Mobile phone number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-3"
                        />
                        <div className="flex items-center gap-2 mt-3">
                            <input
                                type="checkbox"
                                id="newsletter"
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="newsletter"
                                className="text-gray-600 text-sm"
                            >
                                Keep me up to date on news and exclusive offers
                            </label>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Shipping Address
                    </h2>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="First name (optional)"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                            />
                        </div>
                        <input
                            type="text"
                            value="Bangladesh"
                            readOnly
                            className="w-full p-3 mb-6 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />
                    </div>
                    <button className="w-full bg-purple text-white py-3 rounded-lg text-lg font-medium hover:bg-navyBlue transition">
                        Update Data
                    </button>
                </div>
            </div>


            <Newsletter />
        </div>
    );
};

export default Account;
