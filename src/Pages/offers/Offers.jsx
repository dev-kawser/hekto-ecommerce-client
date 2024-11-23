import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const Offers = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get current page products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white hover:bg-softGreen p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative group"
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="size-40 object-cover mx-auto rounded-t-lg"
                            />
                            {/* Product Info */}
                            <div className="mt-4 text-center">
                                <Link className="text-lg group-hover:text-pink group-hover:underline font-bold text-gray-800 line-clamp-1 transition-all duration-150">
                                    {product.name}
                                </Link>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-pink-500 font-bold mt-1">{product.price}</p>
                                    <p className="text-gray-400 line-through text-red">{product.oldPrice}</p>
                                </div>
                            </div>
                            {/* Icons */}
                            <div
                                className="absolute bottom-24 left-4 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-navyBlue">
                                <h5 className="bg-white rounded-full p-2">
                                    <Link><FiShoppingCart /></Link>
                                </h5>
                                <h5>
                                    <Link><IoIosHeartEmpty /></Link>
                                </h5>
                                <h5>
                                    <Link><IoEyeOutline /></Link>
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

const products = [
    {
        id: 1,
        name: "Vel elit euismod",
        price: "$30.00",
        oldPrice: "$40.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 2,
        name: "Ultricies condimentum imperdiet",
        price: "$25.00",
        oldPrice: "$35.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 3,
        name: "Vitae suspendisse sed",
        price: "$20.00",
        oldPrice: "$30.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 4,
        name: "Sed at fermentum",
        price: "$28.00",
        oldPrice: "$38.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 5,
        name: "Fusce pellentesque ut",
        price: "$25.00",
        oldPrice: "$35.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 6,
        name: "Vestibulum magna laoreet",
        price: "$26.00",
        oldPrice: "$36.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 7,
        name: "Sollicitudin amet orci",
        price: "$30.00",
        oldPrice: "$40.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 8,
        name: "Ultrices mauris sit",
        price: "$35.00",
        oldPrice: "$45.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 9,
        name: "Pellentesque condimentum ac",
        price: "$24.00",
        oldPrice: "$34.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 10,
        name: "Cras scelerisque velit",
        price: "$32.00",
        oldPrice: "$42.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 11,
        name: "Lectus volutpat faucibus",
        price: "$29.00",
        oldPrice: "$39.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 12,
        name: "Purus risus, ut",
        price: "$28.00",
        oldPrice: "$38.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 13,
        name: "Cras scelerisque velit",
        price: "$32.00",
        oldPrice: "$42.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 14,
        name: "Lectus volutpat faucibus",
        price: "$29.00",
        oldPrice: "$39.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
    {
        id: 15,
        name: "Purus risus, ut",
        price: "$28.00",
        oldPrice: "$38.00",
        image: "https://i.ibb.co.com/gjhHR71/10011-1.png",
    },
];