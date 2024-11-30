import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loadingAnimation.json"

function Loading() {
  return <div className="flex lg:size-[500px] size-[300px] justify-center items-center lg:mt-20 mx-auto">
    <Lottie animationData={loadingAnimation} ></Lottie>
  </div>;
}

export default Loading;
