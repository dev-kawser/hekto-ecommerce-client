import { CiPhone } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { IoLogOutOutline } from "react-icons/io5";
import useMyCarts from "../../../hooks/useMyCarts";


const SubNavbar = () => {

    const { user, logout } = useAuth();
    const { myCarts } = useMyCarts();

    return (
        <div className="bg-purple text-white xl:block lg:block hidden">
            <div className="container py-3 flex items-center justify-between">
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
                <div className="flex items-center gap-5">
                    <div>
                        {
                            user ?
                                <h5 className="flex items-center gap-1 font-medium bg-pink text-white px-2 py-1 rounded">
                                    <span>
                                        <IoLogOutOutline />
                                    </span>
                                    <button onClick={() => logout()}>Logout</button>
                                </h5>
                                :
                                <h5 className="flex items-center gap-1">
                                    <span>
                                        <LuUser2 />
                                    </span>
                                    <Link to={"/login"}>Login</Link>
                                </h5>
                        }

                    </div>
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
                </div>
            </div>
        </div >
    );
};

export default SubNavbar;