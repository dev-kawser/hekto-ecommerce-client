import { Parallax } from "react-parallax";

const Newsletter = () => {
    return (
        <Parallax
            className="my-10 lg:my-20"
            blur={{ min: -40, max: 40 }}
            bgImage={"https://i.ibb.co.com/MMKmgGJ/Rectangle-102.png"}
            bgImageAlt="Loading..."
            strength={-200}
        >
            <div
                className="h-[300px] lg:p-10 p-5 flex items-center justify-center bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col gap-5 items-center text-center">
                    <h3 className="max-w-xl text-navyBlue">
                        Get Latest Update By Subscribe to Our Newsletter
                    </h3>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Email..."
                            className="border rounded-l lg:p-3 p-2 outline-none"
                        />
                        <button className="bg-pink text-white rounded-r lg:p-3 p-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Newsletter;
