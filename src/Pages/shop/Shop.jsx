import TinnyBanner from "../../ui/shared/TinnyBanner";
import { Link } from "react-router-dom";

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
                            {/* Example Product Card */}
                            <div className="bg-white shadow-md rounded-lg p-5">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link className="text-lg font-bold mb-2">Product Title</Link>
                                <p className="text-sm text-gray-500 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-lg font-bold text-blue-600">$30.00</span>
                                    <span className="line-through text-sm text-gray-400">$50.00</span>
                                </div>
                                <Link className="">
                                    <button className="bg-purple hover:bg-offPurple transition-all duration-300  text-white py-2 px-8 rounded gap-2 w-full">
                                        Add To Cart
                                    </button>
                                </Link>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-5">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link className="text-lg font-bold mb-2">Product Title</Link>
                                <p className="text-sm text-gray-500 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-lg font-bold text-blue-600">$30.00</span>
                                    <span className="line-through text-sm text-gray-400">$50.00</span>
                                </div>
                                <Link className="">
                                    <button className="bg-purple hover:bg-offPurple transition-all duration-300  text-white py-2 px-8 rounded gap-2 w-full">
                                        Add To Cart
                                    </button>
                                </Link>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-5">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <Link className="text-lg font-bold mb-2">Product Title</Link>
                                <p className="text-sm text-gray-500 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-lg font-bold text-blue-600">$30.00</span>
                                    <span className="line-through text-sm text-gray-400">$50.00</span>
                                </div>
                                <Link className="">
                                    <button className="bg-purple hover:bg-offPurple transition-all duration-300  text-white py-2 px-8 rounded gap-2 w-full">
                                        Add To Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
