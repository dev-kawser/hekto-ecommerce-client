/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useCurrentUser from "../../hooks/useCurrentUser";
import useMyCarts from "../../hooks/useMyCarts";

const ShopCard = ({ product }) => {
    // Destructure product details
    const { _id, productTitle, price, originalPrice, shortDescription, img1 } = product;

    const { currentUser } = useCurrentUser();
    const { myCartsRefetch, myCarts } = useMyCarts();

    const isInCart = myCarts?.some((cartItem) => cartItem?.cartData.productId === _id);

    // add to cart
    const handleAddToCart = (product) => {

        if (!currentUser) {
            toast.error("You need to be logged in to add products to cart!");
            return;
        }

        const cartData = {
            user: currentUser,
            email: currentUser.email,
            productId: product._id,
            productTitle: product.productTitle,
            productImage: product.img1,
            productPrice: product.price,
            productQuantity: 1,
            date: new Date().toLocaleDateString(),
        }

        axiosPublic.post("/carts", { cartData })
            .then((res) => {
                if (res.data) {
                    toast.success("Product added to cart successfully!");
                    myCartsRefetch();
                }
            })
            .catch((error) => {
                console.error("Error adding product to cart:", error);
            });
    };

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
                <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart}
                    className={`lg:py-2 py-1 lg:px-8 px-3 rounded gap-2 w-full transition-all duration-300 text-white ${isInCart ? "bg-gray cursor-not-allowed" : "bg-purple hover:bg-offPurple"}`}>
                    {isInCart ? "Added" : "Add to Cart"}
                </button>
            </Link>
        </div>
    );
};


export default ShopCard;
