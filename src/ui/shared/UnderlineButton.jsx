/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const UnderlineButton = ({ title, to }) => {
    return (
        <Link
            to={to}
            className="underline text-navyBlue hover:text-pink group-hover:text-pink transition-all duration-300">
            {title}
        </Link>
    );
};

export default UnderlineButton;