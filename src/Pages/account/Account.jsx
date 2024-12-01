import Lottie from "lottie-react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import worldAnimation from "../../../public/worldAnimation.json";
import { useState } from "react";
import axios from "axios";
import useCurrentUser from "../../hooks/useCurrentUser";
import axiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Account = () => {
    const { currentUser } = useCurrentUser();
    const { user } = useAuth()
    const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    // Function to handle image upload
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
            toast.success("Image uploaded successfully!");
        } catch (error) {
            console.error("Image upload failed:", error);
            toast.error("Failed to upload image. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        const formData = {
            mobileNumber: e.target.elements["mobileNumber"].value,
            name: e.target.elements["fullName"].value,
            address: e.target.elements["address"].value,
            apartment: e.target.elements["apartment"].value,
            city: e.target.elements["city"].value,
            postalCode: e.target.elements["postalCode"].value,
            country: "Bangladesh",
            photo: imageUrl || user?.photoURL,
        };

        console.log("Updating with data:", formData);

        try {
            if (!currentUser?._id) {
                toast.error("User is not logged in. Please log in and try again.");
                setIsUpdating(false);
                return;
            }

            const res = await axiosPublic.put(`/users/updateUser/${currentUser._id}`, formData);

            if (res.status === 200) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error("Failed to update profile. Please try again.");
            }
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsUpdating(false);
        }
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
                    className="flex-1 max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10 lato"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h2>
                    <div className="mb-6">
                        {/* Email (Read-Only) */}
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={currentUser?.email}
                            readOnly
                            className="w-full p-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />

                        {/* Mobile Number */}
                        <label htmlFor="mobileNumber" className="block text-gray-600 text-sm font-medium mt-4 mb-1">
                            Mobile Phone Number
                        </label>
                        <input
                            type="number"
                            id="mobileNumber"
                            defaultValue={currentUser?.mobileNumber}
                            placeholder="Mobile phone number"
                            name="mobileNumber"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />

                        {/* Newsletter Checkbox */}
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
                        {/* Full Name */}
                        <label htmlFor="fullName" className="block text-gray-600 text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Your name"
                            name="fullName"
                            defaultValue={currentUser?.name}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                        />

                        {/* Address */}
                        <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-1">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Address"
                            name="address"
                            defaultValue={currentUser?.address}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />

                        {/* Apartment */}
                        <label htmlFor="apartment" className="block text-gray-600 text-sm font-medium mb-1">
                            Apartment, Suite, etc. (optional)
                        </label>
                        <input
                            type="text"
                            id="apartment"
                            placeholder="Apartment, suite, etc. (optional)"
                            name="apartment"
                            defaultValue={currentUser?.apartment}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {/* City */}
                            <div>
                                <label htmlFor="city" className="block text-gray-600 text-sm font-medium mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    name="city"
                                    defaultValue={currentUser?.city}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                                />
                            </div>

                            {/* Postal Code */}
                            <div>
                                <label htmlFor="postalCode" className="block text-gray-600 text-sm font-medium mb-1">
                                    Postal Code
                                </label>
                                <input
                                    type="number"
                                    id="postalCode"
                                    placeholder="Postal Code"
                                    name="postalCode"
                                    defaultValue={currentUser?.postalCode}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Country (Read-Only) */}
                        <label htmlFor="country" className="block text-gray-600 text-sm font-medium mb-1">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            value="Bangladesh"
                            readOnly
                            className="w-full p-3 mb-6 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed focus:outline-none"
                        />
                    </div>

                    {/* Photo Upload */}
                    <label htmlFor="photo" className="block text-gray-600 text-sm font-medium mb-1">
                        Upload Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                        className="w-full p-3 border border-gray-300 bg-gray-200 text-gray-600 rounded-lg cursor-pointer focus:outline-none"
                    />
                    {isUploading && (
                        <div className="mt-2 w-10 h-10 animate-spin rounded-full border-4 border-dashed border-sky-600"></div>
                    )}
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Uploaded"
                            className="mt-3 size-24 rounded"
                        />
                    )}

                    {/* Submit Button */}
                    <button
                        disabled={isUpdating}
                        className="w-full bg-purple text-white py-3 rounded-lg text-lg font-medium hover:bg-navyBlue transition mt-6"
                    >
                        {isUpdating ? "Updating..." : "Update Data"}
                    </button>
                </form>


            </div>

            <Newsletter />
        </div>
    );
};

export default Account;