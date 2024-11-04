/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const UnderlineButton = ({ title, to }) => {
    return (
        <Link
            to={to}
            className="underline text-pink">
            {title}
        </Link>
    );
};

export default UnderlineButton;