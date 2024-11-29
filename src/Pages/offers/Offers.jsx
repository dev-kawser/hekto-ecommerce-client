import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";

const Offers = () => {

    const { data: offerProducts } = useQuery({
        queryKey: "offerProducts",
        queryFn: async () => {
            const response = await axiosPublic.get("/offerProducts")
            return response.data;
        }
    })

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
                                    to={`/product/${product?._id}`}
                                    className="text-lg group-hover:text-pink group-hover:underline font-bold text-gray-800 line-clamp-1 transition-all duration-150">
                                    {product.productTitle}
                                </Link>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-pink-500 font-bold mt-1">{product.price}</p>
                                    <p className="text-gray-400 line-through text-red">{product.originalPrice}</p>
                                </div>
                            </div>
                            {/* Icons */}
                            <div
                                className="absolute bottom-24 left-4 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-navyBlue">
                                <h5 className="bg-white rounded-full p-2">
                                    <Link
                                        title="Add to cart"><FiShoppingCart /></Link>
                                </h5>
                                <h5>
                                    <Link
                                        title="Add Wishlist"><IoIosHeartEmpty /></Link>
                                </h5>
                                <h5>
                                    <Link
                                        title="Product Details"
                                        to={`/product/${product?._id}`}><IoEyeOutline /></Link>
                                </h5>
                            </div>
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