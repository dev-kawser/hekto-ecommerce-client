import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";

const Faq = () => {
    return (
        <div>
            {/* Tiny Banner */}
            <TinnyBanner title={"FAQ"} />

            {/* FAQ Section */}
            <div className="container mt-10 lg:mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - General Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">General Information</h2>
                        <div className="space-y-6 lato">
                            {/* FAQ Item */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Eu dictumst cum et sed euismod condimentum?
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Magna bibendum est fermentum eros.
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Odio muskana hak eris consequat skeleton?
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Elit id blandit sabara boi velit qua maro?
                                </h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Ask a Question Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ask a Question</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name*"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
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
                </div>
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Faq;
