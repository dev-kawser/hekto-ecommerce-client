import { Link } from "react-router-dom";
import PrimaryButton from "../../ui/shared/PrimaryButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div className="bg-sky-blue-gradient h-full relative lg:pb-5 pb-3">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container xl:py-20 lg:py-16 md:py-14 py-8 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse items-center justify-between lg:gap-0 md:gap-0 gap-8">
                            <div className="xl:max-w-2xl lg:max-w-xl md:max-w-md">
                                <div>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500" className="text-pink lato">{item.subTitle}</p>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="700" className="my-3">
                                    <h1>{item.title}</h1>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="900">
                                    <p className="lato">{item.description}</p>
                                </div>
                                <div className="mt-5">
                                    <Link to={"/products"}>
                                        <PrimaryButton title={"Shop Now"} />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img
                                    data-aos="fade"
                                    data-aos-duration="700"
                                    className="xl:w-[400px] lg:w-[350px] md:w-[280px] w-[260px] xl:h-[400px] lg:h-[350px] md:h-[280px] h-[260px] object-contain rounded-full border-4 border-purple"
                                    src={item.image}
                                    alt=""
                                />

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
        subTitle: "Upgrade Your Everyday Look with Premium T-Shirts!",
        title: "Trendy Men's T-Shirts for 2024",
        description: "Discover our latest collection of men's t-shirts designed for ultimate comfort and style. From bold graphic prints to classic solids, find the perfect tee for every occasion.",
        image: "https://i.ibb.co.com/ggHc3g3/Half-sleve-t-shirt-8.jpg"
    },
    {
        subTitle: "Stay Warm and Stylish this Winter Season!",
        title: "Top Men's Jackets for 2024",
        description: "Browse our range of jackets for men that combine functionality and fashion. From sleek leather jackets to cozy puffers, we offer versatile outerwear for every occasion. Stay comfortable and on-trend, no matter the weather.",
        image: "https://i.ibb.co.com/tKJGVxD/71-NQCXAVTBL.jpg"
    },
    {
        subTitle: "Elevate Your Style with Comfortable and Trendy Pants!",
        title: "Men's Pants Collection 2024",
        description: "Our men's pants collection offers a perfect blend of comfort and elegance. From tailored trousers to casual chinos and joggers, find your ideal fit for every occasion.",
        image: "https://i.ibb.co.com/0Bg4fLX/pp.jpg"
    }

];