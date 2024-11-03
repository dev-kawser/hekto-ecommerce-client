import { Link } from "react-router-dom";
import PrimaryButton from "../../ui/shared/PrimaryButton";


const Banner = () => {
    return (
        <div className="bg-sky-blue-gradient min-h-screen relative">
            <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                    <div>
                        <p className="text-pink">Best Furniture For Your Castle....</p>
                    </div>
                    <div className="my-3">
                        <h1>New Furniture Collection Trends in 2020</h1>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </p>
                    </div>
                    <div className="mt-5">
                        <Link
                            to={"products"}
                        >
                            <PrimaryButton title={"Shop Now"} />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="banner-img-bg rounded-full">
                        <img
                            className="xl:w-[400px] lg:w-[350px] md:w-[280px] sm-w-[150px] xl:h-[400px] lg:h-[350px] md:h-[280px] sm-h-[130px]"
                            src="https://i.ibb.co.com/3BLsxrG/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute 2xl:flex hidden top-0 w-[300px] h-[300px]">
                <img src="https://i.ibb.co.com/6rdFdRV/image-32.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;