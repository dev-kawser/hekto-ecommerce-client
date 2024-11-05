

const Newsletter = () => {
    return (
        <div
            className="h-[300px] mt-10 lg:mt-20 lg:p-10 p-5 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://i.ibb.co.com/MMKmgGJ/Rectangle-102.png)]">
            <div className="flex flex-col gap-5 items-center text-center">
                <h3 className="max-w-xl text-navyBlue">
                    Get Latest Update By Subscribe to Our Newsletter
                </h3>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Email..."
                        className="border rounded-l lg:p-3 p-2 outline-none lg:w-96 w-52"
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
