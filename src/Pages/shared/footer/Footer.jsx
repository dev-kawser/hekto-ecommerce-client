import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-sky-blue-gradient mt-10 lg:mt-20">
            <div className="container lg:p-14 p-9 flex flex-wrap gap-6 md:gap-10 lg:gap-20">
                <div className="space-y-2">
                    <h3>BazaarNest</h3>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Email..."
                            className="border rounded-l lg:p-3 p-2 outline-none border-white"
                        />
                        <button className="bg-pink text-white rounded-r lg:p-3 p-2">
                            Subscribe
                        </button>
                    </div>
                    <p className="lato pt-2">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div>
                    <h4 className="font-semibold">Category</h4>
                    <div className="flex flex-col gap-2 mt-3 text-gray lato">
                        <Link>Laptops & Computers</Link>
                        <Link>Cameras & Photography</Link>
                        <Link>Smart Phones & Tablets</Link>
                        <Link>Video Games & Consoles</Link>
                        <Link>Waterproof Headphones</Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Customer Care</h4>
                    <div className="flex flex-col gap-2 mt-3 text-gray lato">
                        <Link>My Account</Link>
                        <Link>Discount</Link>
                        <Link>Returns</Link>
                        <Link>Orders History</Link>
                        <Link>Order Tracking</Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Pages</h4>
                    <div className="flex flex-col gap-2 mt-3 text-gray lato">
                        <Link>Blog</Link>
                        <Link>Browse the Shop</Link>
                        <Link>Pre-Built Pages</Link>
                        <Link>Visual Composer Elements</Link>
                        <Link>WooCommerce Pages</Link>
                    </div>
                </div>
            </div>
            <div className="card-img-bg">
                <div className="container flex justify-around py-5">
                    <h6 className="lato">© BazaarNest - All Rights Reserved</h6>
                    <div className="flex items-center gap-3 text-navyBlue">
                        <Link className="text-12"><BsFacebook /></Link>
                        <Link className="text-12"><FaInstagram /></Link>
                        <Link className="text-12"><IoLogoTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;