/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
    // Destructure product details
    const { _id, productTitle, price, originalPrice, shortDescription, img1 } = product;

    return (
        <div className="bg-white shadow-md rounded-lg p-5 group flex flex-col">
            <div className="lg:size-48 md:size-40 size-32 mx-auto mb-4">
                <img
                    src={img1 || "https://via.placeholder.com/150"}
                    alt={productTitle}
                    className="size-full mx-auto object-cover rounded-md"
                />
            </div>

            <Link
                to={`/product/${_id}`}
                className="text-lg font-bold mb-2 group-hover:text-pink group-hover:underline transition-all duration-150 line-clamp-1"
            >
                {productTitle}
            </Link>

            <p className="text-sm text-gray-500 mb-4 lato line-clamp-2">
                {shortDescription || "No description available."}
            </p>

            <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">${price}</span>
                {originalPrice && (
                    <span className="line-through text-sm text-gray-400">${originalPrice}</span>
                )}
            </div>

            <Link className="w-full">
                <button className="bg-purple hover:bg-offPurple transition-all duration-300 text-white py-1 lg:py-2 lg:px-8 px-3 rounded gap-2 w-full">
                    Add To Cart
                </button>
            </Link>
        </div>
    );
};


export default ShopCard;
