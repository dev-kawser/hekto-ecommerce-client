/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopCategoryCard = ({ category }) => {
    return (
        <div className="flex flex-col items-center gap-5 group relative">
            <div className="bg-lightPurple group-hover:border-l-4 border-navyBlue rounded-full mx-auto p-9 transition-all duration-100">
                <img className="size-[160px]" src={category?.image} alt={category?.name} />
            </div>
            <div className="space-y-1 text-center">
                <h4>{category?.name}</h4>
                <h5>{category?.price}</h5>
            </div>
            <Link
                className="bg-navyBlue text-white px-2 py-1 opacity-0 absolute group-hover:opacity-100 bottom-24 transition-all duration-500">
                View Shop
            </Link>
        </div>
    );
};

export default TopCategoryCard;
