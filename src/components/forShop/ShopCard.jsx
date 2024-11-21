import { Link } from "react-router-dom";

const ShopCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 group flex flex-col">
            <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <Link className="text-lg font-bold mb-2 group-hover:text-pink group-hover:underline transition-all duration-300 line-clamp-1">
                Product Title
            </Link>
            <p className="text-sm text-gray-500 mb-4 lato line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">$30.00</span>
                <span className="line-through text-sm text-gray-400">$50.00</span>
            </div>
            <Link className="w-full">
                <button className="bg-purple hover:bg-offPurple transition-all duration-300 text-white py-2 px-8 rounded gap-2 w-full">
                    Add To Cart
                </button>
            </Link>
        </div>
    );
};

export default ShopCard;
