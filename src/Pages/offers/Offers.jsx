import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import CardIcons from "../../ui/shared/CardIcons";
import useMyCarts from "../../hooks/useMyCarts";

const Offers = () => {

    const { myCarts } = useMyCarts();

    const { data: offerProducts } = useQuery({
        queryKey: ["offerProducts"],
        queryFn: async () => {
            const response = await axiosPublic.get("/offerProducts")
            return response.data;
        }
    })

    // Check if the product exists in the cart
    const isInCart = (productId) => myCarts?.some((cartItem) => cartItem?.cartData.productId === productId);

    // Sort products by publicationDate in descending order (recent first)
    const sortedProducts = offerProducts?.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Calculate total pages
    const totalPages = Math.ceil(offerProducts?.length / productsPerPage);

    // Get current page products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"Offers Page"} />

            {/* Offers Section */}
            <div className="container mt-10 lg:mt-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                    {currentProducts?.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white hover:bg-softGreen p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative group"
                        >
                            {/* Product Image */}
                            <img
                                src={product.img1}
                                alt={product.productTitle}
                                className="size-40 object-cover mx-auto rounded-t-lg"
                            />
                            {/* Product Info */}
                            <div className="mt-4 text-center">
                                <Link
                                    to={`/offerProduct/${product?._id}`}
                                    className="text-lg group-hover:text-pink group-hover:underline font-bold text-gray-800 line-clamp-1 transition-all duration-150">
                                    {product.productTitle}
                                </Link>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-pink-500 font-bold mt-1">{product.price}</p>
                                    <p className="text-gray-400 line-through text-red">{product.originalPrice}</p>
                                </div>
                            </div>
                            {/* Icons */}
                            <CardIcons offer={true} product={product} isInCart={isInCart(product._id)} />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`px-4 py-2 mx-1 border rounded-md ${currentPage === index + 1
                                ? "bg-blue text-white"
                                : "bg-white text-gray"
                                }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Offers;