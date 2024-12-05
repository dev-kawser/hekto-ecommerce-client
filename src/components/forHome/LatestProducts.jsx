import LatestCard from "../../ui/shared/LatestCard";
import SectionTitle from "../../ui/shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import useMyCarts from "../../hooks/useMyCarts";

const LatestProducts = () => {

    const { myCarts } = useMyCarts();

    const { data: allProducts } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const response = await axiosPublic.get("/products");
            return response.data;
        },
    });

    const sortedProducts = allProducts?.sort(
        (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate)
    );

    // Check if the product exists in the cart
    const isInCart = (productId) => myCarts?.some((cartItem) => cartItem?.cartData.productId === productId);

    return (
        <div className="container">
            <SectionTitle title={"Latest Products"} />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {sortedProducts?.slice(0,6).map((product, index) => (
                    <LatestCard key={index} product={product} isInCart={isInCart(product?._id)} />
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;
