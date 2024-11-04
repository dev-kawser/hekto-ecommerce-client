import { Link } from "react-router-dom";
import PrimaryButton from "../../ui/shared/PrimaryButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {

    return (
        <div className="bg-sky-blue-gradient h-full relative lg:pb-5 pb-3">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                            <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                                <div>
                                    <p className="text-pink">{item.subTitle}</p>
                                </div>
                                <div className="my-3">
                                    <h1>{item.title}</h1>
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="mt-5">
                                    <Link to={"products"}>
                                        <PrimaryButton title={"Shop Now"} />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="card-img-bg rounded-full">
                                    <img
                                        className="xl:w-[400px] lg:w-[350px] md:w-[280px] w-[260px] xl:h-[400px] lg:h-[350px] md:h-[280px] h-[260px] pb-4"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute 2xl:flex hidden top-0 w-[300px] h-[300px]">
                <img src="https://i.ibb.co.com/6rdFdRV/image-32.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;

const data = [
    {
        subTitle: "Explore the Latest Furniture Collection Trends for 2024!",
        title: "New Furniture Collection Trends in 2024",
        description: "Transform your living space with our exquisite furniture collection. From modern minimalist designs to classic elegance, we offer a variety of pieces that fit every style.",
        image: "https://i.ibb.co.com/3BLsxrG/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room-1.png"
    },
    {
        subTitle: "Unleash Your Inner Fashionista with Our Women's Collection!",
        title: "Chic Women's Wear Trends for 2024",
        description: "From elegant dresses to stylish blouses, explore the versatile pieces that empower your wardrobe. Embrace comfort without compromising on style.",
        image: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-beautiful-fashion-girl-png-image_11730271.png"
    },
    {
        subTitle: "Step Up Your Wardrobe with Our Men's Fashion Collection!",
        title: "Men's Fashion Trends for 2024",
        description: "Explore the latest in men&apos;s fashion, where sophistication meets comfort. Our curated selection includes tailored suits, versatile casual wear, and standout accessories to elevate your style for any occasion.",
        image: "https://i.ibb.co.com/Fs4VDdD/vecteezy-ai-generated-young-stylish-man-posing-isolated-on-white-36420980.png"
    },
];