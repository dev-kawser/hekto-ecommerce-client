import ShopCard from "../../components/forShop/ShopCard";
import TinnyBanner from "../../ui/shared/TinnyBanner";

const Shop = () => {
    return (
        <div>
            <TinnyBanner title={"Shop Page"} />
            <div className="container">
                <div className="mt-7 lg:mt-16 flex gap-10">
                    {/* Left Sidebar */}
                    <div className="w-1/4">
                        <div className="bg-white shadow-md p-5 rounded-lg">
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
                                {/* Add more filters */}
                            </ul>

                            <h3 className="text-xl font-bold mt-6 mb-4 underline">Discount Offer</h3>
                            <ul className="space-y-2">
                                <li>
                                    <label>
                                        <input type="checkbox" className="mr-2" />
                                        20% Cashback
                                    </label>
                                </li>
                                {/* Add more offers */}
                            </ul>

                            <h3 className="text-xl font-bold mt-6 mb-4 underline">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <label>
                                        <input type="checkbox" className="mr-2" />
                                        Bags
                                    </label>
                                </li>
                                {/* Add more categories */}
                            </ul>

                            <h3 className="text-xl font-bold mt-6 mb-4 underline">Price Filter</h3>
                            <ul className="space-y-2">
                                <li>
                                    <label>
                                        <input type="checkbox" className="mr-2" />
                                        $0.00 - $150.00
                                    </label>
                                </li>
                                {/* Add more price ranges */}
                            </ul>

                            {/* Filter by Color */}
                            <h3 className="text-xl font-bold mt-6 mb-4 underline">Filter By Color</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="block w-6 h-6 rounded-full bg-blue"></span>
                                <span className="block w-6 h-6 rounded-full bg-orange-500"></span>
                                <span className="block w-6 h-6 rounded-full bg-green-500"></span>
                                <span className="block w-6 h-6 rounded-full bg-purple"></span>
                                {/* Add more colors */}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="w-3/4">
                        {/* Search Box */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Product List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
