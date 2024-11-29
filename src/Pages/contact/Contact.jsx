import Lottie from "lottie-react";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import contactAnimation from "../../../public/contactAnimation.json"
import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

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
            <TinnyBanner title={"Contact Us"} />

            {/* Contact Section */}
            <div className="container mt-10 lg:mt-20">
                {/* Information and Contact Way */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-8">
                    {/* Left - Information About Us */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Information About Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 lato">
                            Welcome to our online store, where convenience meets quality. We offer a wide range of products carefully selected to meet your needs, whether you&apos;re shopping for the latest tech gadgets, trendy fashion, or home essentials. Our user-friendly website ensures a smooth shopping experience, with secure payment options and fast delivery. Explore our collection and find what you&apos;re looking for today.
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
                                <span>Tel: +880 1709190412</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-blue rounded-full mr-3"></span>
                                <span>E-Mail: hekto@store.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
                                <span>20 Mahalla Moshjid rd, Tangail, Dhaka, Bangladesh</span>
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
                            We’d love to hear from you! Whether you have a question about our products, need help with your order, or just want to share your feedback, our customer support team is here to assist you. Feel free to reach out to us through our contact form, email, or social media channels. Your satisfaction is our priority, and we’re always ready to help!
                        </p>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your Name*"
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Your E-mail*"
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <textarea
                                placeholder="Type Your Message*"
                                name="message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                            <SecondaryButton title={"Send Mail"} />
                        </form>
                    </div>

                    {/* Right - Illustration */}
                    <div className="relative">
                        <div className="w-72 lg:w-[500px] md:hidden lg:block mx-auto flex-shrink-0">
                            <Lottie animationData={contactAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
