import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { Link } from "react-router-dom";
import axiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ui/shared/Loading";
import NoDataFound from "../shared/NoDataFound";

const Blogs = () => {


    const { data: blogs, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await axiosPublic.get("/blogs")
            return response.data;
        }
    })


    // Sort Blogs by publicationDate in descending order (recent first)
    const sortedBlogs = blogs?.sort((a, b) => new Date(b.date) - new Date(a.date));

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Calculate pagination
    const totalPages = Math.ceil(sortedBlogs?.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs?.slice(indexOfFirstBlog, indexOfLastBlog);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (!blogs) {
        return <NoDataFound />
    }

    if (isLoading) return <Loading />;

    return (
        <div>
            {/* Banner */}
            <TinnyBanner title={"Blog Page"} currentPath={"blogs"} />

            {/* Blog Section */}
            <div className="container mt-10 lg:mt-20">
                {currentBlogs?.map((blog) => (
                    <div key={blog._id} className="mb-8 group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Blog Image */}
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-64 object-cover bg-cover bg-center"
                            />
                            <div className="p-6">
                                {/* Blog Metadata */}
                                <div className="text-sm text-navyBlue mb-2 flex items-center gap-4">
                                    <span>{blog.author}</span>
                                    <span>|</span>
                                    <span>{blog.date}</span>
                                </div>
                                {/* Blog Title */}
                                <h3 className="text-xl font-bold text-navyBlue group-hover:text-blue transition-all duration-150 mb-2">
                                    {blog.title}
                                </h3>
                                {/* Blog Description */}
                                <p className="line-clamp-3 lato">{blog.description}</p>
                                {/* Read More (blog details) */}
                                <Link to={`/blog/${blog._id}`}>
                                    <button className="group-hover:text-pink group-hover:underline transition-all duration-150 font-bold mt-4">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`px-4 py-2 mx-1 border rounded-md ${currentPage === index + 1
                                ? "bg-blue text-white"
                                : "bg-white text-gray"
                                }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Blogs;