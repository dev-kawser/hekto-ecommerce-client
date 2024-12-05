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
        name: "T-Shirts",
        image: "https://i.ibb.co.com/9s3hFqB/download-27.jpg",
    },
    {
        name: "Jacket",
        image: "https://i.ibb.co.com/SP3RJ6k/download-28.jpg",
    },
    {
        name: "Pants",
        image: "https://i.ibb.co.com/dcJWmLs/download-29.jpg",
    },
    {
        name: "Shirts",
        image: "https://i.ibb.co.com/rxjqyWb/images.jpg",
    },
];