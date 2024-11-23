import { Link } from "react-router-dom";
import HektoOffer from "../../components/forHome/HektoOffer";
import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";

const About = () => {
    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"About Us"} />

            <div className="container mt-10 lg:mt-20">
                {/* About Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-14 bg-gray-50 p-8">
                    {/* Left Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="About Us"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-lg border-4 border-blue-600"></div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Know About Our Ecommerce <br /> Business, History
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                            mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae
                            eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <Link to={"/contact"}>
                            <SecondaryButton title={"Contact us"} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Additional Components */}
            <HektoOffer />
            <Newsletter />
        </div>
    );
};

export default About;