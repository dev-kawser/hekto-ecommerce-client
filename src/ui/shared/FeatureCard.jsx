/* eslint-disable react/prop-types */
import { GrSearch } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const FeatureCard = ({product}) => {
    return (
        <div className="flex flex-col p-3 shadow-md outline-none relative group">
            <div className="bg-lightPurple px-5 py-10">
                <img className="w-[180px] h-[180px] mx-auto" src={product?.image} alt="" />
            </div>
            <div className="text-center px-3 py-4 space-y-2 group-hover:bg-blue transition-all duration-500">
                <h4 className="text-pink group-hover:text-white">
                    {product?.name}
                </h4>
                <img className="mx-auto" src="https://i.ibb.co.com/3FsjD9S/Group-141.png" alt="" />
                <h6 className="group-hover:text-white">
                    {product?.code}
                </h6>
                <h6 className="group-hover:text-white">
                    ${product?.price}
                </h6>
            </div>

            {/* icons */}
            <div className="absolute top-4 left-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h5 className="card-img-bg rounded-full p-2">
                    <Link><FiShoppingCart /></Link>
                </h5>
                <h5>
                    <Link><IoIosHeartEmpty /></Link>
                </h5>
                <h5>
                    <Link><GrSearch /></Link>
                </h5>
            </div>
        </div>
    );
};

export default FeatureCard;