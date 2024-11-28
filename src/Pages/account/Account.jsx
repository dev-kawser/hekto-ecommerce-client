import Lottie from "lottie-react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import worldAnimation from "../../../public/worldAnimation.json";
import { useState } from "react";
import axios from "axios";
import useCurrentUser from "../../hooks/useCurrentUser";

const Account = () => {

    const {currentUser} = useCurrentUser();

    const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");
        formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

        setIsUploading(true);
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
                formData
            );
            setImageUrl(response.data.secure_url);
        } catch (error) {
            console.error("Image upload failed", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Collect all the form data
        const formData = {
            mobileNumber: e.target.elements["mobileNumber"].value,
            fullName: e.target.elements["fullName"].value,
            address: e.target.elements["address"].value,
            apartment: e.target.elements["apartment"].value,
            city: e.target.elements["city"].value,
            postalCode: e.target.elements["postalCode"].value,
            country: "Bangladesh",
            photo: imageUrl || null,
        };

        console.log("Form Data: ", formData);
    };

    return (
        <div>
            <TinnyBanner title={"My Account"} />
            <div className="flex flex-col lg:flex-row items-center lg:gap-10 container">
                {/* Animation Section */}
                <div className="w-72 lg:w-[500px] md:hidden lg:block flex-shrink-0">
                    <Lottie animationData={worldAnimation} loop={true} />
                </div>

                {/* Form Section */}
                <form
                    onSubmit={handleFormSubmit}
                    className="flex-1 max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h2>
                    <div className="mb-6">
                        <input
                            type="text"
                            value={currentUser?.email}
                            readOnly
                            className="w-full p-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Mobile phone number"
                            name="mobileNumber"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-3"
                        />
                        <div className="flex items-center gap-2 mt-3">
                            <input
                                type="checkbox"
                                id="newsletter"
                                name="newsletter"
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="newsletter" className="text-gray-600 text-sm">
                                Keep me up to date on news and exclusive offers
                            </label>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Shipping Address
                    </h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Your name"
                            name="fullName"
                            defaultValue={currentUser?.displayName}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                            name="apartment"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="City"
                                name="city"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                            />
                            <input
                                type="number"
                                placeholder="Postal Code"
                                name="postalCode"
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
                    <div>
                        <input
                            type="file"
                            id="photo"
                            onChange={(e) => handleImageUpload(e.target.files[0])}
                            className="w-full p-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />
                        {isUploading && (
                            <div className="mt-2 w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
                        )}
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Uploaded"
                                className="mt-3 size-24 rounded"
                            />
                        )}
                    </div>
                    <button className="w-full bg-purple text-white py-3 rounded-lg text-lg font-medium hover:bg-navyBlue transition mt-6">
                        Update Data
                    </button>
                </form>
            </div>

            <Newsletter />
        </div>
    );
};

export default Account;