import { useState } from "react";
import ShopCard from "../../components/forShop/ShopCard";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { IoMdClose } from "react-icons/io";

const Shop = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false); // To toggle filter sidebar

    const toggleFilterSidebar = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div>
            <TinnyBanner title={"Shop Page"} />
            <div className="container mx-auto px-4">
                <div className="mt-7 lg:mt-16 flex gap-10 flex-col md:flex-row relative">

                    {/* Mobile Sidebar (Filter) */}
                    <div
                        className={`${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                            } md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-md p-5 rounded-lg transition-transform duration-300 z-50 pt-10`}
                    >
                        <button
                            className="absolute top-4 right-4 text-2xl text-gray"
                            onClick={toggleFilterSidebar}
                        >
                            <IoMdClose />
                        </button>

                        <h3 className="text-xl font-bold mb-4 underline">Product Brand</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Coaster Furniture
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Fusion Dot High Fashion
                                </label>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-4 underline">Discount Offer</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    20% Cashback
                                </label>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-4 underline">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Bags
                                </label>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-4 underline">Price Filter</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    $0.00 - $150.00
                                </label>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mt-6 mb-4 underline">Filter By Color</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="block w-6 h-6 rounded-full bg-blue"></span>
                            <span className="block w-6 h-6 rounded-full bg-orange-500"></span>
                            <span className="block w-6 h-6 rounded-full bg-green-500"></span>
                            <span className="block w-6 h-6 rounded-full bg-purple"></span>
                        </div>
                    </div>

                    {/* Left Sidebar for Tablet and Larger Screens */}
                    <div className="hidden md:block w-1/4 bg-white shadow-md p-5 rounded-lg">
                        <h3 className="lg:text-xl text-lg font-bold mb-4 underline">Product Brand</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Coaster Furniture
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Fusion Dot High Fashion
                                </label>
                            </li>
                        </ul>

                        <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Discount Offer</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    20% Cashback
                                </label>
                            </li>
                        </ul>

                        <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    Bags
                                </label>
                            </li>
                        </ul>

                        <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Price Filter</h3>
                        <ul className="space-y-2">
                            <li>
                                <label>
                                    <input type="checkbox" className="mr-2" />
                                    $0.00 - $150.00
                                </label>
                            </li>
                        </ul>

                        <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Filter By Color</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="block w-6 h-6 rounded-full bg-blue"></span>
                            <span className="block w-6 h-6 rounded-full bg-orange-500"></span>
                            <span className="block w-6 h-6 rounded-full bg-green-500"></span>
                            <span className="block w-6 h-6 rounded-full bg-purple"></span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full md:w-3/4 lg:w-3/4">
                        {/* Search Box */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="lg:w-full md:w-full w-3/4">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                className="lg:hidden md:hidden w-1/4 bg-navyBlue text-white p-3 rounded-lg"
                                onClick={toggleFilterSidebar}
                            >
                                Filter
                            </button>
                        </div>

                        {/* Product List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            {/* Add more ShopCard components as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
