import Banner from "../../components/forHome/Banner";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import HektoOffer from "../../components/forHome/HektoOffer";
import LatestAndTrending from "../../components/forHome/LatestAndTrending";
import LatestProducts from "../../components/forHome/LatestProducts";
import TrendingProducts from "../../components/forHome/TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <LatestProducts />
            <HektoOffer />
            <LatestAndTrending />
            <TrendingProducts />
        </div>
    );
};

export default Home;