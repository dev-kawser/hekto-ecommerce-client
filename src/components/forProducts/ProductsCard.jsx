/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
    const { id, name, price, originalPrice, description, imageUrl } = product;

    return (
        <div className="bg-white shadow-md rounded-lg p-5 group flex flex-col">
            <img
                src={imageUrl || "https://via.placeholder.com/150"}
                alt={name}
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <Link
                to={`/product/${id}`}
                className="text-lg font-bold mb-2 group-hover:text-pink group-hover:underline transition-all duration-300 line-clamp-1"
            >
                {name}
            </Link>

            <p className="text-sm text-gray-500 mb-4 lato line-clamp-2">
                {description || "No description available."}
            </p>

            <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">${price}</span>
                {originalPrice && (
                    <span className="line-through text-sm text-gray-400">${originalPrice}</span>
                )}
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
