import { useParams } from "react-router-dom";
import ProductDetailsSection from "../../components/forProducts/ProductDetailsSection"
import Newsletter from "../../components/Newsletter";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../ui/shared/Loading";
import NoDataFound from "../shared/NoDataFound";
import toast from "react-hot-toast";
import useCurrentUser from "../../hooks/useCurrentUser";
import useMyCarts from "../../hooks/useMyCarts";

const ProductDetails = () => {

    const { currentUser } = useCurrentUser();
    const { myCartsRefetch, myCarts } = useMyCarts();

    const { id } = useParams();

    const isInCart = myCarts?.some((cartItem) => cartItem?.cartData.productId === id);

    const { data: singleProduct, isLoading } = useQuery({
        queryKey: ["singleProduct"],
        queryFn: async () => {
            const response = await axiosPublic.get(`/products/${id}`);
            return response.data;
        }
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loading />
            </div>
        );
    }

    if (!singleProduct) {
        return <NoDataFound />
    }

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;

        const reviewData = {
            name,
            comment,
        }

        console.log(reviewData);
    };

    // Destructure product details
    const { _id, productTitle, price, originalPrice, bigDescription, img1, img2, img3, brand, category, discount, color } = singleProduct;

    // add to cart
    const handleAddToCart = () => {

        if (!currentUser) {
            toast.error("You need to be logged in to add products to cart!");
            return;
        }

        const cartData = {
            user: currentUser,
            email: currentUser.email,
            productId: _id,
            productTitle: productTitle,
            productImage: img1,
            productPrice: price,
            productQuantity: 1,
            date: new Date().toLocaleString(),
        }

        console.log(cartData);

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
        <>
            <div className="container mt-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex flex-col gap-5 lg:gap-7 relative overflow-hidden">
                        <img
                            src={img1}
                            alt={productTitle}
                            className="rounded-lg border p-3 object-cover size-56 lg:size-64 xl:size-80 mx-auto transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                        <div className="flex items-center mx-auto gap-5 lg:gap-7">
                            <img
                                src={img2}
                                alt={productTitle}
                                className="rounded-lg border p-3 object-cover size-32 lg:size-52 xl:size-72 transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                            <img
                                src={img3}
                                alt={productTitle}
                                className="rounded-lg border p-3 object-cover size-32 lg:size-52 xl:size-72 transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h1 className="text-2xl font-bold">{productTitle}</h1>
                        <p className="lato"><span className="text-navyBlue font-semibold">Brand:</span> {brand}</p>
                        <p className="lato"><span className="text-navyBlue font-semibold">Category:</span> {category}</p>
                        <p className="lato"><span className="text-navyBlue font-semibold">Color:</span> {color}</p>
                        <p className="text-lg font-semibold text-navyBlue">
                            Price: <span className="text-green-500">${price}</span>{" "}
                            <span className="line-through text-gray">
                                ${originalPrice}
                            </span>
                            <span className="text-red ml-2">-{discount}%</span>
                        </p>
                        <p className="text-navyBlue lato">{bigDescription}</p>

                        {/* Call to Action */}
                        <button
                            onClick={handleAddToCart}
                            disabled={isInCart}
                            className={`px-6 py-2 rounded-lg transition-all duration-300 text-white ${isInCart ? "bg-gray cursor-not-allowed" : "bg-purple hover:bg-navyBlue"}`}>
                            {isInCart ? "Already in Cart" : "Add to Cart"}
                        </button>
                        <button
                            className="px-6 py-2 rounded-lg transition-all duration-300 text-white bg-purple hover:bg-navyBlue ml-2">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                <ProductDetailsSection product={singleProduct} />

                {/* review section */}
                <form onSubmit={handleSubmitReview} className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Add a Review</h3>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                    <textarea
                        placeholder="Your Comment"
                        name="comment"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="4"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-purple text-white rounded-lg hover:bg-navyBlue transition-all duration-300"
                    >
                        Submit Review
                    </button>
                </form>

            </div>
            <Newsletter />
        </>

    );
};

export default ProductDetails;