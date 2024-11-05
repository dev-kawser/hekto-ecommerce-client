/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const LatestCard = ({ product }) => {
    return (
        <div className="flex flex-col p-3 shadow-md outline-none relative group">
            <div className="bg-lightPurple group-hover:bg-white px-5 py-10">
                <img className="w-[250px] h-[250px] mx-auto" src={product?.image} alt={product?.name} />
            </div>
            <div className="flex items-center justify-between px-3 py-4 space-y-2 transition-all duration-500">
                <h5 className="text-navyBlue">{product?.name}</h5>
                <div className="flex items-center gap-2">
                    <h5>{product?.offerPrice}</h5>
                    <h5 className="text-red line-through">{product?.price}</h5>
                </div>
            </div>

            {/* Sale Label */}
            <div className="absolute top-4 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="59" viewBox="0 0 87 59" fill="none">
                        <path d="M1.09968 44.7253C1.49968 50.3253 4.93301 55.7253 6.59968 57.7253C7.09975 52.2253 19.5996 48.7253 22.0996 48.7253C24.0996 48.7253 37.9329 44.7253 44.5996 42.7253C53.9329 39.7253 75.0996 32.6254 85.0996 28.2254C88.5996 10.7254 79.0996 -0.774631 78.5996 1.22537C78.1996 2.82537 65.7663 7.55868 59.5996 9.72535C47.4329 14.2253 21.0996 23.5253 13.0996 24.7253C5.09961 25.9253 2.43299 28.892 2.09968 30.2253C1.59968 32.7253 0.69968 39.1253 1.09968 44.7253Z" fill="#3F509E" stroke="#3F509E" />
                    </svg>
                    <h6 className="absolute top-5 left-7 -rotate-12 text-white font-semibold">Sale</h6>
                </div>
            </div>
            {/* Icons */}
            <div className="absolute bottom-24 left-4 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 text-navyBlue">
                <h5 className="card-img-bg rounded-full p-2">
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
    );
};

export default LatestCard;