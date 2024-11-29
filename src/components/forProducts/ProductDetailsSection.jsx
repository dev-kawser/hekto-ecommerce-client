/* eslint-disable react/prop-types */
import { useState } from "react";

function ProductDetailsSection({product}) {

    const [activeTab, setActiveTab] = useState("description");
    console.log(product);

    const tabData = {
        description: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Varius tempor.</h2>
                <p className="text-sm text-gray-700">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel
                    sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
                </p>
                <p className="text-sm text-gray-700">
                    Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius
                    proin sed urna, egestas consequat lorem diam tincidunt. Magna eget faucibus cras
                    justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis
                    justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.
                </p>

                <h3 className="text-lg font-semibold mt-6">More details</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>→ Aliquam dis vulputate vulputate integer sagittis.</li>
                    <li>→ Faucibus diam arcu, nulla lobortis justo netus dis.</li>
                    <li>→ Eu in fringilla vulputate nunc nec.</li>
                    <li>→ Dui, massa viverra.</li>
                    <li>→ Aliquam dis vulputate vulputate integer sagittis.</li>
                </ul>
            </div>
        ),
        additionalInfo: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Additional Information</h2>
                <p className="text-sm text-gray-700">
                    This product is made with high-quality materials and ensures durability.
                </p>
                <p className="text-sm text-gray-700">
                    Specifications:
                    <ul className="list-disc pl-6">
                        <li>Weight: 1.2kg</li>
                        <li>Dimensions: 10x15x20 cm</li>
                        <li>Material: Aluminum</li>
                        <li>Warranty: 1 Year</li>
                    </ul>
                </p>
            </div>
        ),
        reviews: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Customer Reviews</h2>
                <p className="text-sm text-gray-700">
                    ★★★★☆ - &quot;Great product! Highly recommend it.&quot; - Jane Doe
                </p>
                <p className="text-sm text-gray-700">
                    ★★★☆☆ - &quot;Good, but could be improved in terms of packaging.&quot; - John Smith
                </p>
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
