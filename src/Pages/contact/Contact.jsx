import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";

const Contact = () => {
    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"Contact Us"} />

            {/* Contact Section */}
            <div className="container mt-10 lg:mt-20">
                {/* Information and Contact Way */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12">
                    {/* Left - Information About Us */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Information About Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 lato">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="flex items-center space-x-4">
                            <span className="w-6 h-6 bg-blue rounded-full"></span>
                            <span className="w-6 h-6 bg-pink rounded-full"></span>
                            <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
                        </div>
                    </div>

                    {/* Right - Contact Way */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Contact Way
                        </h2>
                        <ul className="space-y-4 lato">
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-purple rounded-full mr-3"></span>
                                <span>Tel: 877-67-88-99</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-blue rounded-full mr-3"></span>
                                <span>E-Mail: shop@store.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                                <span>20 Margaret st, London, Great Britain, 3NM98-LK</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                                <span>Free standard shipping on all orders</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-pink rounded-full mr-3"></span>
                                <span>Support Forum for over 24hr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Get in Touch Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 lato">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>
                        <form className="space-y-4">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Your E-mail*"
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject*"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <textarea
                                placeholder="Type Your Message*"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                            <SecondaryButton title={"Send Mail"} />
                        </form>
                    </div>

                    {/* Right - Illustration */}
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/500x400"
                            alt="Contact Illustration"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
