/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import toast from "react-hot-toast";
import axiosPublic from "../../hooks/useAxiosPublic";
import useMyCarts from "../../hooks/useMyCarts";


const CardIcons = ({ product, offer, isInCart }) => {

    const { currentUser } = useCurrentUser();
    const { myCartsRefetch } = useMyCarts();

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
        <div
            className="absolute bottom-24 left-4 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-navyBlue">
            {/* <h5 className="bg-white rounded-full p-2 cursor-pointer" onClick={() => handleAddToCart(product)}>
                <FiShoppingCart />
            </h5> */}
            <h5 className={`bg-white rounded-full p-2 ${isInCart ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={() => !isInCart && handleAddToCart(product)}>
                <FiShoppingCart className={isInCart ? "text-gray-400" : ""} />
            </h5>
            <h5>
                <Link
                    title="Add Wishlist"><IoIosHeartEmpty /></Link>
            </h5>
            {
                offer === true
                    ?
                    <h5>
                        <Link
                            title="Product Details"
                            to={`/offerProduct/${product?._id}`}><IoEyeOutline /></Link>
                    </h5>
                    :
                    <h5>
                        <Link
                            title="Product Details"
                            to={`/product/${product?._id}`}><IoEyeOutline /></Link>
                    </h5>
            }

        </div>
    );
};

export default CardIcons;