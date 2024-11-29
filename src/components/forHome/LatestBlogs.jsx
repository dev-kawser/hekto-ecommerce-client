import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import LatestBlogCard from "../../ui/shared/LatestBlogCard";
import SectionTitle from "../../ui/shared/SectionTitle";


const LatestBlogs = () => {

    const { data: blogs } = useQuery({
        queryKey: "blogs",
        queryFn: async () => {
            const response = await axiosPublic.get("/blogs")
            return response.data;
        }
    })

    // Sort Blogs by publicationDate in descending order (recent first)
    const sortedBlogs = blogs?.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="container">
            <SectionTitle title={"Latest Blogs"} />
            <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {sortedBlogs?.slice(0,3).map((blog, index) => (
                    <LatestBlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;