import { Link } from "react-router-dom";
import BazaarNestOffer from "../../components/forHome/BazaarNestOffer";
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
                                src="https://i.ibb.co.com/SPY0YYt/ecommerce-websites.webp"
                                alt="About Us"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute md:-bottom-6 -bottom-3 md:-left-6 -left-3 w-full h-full rounded-lg border-4 border-blue-600"></div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Know About Our E-commerce <br /> Business and History
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At BazaarNest, we’re dedicated to providing a seamless and enjoyable shopping experience for our customers. Founded in [Year], our mission has always been to offer high-quality products at affordable prices. We started as a small online store specializing in [specific product category], and over the years, we’ve expanded our offerings to include a wide range of items, from electronics to fashion and home goods. With a commitment to customer satisfaction, fast delivery, and secure shopping, we’ve built a loyal customer base that continues to grow. We’re proud of the journey we&apos;ve taken, and we look forward to continuing to serve our customers for many years to come.
                        </p>
                        <Link to={"/contact"}>
                            <SecondaryButton title={"Contact us"} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Additional Components */}
            <BazaarNestOffer />
            <Newsletter />
        </div>
    );
};

export default About;