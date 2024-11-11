import SectionTitle from "../../ui/shared/SectionTitle";
import TopCategoryCard from "../../ui/shared/TopCategoryCard";


const TopCategories = () => {
    return (
        <div className="container">
            <SectionTitle title={"Top Categories"} />
            <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                {categoriesData.map((category, index) => (
                    <TopCategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default TopCategories;

const categoriesData = [
    {
        name: "Mini LCW Chair",
        price: "$56.00",
        image: "https://i.ibb.co.com/rkZRfJ0/image-20.png",
    },
    {
        name: "Modern Sofa",
        price: "$120.00",
        image: "https://i.ibb.co.com/rkZRfJ0/image-20.png",
    },
    {
        name: "Dining Table",
        price: "$300.00",
        image: "https://i.ibb.co.com/rkZRfJ0/image-20.png",
    },
    {
        name: "Office Desk",
        price: "$75.00",
        image: "https://i.ibb.co.com/rkZRfJ0/image-20.png",
    },
];