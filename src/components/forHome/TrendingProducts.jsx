import SectionTitle from "../../ui/shared/SectionTitle";
import TrendingCard from "../../ui/shared/TrendingCard";
import UnderlineButton from "../../ui/shared/UnderlineButton";

const TrendingProducts = () => {
    return (
        <div className="container lg:mb-10 mb-5">
            <SectionTitle title={"Trending Products"} />
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {products.map(product => (
                    <TrendingCard key={product.id} product={product} />
                ))}
            </div>

            <div className="xl:grid lg:grid md:grid hidden xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">

                <div className="flex lg:flex-row md:flex-row flex-col items-center col-span-3 gap-5">
                    {underProducts.slice(0, 2).map((item, index) => (
                        <div key={index} className="bg-lightPurple p-5 flex-1">
                            <h4 className="font-semibold text-navyBlue">{item.discount}</h4>
                            <UnderlineButton title={"View Collection"} />
                            <div className="flex justify-end">
                                <img src="https://i.ibb.co.com/pJKVWvX/image-1162.png" alt="" />
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex flex-col gap-3 col-span-1">
                    {underProducts.slice(2).map((item, index) => (
                        item.discount ? (
                            <div key={index} className="flex gap-4 items-center">
                                <h5 className="font-semibold text-navyBlue">{item.discount}</h5>
                            </div>
                        ) : (
                            <div key={index} className="flex gap-4 items-center">
                                <img
                                    className="card-img-bg p-2 h-[90px] w-[90px]"
                                    src={item.image}
                                    alt={item.name} />
                                <div>
                                    <h5 className="font-semibold text-navyBlue">{item.name}</h5>
                                    <h6 className="line-through">${item.originalPrice.toFixed(2)}</h6>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;

const products = [
    {
        "id": 1,
        "name": "Cantilever Chair",
        "price": 26.00,
        "originalPrice": 42.00,
        "image": "https://i.ibb.co.com/61NPGMZ/image-1171.png"
    },
    {
        "id": 2,
        "name": "Modern Sofa",
        "price": 450.00,
        "originalPrice": 600.00,
        "image": "https://i.ibb.co.com/61NPGMZ/image-1171.png"
    },
    {
        "id": 3,
        "name": "Wooden Table",
        "price": 150.00,
        "originalPrice": 200.00,
        "image": "https://i.ibb.co.com/61NPGMZ/image-1171.png"
    },
    {
        "id": 4,
        "name": "Stylish Lamp",
        "price": 90.00,
        "originalPrice": 90.00,
        "image": "https://i.ibb.co.com/61NPGMZ/image-1171.png"
    }
];

const underProducts = [
    {
        "discount": "20% off on all items"
    },
    {
        "discount": "10% off on all items"
    },
    {
        "name": "Executive Seat Chair",
        "originalPrice": 32.00,
        "image": "https://i.ibb.co.com/HDs9Bq0/image-30.png"
    },
    {
        "name": "Premium Desk",
        "originalPrice": 150.00,
        "image": "https://i.ibb.co.com/HDs9Bq0/image-30.png"
    },
    {
        "name": "Designer Bookshelf",
        "originalPrice": 120.00,
        "image": "https://i.ibb.co.com/HDs9Bq0/image-30.png"
    }
];
