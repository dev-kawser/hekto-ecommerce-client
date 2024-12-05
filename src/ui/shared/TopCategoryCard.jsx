/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopCategoryCard = ({ category }) => {
    return (
        <div className="flex flex-col items-center gap-5 group relative">
            <div className="bg-lightPurple group-hover:border-l-4 border-navyBlue rounded-full mx-auto p-9 transition-all duration-100">
                <img className="lg:size-[160px] size-[100px] rounded-full" src={category?.image} alt={category?.name} />
            </div>
            <div className="space-y-1 text-center">
                <h4>{category?.name}</h4>
            </div>
            <Link
                to={"/products"}
                className="bg-navyBlue text-white px-2 py-1 opacity-0 absolute group-hover:opacity-100 bottom-24 transition-all duration-500">
                View Shop
            </Link>
        </div>
    );
};

export default TopCategoryCard;
