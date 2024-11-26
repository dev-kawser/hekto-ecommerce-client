import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { Link } from "react-router-dom";

const Blogs = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Calculate pagination
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Banner */}
            <TinnyBanner title={"Blog Page"} currentPath={"blogs"} />

            {/* Blog Section */}
            <div className="container mt-10 lg:mt-20">
                {currentBlogs.map((blog) => (
                    <div key={blog.id} className="mb-8 group">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Blog Image */}
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-64 object-cover"
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
                                {/* Read More */}
                                <Link>
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


const blogs = [
    {
        id: 1,
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        date: "Aug 02 2024",
        author: "Kawser",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis velit ac auctor gravida nec ac metus.",
        image: "https://via.placeholder.com/600x400",
    },
    {
        id: 2,
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        date: "Aug 05 2024",
        author: "Kawser",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula orci auctor gravida.",
        image: "https://via.placeholder.com/600x400",
    },
    {
        id: 3,
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        date: "Aug 08 2024",
        author: "Kawser",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius ultricies lectus.",
        image: "https://via.placeholder.com/600x400",
    },
    {
        id: 4,
        title: "Fusce venenatis lacus a massa ultrices commodo.",
        date: "Aug 10 2024",
        author: "Kawser",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus, tortor nec fermentum.",
        image: "https://via.placeholder.com/600x400",
    },
    {
        id: 5,
        title: "Aliquam eget magna et sapien sagittis ultrices.",
        date: "Aug 12 2024",
        author: "Kawser",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui ut lorem efficitur eleifend.",
        image: "https://via.placeholder.com/600x400",
    },
];