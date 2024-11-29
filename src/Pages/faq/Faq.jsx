import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Faq = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
                import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    toast.success("Email sent successfully!");
                },
                () => {
                    toast.error("Failed to send email. Please try again.");
                }
            );

        e.target.reset();
    };



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
                                    What is your return and exchange policy?
                                </h3>
                                <p className="text-gray-600">
                                    We offer a 30-day return policy for most items. If you&apos;re not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. The item must be in its original condition and packaging. Some items, such as clearance or personalized products, may not be eligible for return. Please visit our Returns & Exchanges page for more details.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    How can I track my order?
                                </h3>
                                <p className="text-gray-600">
                                    After your order has shipped, you&apos;ll receive a tracking number via email or SMS. You can use this number to track your package on the carrier’s website. If you haven&apos;t received a tracking number or need assistance, feel free to contact our customer support team.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Do you offer international shipping?
                                </h3>
                                <p className="text-gray-600">
                                    Yes, we offer international shipping to select countries. Shipping rates and delivery times will vary depending on your location. You can check the available shipping options during the checkout process. Customs duties or taxes may apply based on your country&apos;s regulations.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    How do I contact customer service?
                                </h3>
                                <p className="text-gray-600">
                                    You can reach our customer service team by emailing us at support@yourstore.com or by using the contact form on our website. We aim to respond to all inquiries within 24 hours. Our team is available Monday through Friday, from 9:00 AM to 6:00 PM (GMT).
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right - Ask a Question Form */}
                    <div className="bg-gray-50 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ask a Question</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name*"
                                required
                                name="from_name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your E-mail*"
                                name="from_email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <textarea
                                placeholder="Type Your Message*"
                                name="message"
                                required
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
