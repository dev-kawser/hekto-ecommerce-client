import Banner from "../../components/forHome/Banner";
import DiscountItem from "../../components/forHome/DiscountItem";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import BazaarNestOffer from "../../components/forHome/BazaarNestOffer";
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
            <BazaarNestOffer />
            <LatestAndTrending />
            <DiscountItem />
            <TopCategories />
            <Newsletter />
            <LatestBlogs />
        </div>
    );
};

export default Home;