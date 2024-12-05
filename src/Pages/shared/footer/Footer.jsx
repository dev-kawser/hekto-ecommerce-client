import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-sky-blue-gradient mt-10 lg:mt-20">
            <div className="container lg:p-14 p-9 flex flex-wrap justify-between items-center xl:gap-0 gap-10">
                <div className="space-y-2 p-3">
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
                    <p className="lato pt-2">Mahalla Moshjid, Malanco Road, Tangail Sadar, Dhaka, Bangladesh</p>
                </div>
                <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-16 xl:gap-20">
                    <div>
                        <h4 className="font-semibold">Category</h4>
                        <div className="flex flex-col gap-2 mt-3 text-gray lato">
                            <Link>T-Shirts</Link>
                            <Link>Pant</Link>
                            <Link>Jackets</Link>
                            <Link>Underwear</Link>
                            <Link>Shirts</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Customer Care</h4>
                        <div className="flex flex-col gap-2 mt-3 text-gray lato">
                            <Link to={'/account'}>My Account</Link>
                            <Link to={'/offer'}>Discount</Link>
                            <Link to={'/dashboard/my-orders'}>Orders History</Link>
                            <Link>Our Policy</Link>
                            <a href="https://devsafix.vercel.app/" target="_blank">Website Developer</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Pages</h4>
                        <div className="flex flex-col gap-2 mt-3 text-gray lato">
                            <Link to={'/blogs'}>Blog</Link>
                            <Link to={'/products'}>Browse the Shop</Link>
                            <Link to={'/about'}>About US</Link>
                            <Link to={'/faq'}>FAQ</Link>
                            <Link to={'/contact'}>Contact US</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-img-bg">
                <div className="container flex md:flex-row flex-col md:gap-0 gap-3 justify-around py-5">
                    <div>
                        <h6 className="lato">© BazaarNest - All Rights Reserved</h6>
                        <h5 className="lato">This Website Developed By <a href="https://devsafix.vercel.app/" target="_blank" className="font-bold text-base underline text-pink">Kawser</a></h5>
                    </div>
                    <div className="flex items-center gap-3 text-navyBlue">
                        <a href="https://www.linkedin.com/in/devsafix/"
                            target="_blank"
                            className="text-xl"><FaLinkedinIn /></a>
                        <a href="https://github.com/devsafix"
                            target="_blank"
                            className="text-xl"><FaGithub /></a>
                        <a href="https://devsafix.vercel.app/"
                            target="_blank"
                            className="text-xl"><TbWorld /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;