import { Link } from "react-router-dom";
import PrimaryButton from "../../ui/shared/PrimaryButton";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="bg-sky-blue-gradient min-h-screen relative">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                        <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                            <div>
                                <p className="text-blue">Step Up Your Wardrobe with Our Men&apos;s Fashion Collection!</p>
                            </div>
                            <div className="my-3">
                                <h1>Men&apos;s Fashion Trends for 2024</h1>
                            </div>
                            <div>
                                <p>
                                    Explore the latest in men&apos;s fashion, where sophistication meets comfort. Our curated selection
                                    includes tailored suits, versatile casual wear, and standout accessories to elevate your style
                                    for any occasion.
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
                                    className="xl:w-[400px] lg:w-[350px] md:w-[280px] sm-w-[150px] xl:h-[400px] lg:h-[350px] md:h-[280px] sm-h-[130px] pb-4"
                                    src="https://i.ibb.co.com/Fs4VDdD/vecteezy-ai-generated-young-stylish-man-posing-isolated-on-white-36420980.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                        <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                            <div>
                                <p className="text-purple">Unleash Your Inner Fashionista with Our Women&apos;s Collection!</p>
                            </div>
                            <div className="my-3">
                                <h1>Chic Women&apos;s Wear Trends for 2024</h1>
                            </div>
                            <div>
                                <p>
                                    From elegant dresses to stylish blouses, explore the versatile pieces that empower
                                    your wardrobe. Embrace comfort without compromising on style.
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
                                    className="xl:w-[400px] lg:w-[350px] md:w-[280px] sm-w-[150px] xl:h-[400px] lg:h-[350px] md:h-[280px] sm-h-[130px] pb-4"
                                    src="https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-beautiful-fashion-girl-png-image_11730271.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                        <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                            <div>
                                <p className="text-pink">Best Furniture For Your Castle....</p>
                            </div>
                            <div className="my-3">
                                <h1>New Furniture Collection Trends in 2024</h1>
                            </div>
                            <div>
                                <p>
                                    Transform your living space with our exquisite furniture collection. From modern minimalist designs to classic elegance, we offer a variety of pieces that fit every style.
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
                </SwiperSlide>
            </Swiper>
            <div className="absolute 2xl:flex hidden top-0 w-[300px] h-[300px]">
                <img src="https://i.ibb.co.com/6rdFdRV/image-32.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;