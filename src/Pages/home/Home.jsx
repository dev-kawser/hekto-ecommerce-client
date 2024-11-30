import Banner from "../../components/forHome/Banner";
import DiscountItem from "../../components/forHome/DiscountItem";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import HektoOffer from "../../components/forHome/HektoOffer";
import LatestAndTrending from "../../components/forHome/LatestAndTrending";
import LatestBlogs from "../../components/forHome/LatestBlogs";
import LatestProducts from "../../components/forHome/LatestProducts";
import TopCategories from "../../components/forHome/TopCategories";
import Newsletter from "../../components/Newsletter";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <LatestProducts />
            <HektoOffer />
            <LatestAndTrending />
            <DiscountItem />
            <TopCategories />
            <Newsletter />
            <LatestBlogs />
        </div>
    );
};

export default Home;