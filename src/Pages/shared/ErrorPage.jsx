import { Link, useNavigate } from "react-router-dom";
import errorAnimation from "../../../public/errorAnimation.json"
import Lottie from "lottie-react";
import UnderlineButton from "../../ui/shared/UnderlineButton";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="container flex flex-col items-center justify-center">
            <div className="lg:size-[450px] size-[350px]">
                <Lottie animationData={errorAnimation}></Lottie>
            </div>
            <div className="text-center">
                <h4 className="font-bold mb-4 text-offNavyBlue">The page you requested was not found!</h4>
                <div className="flex items-center justify-center gap-3">
                    <button onClick={() => navigate(-1)} className="">
                        <UnderlineButton title="Go Back" icon={<FaArrowLeft />} />
                    </button>
                    <Link
                        to="/"
                        className="px-8 py-3 rounded bg-pink text-white">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ErrorPage;