import Banner from "../../components/forHome/Banner";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import HektoOffer from "../../components/forHome/HektoOffer";
import LatestProducts from "../../components/forHome/LatestProducts";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <LatestProducts />
            <HektoOffer />
        </div>
    );
};

export default Home;