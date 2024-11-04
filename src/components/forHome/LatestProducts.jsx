import { useState } from "react";
import LatestCard from "../../ui/shared/LatestCard";
import SectionTitle from "../../ui/shared/SectionTitle";

const LatestProducts = () => {
    const [activeTab, setActiveTab] = useState("new arrival");

    const filteredProducts = productData.filter(product => product.category === activeTab);

    return (
        <div className="container">
            <SectionTitle title={"Latest Products"} />

            {/* Tabs */}
            <div className="flex justify-center items-center space-x-14 mb-5 lato">
                <button onClick={() => setActiveTab("new arrival")} className={`tab ${activeTab === "new arrival" ? "text-pink underline" : ""}`}>
                    New Arrival
                </button>
                <button onClick={() => setActiveTab("best seller")} className={`tab ${activeTab === "best seller" ? "text-pink underline" : ""}`}>
                    Best Seller
                </button>
                <button onClick={() => setActiveTab("special offer")} className={`tab ${activeTab === "special offer" ? "text-pink underline" : ""}`}>
                    Special Offer
                </button>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {filteredProducts?.map((product, index) => (
                    <LatestCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;


const productData = [
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Comfort Handy Craft",
        offerPrice: "$42.00",
        price: "$65.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Stylish Backpack",
        offerPrice: "$50.00",
        price: "$80.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Modern Desk Lamp",
        offerPrice: "$30.00",
        price: "$45.00",
        category: "special offer"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Classic Watch",
        offerPrice: "$99.00",
        price: "$120.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Leather Wallet",
        offerPrice: "$35.00",
        price: "$50.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Bluetooth Headphones",
        offerPrice: "$75.00",
        price: "$100.00",
        category: "special offer"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Yoga Mat",
        offerPrice: "$25.00",
        price: "$40.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Fitness Tracker",
        offerPrice: "$60.00",
        price: "$90.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Coffee Maker",
        offerPrice: "$45.00",
        price: "$70.00",
        category: "special offer"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Smartphone Case",
        offerPrice: "$15.00",
        price: "$25.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Gaming Mouse",
        offerPrice: "$55.00",
        price: "$80.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Electric Kettle",
        offerPrice: "$30.00",
        price: "$50.00",
        category: "special offer"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Travel Mug",
        offerPrice: "$20.00",
        price: "$35.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Portable Charger",
        offerPrice: "$40.00",
        price: "$60.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Laptop Stand",
        offerPrice: "$50.00",
        price: "$70.00",
        category: "special offer"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Portable Speaker",
        offerPrice: "$60.00",
        price: "$90.00",
        category: "new arrival"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Action Camera",
        offerPrice: "$150.00",
        price: "$200.00",
        category: "best seller"
    },
    {
        image: "https://i.ibb.co.com/10wPBzz/image-1166.png",
        name: "Wireless Keyboard",
        offerPrice: "$40.00",
        price: "$60.00",
        category: "special offer"
    }
];
