import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailsSection from "../../components/forProducts/ProductDetailsSection"
import Newsletter from "../../components/Newsletter";

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // UseEffect to find the product details based on ID
    useEffect(() => {
        const findProduct = () => {
            const productId = parseInt(id);
            const foundProduct = sampleProducts.find((item) => item.id === productId);
            setProduct(foundProduct || null);
        };

        findProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Product not found!</p>
            </div>
        );
    }

    // Destructure product details
    const { name, price, originalPrice, description, imageUrl, brand, category, discount, color } = product;

    return (
        <>
            <div className="container mt-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="rounded-lg shadow-lg object-cover w-full"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-sm text-navyBlue">Brand: {brand}</p>
                        <p className="text-sm text-navyBlue">Category: {category}</p>
                        <p className="text-sm text-navyBlue">Color: {color}</p>
                        <p className="text-lg font-medium text-navyBlue">
                            Price: <span className="text-green-500">${price.toFixed(2)}</span>{" "}
                            <span className="line-through text-gray">
                                ${originalPrice.toFixed(2)}
                            </span>
                            <span className="text-red ml-2">-{discount}%</span>
                        </p>
                        <p className="text-navyBlue lato">{description}</p>

                        {/* Call to Action */}
                        <button className="px-6 py-2 bg-purple text-white rounded-lg hover:bg-navyBlue transition-all duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <ProductDetailsSection />

            </div>
            <Newsletter />
        </>

    );
};

export default ProductDetails;


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