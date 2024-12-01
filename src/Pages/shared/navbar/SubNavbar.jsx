import { CiPhone } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useMyCarts from "../../../hooks/useMyCarts";
import { useState } from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";

const SubNavbar = () => {
    const { logout } = useAuth();
    const { currentUser } = useCurrentUser();
    const { myCarts } = useMyCarts();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="bg-purple text-white xl:block lg:block hidden">
            <div className={`container ${currentUser ? "py-2" : "py-4"} flex items-center justify-between`}>
                <div className="flex items-center gap-7">
                    <h5 className="flex items-center gap-1">
                        <span>
                            <MdOutlineMailOutline />
                        </span>
                        <a href="mailto:mdkawserferdoussafi@gmail.com">mdkawserferdoussafi@gmail.com</a>
                    </h5>
                    <h5 className="flex items-center gap-1">
                        <span>
                            <CiPhone />
                        </span>
                        <a href="tel:+8801709190412">+88 01709190412</a>
                    </h5>
                </div>
                <div className="flex items-center gap-8">
                    {
                        !currentUser && (
                            <div>
                                <h5 className="flex items-center gap-1">
                                    <span>
                                        <LuUser2 />
                                    </span>
                                    <Link to={"/login"}>Login</Link>
                                </h5>
                            </div>
                        )
                    }
                    <div>
                        <h5 className="flex items-center gap-1">
                            <span>
                                <IoIosHeartEmpty />
                            </span>
                            <Link to={"/wishlist"}>Wishlist</Link>
                        </h5>
                    </div>
                    <div>
                        <h5>
                            <Link to={"/carts"}>
                                <div className="relative w-fit">
                                    <FiShoppingCart className="text-xl" />
                                    <span className="absolute mx-auto -right-4 -top-2 flex size-5 items-center justify-center rounded-full bg-pink text-center text-[15px] text-white">
                                        {myCarts?.length}
                                    </span>
                                </div>
                            </Link>
                        </h5>
                    </div>
                    {
                        currentUser && (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="w-10 h-10 rounded-full bg-cover object-cover bg-no-repeat bg-center border-2 border-white"
                                    style={{
                                        backgroundImage: `url(${currentUser?.photo})`,
                                    }}
                                />
                                {dropdownOpen && (
                                    <div
                                        data-aos="fade-in"
                                        data-aos-duration="500"
                                        className="absolute right-0 mt-2 w-48 bg-purple rounded-t-none rounded-lg shadow-lg z-50">
                                        <ul>
                                            <li>
                                                <Link
                                                    to="/dashboard"
                                                    className="block font-semibold px-4 py-2 text-white hover:bg-navyBlue">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/account"
                                                    className="block font-semibold px-4 py-2 text-white hover:bg-navyBlue">
                                                    Account
                                                </Link>
                                            </li>
                                            <li className="text-white hover:bg-navyBlue">
                                                <button
                                                    onClick={() => logout()}
                                                    className="block font-semibold px-4 py-2">
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
