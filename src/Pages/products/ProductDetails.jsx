import { useParams } from "react-router-dom";
import ProductDetailsSection from "../../components/forProducts/ProductDetailsSection"
import Newsletter from "../../components/Newsletter";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../ui/shared/Loading";

const ProductDetails = () => {

    const { id } = useParams();

    const { data: singleProduct, isLoading } = useQuery({
        queryKey: "singleProduct",
        queryFn: async () => {
            const response = await axiosPublic.get(`/offerProducts/${id}`);
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
        return (
            <div className="flex justify-center items-center h-screen">
                <h3>Product not found!</h3>
            </div>
        );
    }

    // Destructure product details
    const { productTitle, price, originalPrice, shortDescription, img1, img2, img3, brand, category, discount, color } = singleProduct;

    return (
        <>
            <div className="container mt-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 flex flex-col gap-5 lg:gap-7 relative overflow-hidden">
                        <img
                            src={img1}
                            alt={productTitle}
                            className="rounded-lg border p-3 object-cover w-56 lg:w-64 xl:w-80 mx-auto transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                        <div className="flex items-center mx-auto gap-5 lg:gap-7">
                            <img
                                src={img2}
                                alt={productTitle}
                                className="rounded-lg border p-3 object-cover w-32 lg:w-52 xl:w-72 transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                            <img
                                src={img3}
                                alt={productTitle}
                                className="rounded-lg border p-3 object-cover w-32 lg:w-52 xl:w-72 transition-transform duration-500 ease-in-out hover:scale-110"
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
                            Price: <span className="text-green-500">${price.toFixed(2)}</span>{" "}
                            <span className="line-through text-gray">
                                ${originalPrice.toFixed(2)}
                            </span>
                            <span className="text-red ml-2">-{discount}%</span>
                        </p>
                        <p className="text-navyBlue lato">{shortDescription}</p>

                        {/* Call to Action */}
                        <button className="px-6 py-2 bg-purple text-white rounded-lg hover:bg-navyBlue transition-all duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <ProductDetailsSection product={singleProduct} />

            </div>
            <Newsletter />
        </>

    );
};

export default ProductDetails;