/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const UnderlineButton = ({ title, to, icon }) => {
    return (
        <Link
            to={to}
            className="underline flex items-center gap-1 text-navyBlue hover:text-pink group-hover:text-pink transition-all duration-300">
            {icon} {title}
        </Link>
    );
};

export default UnderlineButton;