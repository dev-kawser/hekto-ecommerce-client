/* eslint-disable react/prop-types */
import { useState } from "react";

function ProductDetailsSection({ product }) {

    const [activeTab, setActiveTab] = useState("description");

    // Destructure product details
    const { productTitle, bigDescription, shortDescription, reviews, additionalInformation } = product;

    const tabData = {
        description: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">{productTitle}</h2>
                <p className="text-sm text-black">
                    {shortDescription}
                </p>
                <p className="text-sm text-black">
                    {bigDescription}
                </p>
            </div>
        ),
        additionalInfo: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Additional Information</h2>
                <p className="text-sm text-black">
                    {shortDescription}
                </p>
                <p className="text-sm text-black">
                    Specifications:
                    <ul className="list-disc pl-6">
                        {additionalInformation?.map((spec, index) => (
                            <li key={index}>
                                <strong>{spec.label}:</strong> {spec.value}
                            </li>
                        ))}
                    </ul>
                </p>
            </div>
        ),
        reviews: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Customer Reviews</h2>
                {
                    reviews?.map((review, idx) => (
                        <div key={idx} className="space-y-2">
                            <p className="text-sm text-black">{review.comment}</p>
                            <p className="text-sm text-navyBlue font-semibold">By - {review.name}</p>
                        </div>
                    ))
                }
            </div>
        ),
        video: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Product Video</h2>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/W3OAPhd1k2s?si=lQtq1JaTC-JqXNH6"
                    title="Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    };

    return (
        <div className="mt-16 border border-blue-300 rounded-lg p-6 text-navyBlue">
            {/* Tabs */}
            <div className="flex flex-wrap lg:justify-start justify-center gap-4 text-lg font-medium mb-4 border-b pb-2"
            >
                {["description", "additionalInfo", "reviews", "video"].map((tab) => (
                    <p
                        key={tab}
                        className={`cursor-pointer ${activeTab === tab ? "text-purple underline" : "hover:underline"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "description"
                            ? "Description"
                            : tab === "additionalInfo"
                                ? "Additional Info"
                                : tab === "reviews"
                                    ? "Reviews"
                                    : "Video"}
                    </p>
                ))}
            </div>

            {/* Content */}
            <div className="space-y-4 lato">{tabData[activeTab]}</div>
        </div>
    );
}

export default ProductDetailsSection;
