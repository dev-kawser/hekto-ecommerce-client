import Lottie from "lottie-react";
import noDataAnimation from "../../../public/noDataAnimation.json"

const NoDataFound = () => {
    return <div className="flex lg:size-[500px] size-[200px] justify-center items-center lg:mt-20 mx-auto">
        <Lottie animationData={noDataAnimation} ></Lottie>
    </div>;
};

export default NoDataFound;