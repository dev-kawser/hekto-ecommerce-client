import Banner from "../../components/forHome/Banner";
import FeaturedProducts from "../../components/forHome/FeaturedProducts";
import LatestProducts from "../../components/forHome/LatestProducts";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <LatestProducts />
        </div>
    );
};

export default Home;