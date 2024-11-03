import FeatureCard from "../../ui/shared/FeatureCard";
import SectionTitle from "../../ui/shared/SectionTitle";



const FeaturedProducts = () => {

    return (
        <div className="container">
            <SectionTitle title={"Featured Products"} />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {data?.map((product) => (
                    <FeatureCard key={product.code} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;

const data = [
    {
        "name": "Stylish Watch",
        "image": "https://i.ibb.co.com/FHrSCq0/1562173100-movado-connect-1562173094-2.png",
        "code": "W123",
        "price": 199.99
    },
    {
        "name": "Headphone",
        "image": "https://i.ibb.co.com/f9M8BK4/purepng-1.png",
        "code": "H456",
        "price": 299.99
    },
    {
        "name": "4K DSLR Camera",
        "image": "https://i.ibb.co.com/yPtwKhW/cam-2.png",
        "code": "C789",
        "price": 799.99
    },
    {
        "name": "Cantilever chair",
        "image": "https://i.ibb.co.com/kggnvKM/image-1168.png",
        "code": "F012",
        "price": 199.99
    }
]