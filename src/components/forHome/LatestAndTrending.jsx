import PrimaryButton from "../../ui/shared/PrimaryButton";


const LatestAndTrending = () => {
    return (
        <div className="mt-10 lg:mt-20 bg-sky-blue-gradient">
            <div className="container flex lg:flex-row md:flex-row flex-col gap-5 items-center justify-between xl:px-20 lg:px-20 md:px-5 py-10">
                <div className="card-img-bg rounded-full">
                    <img
                        className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[260px] h-[260px]"
                        src="https://i.ibb.co.com/543xPJD/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs-1.png" alt="" />
                </div>
                <div className="xl:max-w-xl lg:max-w-md md:max-w-sm">
                    <div>
                        <h3>
                            Unique Features Of latest &
                            Trending Products
                        </h3>
                    </div>
                    <div className="my-7 space-y-1 lato">
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#2BF5CC" />
                            </svg>
                            All frames constructed with hardwood solids and laminates</p>
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#2B2BF5" />
                            </svg>
                            Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails</p>
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#F52B70" />
                            </svg>
                            Arms, backs and seats are structurally reinforced</p>
                    </div>
                    <div className="flex items-center gap-7">
                        <PrimaryButton title={"Add To Cart"} />
                        <div>
                            <h6 className="font-semibold">B&B Italian Sofa</h6>
                            <h6 className="font-semibold">$32.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestAndTrending;