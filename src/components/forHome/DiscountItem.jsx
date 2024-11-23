import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import SectionTitle from "../../ui/shared/SectionTitle";
import PrimaryButton from "../../ui/shared/PrimaryButton";

const DiscountItem = () => {
    const [activeTab, setActiveTab] = useState("woodenChair");

    return (
        <div className="container">
            <SectionTitle title={"Discount Items"} />

            {/* Tabs */}
            <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="flex justify-center items-center lg:space-x-14 space-x-10 mb-5 lato">
                <button
                    onClick={() => setActiveTab("woodenChair")}
                    className={`tab ${activeTab === "woodenChair" ? "text-pink underline" : ""}`}
                >
                    Wooden Chair
                </button>
                <button
                    onClick={() => setActiveTab("eamsSofa")}
                    className={`tab ${activeTab === "eamsSofa" ? "text-pink underline" : ""}`}
                >
                    Eams Sofa
                </button>
                <button
                    onClick={() => setActiveTab("modernTable")}
                    className={`tab ${activeTab === "modernTable" ? "text-pink underline" : ""}`}
                >
                    Modern Table
                </button>
            </div>

            <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-5 items-center justify-between">
                {productsData[activeTab].map((product, index) => (
                    <div key={index} className="max-w-xl">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500" className="space-y-2">
                            <h3 className="text-navyBlue xl:max-w-xl max-w-md">{product.title}</h3>
                            <h5 className="text-pink">{product.title}</h5>
                            <p className="lato">{product.description}</p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700" className="lato flex items-center gap-7 lg:my-5 my-3">
                            <div className="space-y-1">
                                {product.features.map((feature, index) => (
                                    <p key={index} className="flex items-center gap-1">
                                        <BiCheck />
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <PrimaryButton title={"Shop Now"} />
                    </div>
                ))}
                <div className="lg:card-img-bg lg:rounded-full">
                    <img className="lg:size-[420px] md:size-[350px]" src={productsData[activeTab][0].imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscountItem;

const productsData = {
    woodenChair: [
        {
            title: "20% Discount On Modern Wooden Chairs",
            description: "Stylish and comfortable wooden chairs for your home.",
            features: [
                "Natural wood finish",
                "Ergonomic design",
                "Durable and long-lasting",
            ],
            imageUrl: "https://i.ibb.co.com/Nt8GNgq/tortuga-01-b-1.png",
        },
    ],
    eamsSofa: [
        {
            title: "20% Discount On Eams Sofa Compact",
            description: "Elegant design meets comfort in this stylish sofa.",
            features: [
                "Material expose like metals",
                "Clear lines and geometric figures",
                "Simple neutral colors",
            ],
            imageUrl: "https://i.ibb.co.com/Nt8GNgq/tortuga-01-b-1.png",
        },
    ],
    modernTable: [
        {
            title: "20% Discount On Modern Dining Tables",
            description: "Perfect tables for dining with family and friends.",
            features: [
                "Sleek modern design",
                "High-quality materials",
                "Easy to clean",
            ],
            imageUrl: "https://i.ibb.co.com/Nt8GNgq/tortuga-01-b-1.png",
        },
    ],
};