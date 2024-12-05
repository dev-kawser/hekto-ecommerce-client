import { useState, useEffect } from "react";
import ProductsCard from "../../components/forProducts/ProductsCard";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { IoMdClose } from "react-icons/io";
import Newsletter from "../../components/Newsletter";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import NoDataFound from "../shared/NoDataFound";

const Shop = () => {

    const { data: allProducts } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const response = await axiosPublic.get("/products")
            return response.data;
        }
    })

    const sortedProducts = allProducts?.sort(
        (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate)
    );

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(sortedProducts);
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
        price: [],
        color: [],
        discount: [],
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const toggleFilterSidebar = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters((prev) => {
            const updatedFilter = prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value];

            return { ...prev, [filterType]: updatedFilter };
        });
    };

    useEffect(() => {
        // Detect window width and set items per page dynamically
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setItemsPerPage(8); // XL device and larger
            } else if (width >= 768) {
                setItemsPerPage(6); // Medium devices (Tablet)
            } else {
                setItemsPerPage(8); // Mobile devices
            }
        };

        // Call handleResize on initial render
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        let filtered = sortedProducts;

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply filters dynamically
        if (filters.brand.length > 0) {
            filtered = filtered.filter((product) =>
                filters.brand.includes(product.brand)
            );
        }

        if (filters.category.length > 0) {
            filtered = filtered.filter((product) =>
                filters.category.includes(product.category)
            );
        }

        if (filters.price.length > 0) {
            const [min, max] = filters.price[0].split("-").map(Number);
            filtered = filtered.filter((product) => product.price >= min && product.price <= max);
        }

        if (filters.discount.length > 0) {
            const minDiscount = parseInt(filters.discount[0]);
            filtered = filtered.filter((product) => product.discount >= minDiscount);
        }

        setFilteredProducts(filtered);
    }, [sortedProducts, filters, searchQuery]);

    const FilterSection = () => {
        // Extract unique filter options dynamically from product data
        const brands = [...new Set(sortedProducts?.map((product) => product.brand))];
        const categories = [...new Set(sortedProducts?.map((product) => product.category))];
        const discounts = [...new Set(sortedProducts?.map((product) => product.discount))];
        const priceRanges = ["0-100", "101-200", "201-300", "300-400"];

        return (
            <>
                {/* Brand Filter */}
                <h3 className="lg:text-xl text-lg font-bold mb-4 underline">Product Brand</h3>
                <ul className="space-y-2 lg:max-h-52 md:max-h-96 max-h-24 overflow-y-auto lato">
                    {brands.map((brand) => (
                        <li key={brand}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleFilterChange("brand", brand)}
                                    checked={filters.brand.includes(brand)}
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>

                {/* Category Filter */}
                <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Product Category</h3>
                <ul className="space-y-2 lg:max-h-52 md:max-h-96 max-h-40 overflow-y-auto lato">
                    {categories.map((category) => (
                        <li key={category}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleFilterChange("category", category)}
                                    checked={filters.category.includes(category)}
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>

                {/* Discount Filter */}
                <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Discount Offer</h3>
                <ul className="space-y-2 lg:max-h-32 md:max-h-32 max-h-20 overflow-y-auto lato">
                    {discounts.map((discount) => (
                        <li key={discount}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleFilterChange("discount", discount)}
                                    checked={filters.discount.includes(discount)}
                                />
                                {discount}% or more
                            </label>
                        </li>
                    ))}
                </ul>

                {/* Price Range Filter */}
                <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Price Filter</h3>
                <ul className="space-y-2 lg:max-h-36 md:max-h-36 max-h-20 overflow-y-auto lato">
                    {priceRanges.map((range) => (
                        <li key={range}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleFilterChange("price", range)}
                                    checked={filters.price.includes(range)}
                                />
                                ${range.replace("-", " - $")}
                            </label>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);


    if (!sortedProducts?.length > 0) return <NoDataFound />;

    return (
        <div>
            <TinnyBanner title={"Products Page"} />
            <div className="container mx-auto px-4">
                <div className="mt-7 lg:mt-16 flex gap-10 flex-col md:flex-row relative">
                    {/* Mobile Sidebar */}
                    <div
                        className={`${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                            } md:hidden fixed top-0 left-0 max-h-screen w-64 bg-white shadow-md p-5 rounded-lg transition-transform duration-300 z-50 pt-10 overflow-y-auto`}
                    >
                        <button
                            className="absolute top-4 right-4 text-2xl text-gray"
                            onClick={toggleFilterSidebar}
                        >
                            <IoMdClose />
                        </button>
                        <FilterSection />
                    </div>

                    {/* Left Sidebar for Tablet and Larger Screens */}
                    <div className="hidden md:block w-1/4 bg-white shadow-md p-5 rounded-lg min-h-screen overflow-y-auto">
                        <FilterSection />
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full md:w-3/4 lg:w-3/4">
                        {/* Search Box */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="lg:w-full md:w-full w-3/4">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                className="lg:hidden md:hidden w-1/4 bg-navyBlue text-white p-3 rounded-lg"
                                onClick={toggleFilterSidebar}
                            >
                                Filter
                            </button>
                        </div>

                        {/* Product List */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
                            {
                                currentProducts?.map((product) => (
                                    <ProductsCard key={product._id} product={product} />
                                ))
                            }
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-8">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 mx-1 border rounded-md ${currentPage === index + 1
                                            ? "bg-blue text-white"
                                            : "bg-white text-gray"
                                            }`}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Newsletter />
        </div>
    );
};

export default Shop;
