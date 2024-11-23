import { useState, useEffect } from "react";
import ProductsCard from "../../components/forProducts/ProductsCard";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { IoMdClose } from "react-icons/io";
import Newsletter from "../../components/Newsletter";

const Shop = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
    const [filters, setFilters] = useState({
        brand: [],
        category: [],
        price: [],
        color: [],
        discount: [],
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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
        let filtered = sampleProducts;

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
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

        if (filters.color.length > 0) {
            filtered = filtered.filter((product) =>
                filters.color.includes(product.color)
            );
        }

        if (filters.discount.length > 0) {
            const minDiscount = parseInt(filters.discount[0]);
            filtered = filtered.filter((product) => product.discount >= minDiscount);
        }

        setFilteredProducts(filtered);
    }, [filters, searchQuery]);

    const FilterSection = () => {
        // Extract unique filter options dynamically from product data
        const brands = [...new Set(sampleProducts.map((product) => product.brand))];
        const categories = [...new Set(sampleProducts.map((product) => product.category))];
        const colors = [...new Set(sampleProducts.map((product) => product.color))];
        const discounts = [10, 20, 30, 40]; // Example discount tiers
        const priceRanges = ["0-100", "101-200", "201-300"]; // Example price ranges

        return (
            <>
                {/* Brand Filter */}
                <h3 className="lg:text-xl text-lg font-bold mb-4 underline">Product Brand</h3>
                <ul className="space-y-2 lg:max-h-52 max-h-24 overflow-y-auto">
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
                <ul className="space-y-2 lg:max-h-40 max-h-32 overflow-y-auto">
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
                <ul className="space-y-2 lg:max-h-32 max-h-20 overflow-y-auto">
                    {discounts.map((discount) => (
                        <li key={discount}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleFilterChange("discount", discount.toString())}
                                    checked={filters.discount.includes(discount.toString())}
                                />
                                {discount}% or more
                            </label>
                        </li>
                    ))}
                </ul>

                {/* Price Range Filter */}
                <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Price Filter</h3>
                <ul className="space-y-2 lg:max-h-32 max-h-20 overflow-y-auto">
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

                {/* Color Filter */}
                <h3 className="lg:text-xl text-lg font-bold mt-6 mb-4 underline">Filter By Color</h3>
                <div className="flex flex-wrap gap-2 max-h-10 overflow-y-auto">
                    {colors.map((color) => (
                        <span
                            key={color}
                            className={`block w-6 h-6 rounded-full cursor-pointer bg-${color}`}
                            onClick={() => handleFilterChange("color", color)}
                        ></span>
                    ))}
                </div>
            </>
        );
    };



    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div>
            <TinnyBanner title={"Shop Page"} />
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product) => (
                                    <ProductsCard key={product.id} product={product} />
                                ))
                            ) : (
                                <p>No products found.</p>
                            )}
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

const sampleProducts = [
    {
        id: 1,
        name: "Coaster Sofa",
        brand: "Coaster Furniture",
        category: "Sofa",
        price: 120,
        originalPrice: 150,
        color: "blue",
        discount: 10,
        description: "A comfortable and stylish sofa.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Fusion Chair",
        brand: "Fusion Dot High Fashion",
        category: "Chair",
        price: 80,
        originalPrice: 100,
        color: "blue",
        discount: 20,
        description: "Elegant chair for your living room.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Luxury Dining Table",
        brand: "Elite Home",
        category: "Dining",
        price: 250,
        color: "pink",
        discount: 10,
        originalPrice: 300,
        description: "A luxurious dining table made from solid oak.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Modern Office Desk",
        brand: "TechSpace",
        category: "Office",
        price: 150,
        color: "blue",
        discount: 10,
        originalPrice: 180,
        description: "Sleek and minimalistic office desk for your workspace.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Adjustable Bed Frame",
        brand: "SleepWell",
        category: "Bedroom",
        price: 450,
        color: "purple",
        discount: 30,
        originalPrice: 600,
        description: "Comfortable and adjustable bed frame for ultimate relaxation.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Bean Bag Chair",
        brand: "ComfySeats",
        category: "Chair",
        price: 45,
        color: "blue",
        discount: 10,
        originalPrice: 60,
        description: "Cozy bean bag chair for lounging.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        name: "Executive Office Chair",
        brand: "OfficePro",
        category: "Chair",
        price: 180,
        color: "blue",
        discount: 30,
        originalPrice: 220,
        description: "Comfortable and ergonomic chair for long hours of work.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        name: "Folding Table",
        brand: "Portable Home",
        category: "Furniture",
        price: 60,
        color: "purple",
        discount: 10,
        originalPrice: 80,
        description: "Compact folding table for outdoor or small spaces.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        name: "Wall-Mounted Bookshelf",
        brand: "HomeDeco",
        category: "Storage",
        price: 70,
        color: "pink",
        discount: 20,
        originalPrice: 100,
        description: "Space-saving wall-mounted bookshelf for your home office or living room.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        name: "Vintage Armchair",
        brand: "RetroLiving",
        category: "Chair",
        price: 180,
        color: "red",
        discount: 20,
        originalPrice: 230,
        description: "Classic vintage armchair with plush cushions.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 11,
        name: "Outdoor Patio Set",
        brand: "GardenComfort",
        category: "Outdoor",
        price: 500,
        color: "purple",
        discount: 10,
        originalPrice: 600,
        description: "Stylish outdoor patio set for your garden or balcony.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 12,
        name: "King Size Mattress",
        brand: "SleepTight",
        category: "Bedroom",
        price: 350,
        color: "pink",
        discount: 10,
        originalPrice: 450,
        description: "A luxurious king-size mattress for restful sleep.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 13,
        name: "Minimalist Coffee Table",
        brand: "ModernLife",
        category: "Living Room",
        price: 120,
        color: "pink",
        discount: 40,
        originalPrice: 150,
        description: "A simple, minimalist coffee table to enhance your living room.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 14,
        name: "Compact Nightstand",
        brand: "NightGlow",
        category: "Bedroom",
        price: 50,
        color: "pink",
        discount: 30,
        originalPrice: 75,
        description: "Compact nightstand with two drawers for extra storage.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 15,
        name: "Dining Room Set",
        brand: "WoodCraft",
        category: "Dining",
        price: 500,
        color: "blue",
        discount: 20,
        originalPrice: 600,
        description: "Complete dining room set with table and six chairs.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 16,
        name: "Modern Recliner Chair",
        brand: "RelaxCo",
        category: "Chair",
        price: 250,
        color: "purple",
        discount: 20,
        originalPrice: 300,
        description: "Modern recliner with adjustable headrest and footrest.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 17,
        name: "Sleek TV Stand",
        brand: "TechStyle",
        category: "Living Room",
        price: 150,
        color: "red",
        discount: 10,
        originalPrice: 180,
        description: "Sleek and modern TV stand for your home entertainment setup.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 18,
        name: "Outdoor Hammock",
        brand: "RelaxOutdoor",
        category: "Outdoor",
        price: 100,
        color: "purple",
        discount: 30,
        originalPrice: 120,
        description: "Comfortable outdoor hammock for lounging in your garden.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 19,
        name: "Wooden Wardrobe",
        brand: "Classic Home",
        category: "Storage",
        price: 350,
        color: "red",
        discount: 40,
        originalPrice: 400,
        description: "Sturdy wooden wardrobe for storing your clothes.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 20,
        name: "LED Desk Lamp",
        brand: "LightTech",
        category: "Lighting",
        price: 30,
        color: "blue",
        discount: 40,
        originalPrice: 40,
        description: "Energy-efficient LED desk lamp with adjustable brightness.",
        imageUrl: "https://via.placeholder.com/150",
    }
];
