import Banner from "../../components/forHome/Banner";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import HektoOffer from "../../components/forHome/HektoOffer";
import LatestAndTending from "../../components/forHome/LatestAndTending";
import LatestProducts from "../../components/forHome/LatestProducts";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <LatestProducts />
            <HektoOffer />
            <LatestAndTending />
        </div>
    );
};

export default Home;