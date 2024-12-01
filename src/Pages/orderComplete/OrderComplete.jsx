import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { FaCheckCircle, FaClock, FaClipboardList } from "react-icons/fa";

const OrderComplete = () => {
    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"Order Completed"} />

            {/* Main Section */}
            <div className="container">

                <div className="flex flex-col items-center justify-center lg:py-20 py-10 px-4 bg-gray-50">
                    <div className="flex justify-around items-center w-full max-w-5xl relative">
                        {/* Left Icon */}
                        <div className="hidden md:hidden lg:block">
                            <FaClock className="w-16 h-16 text-blue" />
                        </div>

                        {/* Main Content */}
                        <div className="text-center">
                            <FaCheckCircle className="w-20 h-20 text-pink mx-auto mb-4" />
                            <h1 className="text-2xl font-bold text-gray-800">
                                Your Order Is Completed!
                            </h1>
                            <p className="text-gray-600 max-w-xl my-4">
                                Thank you for your order! Your order is being processed and will
                                be completed within 3-6 hours. You will receive an email
                                confirmation when your order is completed.
                            </p>
                            <Link to={"/products"}>
                                <SecondaryButton title={"Continue Shopping"} />
                            </Link>
                        </div>

                        {/* Right Icon */}
                        <div className="hidden md:hidden lg:block">
                            <FaClipboardList className="w-16 h-16 text-purple" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default OrderComplete;
