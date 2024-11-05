import { Link } from "react-router-dom";
import errorAnimation from "../../../public/errorAnimation.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="container flex flex-col items-center justify-center">
            <div className="lg:size-[450px] size-[350px]">
                <Lottie animationData={errorAnimation}></Lottie>
            </div>
            <div className="text-center">
                <h4 className="font-bold mb-4">The page you requested was not found!</h4>
                <Link
                    to="/"
                    className="px-8 py-3 rounded bg-pink text-white">
                    Back To Home
                </Link>
            </div>
        </div >
    );
};

export default ErrorPage;