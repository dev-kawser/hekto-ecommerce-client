const Newsletter = () => {
    return (
        <div
            className="relative h-[300px] mt-10 lg:mt-20 lg:p-10 p-5 flex items-center justify-center bg-cover bg-top bg-no-repeat bg-[url(https://i.ibb.co.com/0jnjZp9/ecommerce-banner.jpg)]"
        >
            {/* Overlay for background opacity */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative flex flex-col gap-5 items-center text-center">
                <h3 className="max-w-xl text-white text-lg lg:text-3xl font-bold lato">
                    Get Latest Update By Subscribing to Our Newsletter
                </h3>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Email..."
                        className="border rounded-l lg:p-3 p-2 outline-none lg:w-96 w-52 bg-white text-pink"
                    />
                    <button className="bg-pink text-white rounded-r lg:p-3 p-2">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
