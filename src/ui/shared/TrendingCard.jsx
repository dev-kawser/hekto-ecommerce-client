/* eslint-disable react/prop-types */

const TrendingCard = ({ product }) => {
    return (
        <div className="shadow-md px-2 text-center">
            <div className="card-img-bg px-5 py-10 flex items-center justify-center">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="my-3">
                <h5 className="font-bold">{product.name}</h5>
                <div className="flex items-center justify-center gap-2 mt-1">
                    <h6>${product.price.toFixed(2)} </h6>
                    <h6 className="text-lightGray line-through">${product.originalPrice.toFixed(2)}</h6>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;
