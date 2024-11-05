/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const TinnyBanner = ({ title }) => {
    return (
        <div className="bg-sky-blue-gradient">
            <div className="container xl:py-20 lg:py-16 md:py-12 py-8">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="flex items-center gap-2 lato">
                    <h5>
                        <Link
                            to={"/"}
                        >
                            Home .
                        </Link>
                    </h5>
                    <h5>Pages .</h5>
                    <h5 className="text-pink">
                        {title}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default TinnyBanner;