import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { Link } from "react-router-dom";
import axiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ui/shared/Loading";

const Blogs = () => {


    const { data: blogs, isLoading } = useQuery({
        queryKey: "blogs",
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

    if (isLoading) return <Loading/>;

    return (
        <div>
            {/* Banner */}
            <TinnyBanner title={"Blog Page"} currentPath={"blogs"} />

            {/* Blog Section */}
            <div className="container mt-10 lg:mt-20">
                {currentBlogs?.map((blog) => (
                    <div key={blog.id} className="mb-8 group">
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
                                <Link to={`/blog/${blog.id}`}>
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


// const blogs = [
//     {
//         id: 1,
//         title: "10 Tips for Choosing the Perfect Online Store Platform",
//         date: "Oct 15 2024",
//         author: "Kawser",
//         description:
//             "Choosing the right e-commerce platform is one of the most critical decisions for any online business. From ease of use to scalability, each platform offers unique features tailored to different needs. This blog explores essential tips, including evaluating your business size, considering integrations with payment gateways, understanding pricing models, and ensuring mobile responsiveness. We also highlight the top platforms in 2024 and discuss how to choose the one that aligns with your goals.",
//         image: "https://i.ibb.co.com/dgZyddF/Home.png",
//     },
//     {
//         id: 2,
//         title: "How to Optimize Your Product Listings for More Sales",
//         date: "Oct 20 2024",
//         author: "Kawser",
//         description:
//             "A well-optimized product listing is the cornerstone of any successful e-commerce store. In this guide, we delve into the key components of a compelling listing, including crafting detailed and engaging product descriptions, using professional-grade images, and leveraging SEO keywords to improve visibility. Additionally, discover the importance of pricing strategies, product categorization, and customer reviews in boosting sales. Learn how to turn browsers into buyers with effective optimization techniques.",
//         image: "https://i.ibb.co.com/h7Zzdd1/vu3h-Nj2-Y64-Kxhdf-X63-FNBg.webp",
//     },
//     {
//         id: 3,
//         title: "The Rise of Mobile Shopping: What Retailers Need to Know",
//         date: "Oct 25 2024",
//         author: "Kawser",
//         description:
//             "Mobile shopping is no longer a trend—it's the future of e-commerce. With over 70% of online transactions now happening on mobile devices, retailers must prioritize mobile optimization. This article covers the critical elements of a mobile-friendly site, including responsive design, streamlined checkout processes, and faster page load times. We also explore emerging technologies like voice shopping and mobile apps that can enhance the shopping experience for customers on the go.",
//         image: "https://i.ibb.co.com/LggXKtr/1657263712909.jpg",
//     },
//     {
//         id: 4,
//         title: "Understanding Customer Reviews and Their Impact on Sales",
//         date: "Nov 01 2024",
//         author: "Kawser",
//         description:
//             "Customer reviews are a powerful tool for building trust and driving sales. Positive reviews act as social proof, reassuring potential buyers of the quality of your products. This blog dives into the psychology of reviews, why they matter, and how to encourage satisfied customers to leave feedback. You'll also learn how to respond to negative reviews constructively, and how to use review analytics to identify areas for improvement and refine your product offerings.",
//         image: "https://i.ibb.co.com/syvgWHm/customer-reviews-63d8b1a454172-sej.webp",
//     },
//     {
//         id: 5,
//         title: "Top Trends in E-Commerce for 2024 You Need to Embrace",
//         date: "Nov 05 2024",
//         author: "Kawser",
//         description:
//             "The e-commerce landscape is constantly evolving, and staying ahead requires businesses to adapt to emerging trends. In 2024, some of the most prominent trends include the rise of AI-driven personalization, voice search optimization, and sustainable packaging. This article provides an in-depth look at these trends and offers actionable strategies to incorporate them into your business. Discover how to use data analytics, social commerce, and green initiatives to stay competitive in the market.",
//         image: "https://i.ibb.co.com/rsJsF0j/download-9.png",
//     },
//     {
//         id: 6,
//         title: "The Importance of Fast Shipping in Building Customer Loyalty",
//         date: "Nov 10 2024",
//         author: "Kawser",
//         description:
//             "In the era of same-day delivery, fast and reliable shipping has become a top priority for customers. This blog explains why efficient shipping is vital for building trust and loyalty and how delayed shipments can negatively impact your brand's reputation. We also cover strategies to improve your logistics, such as partnering with reliable couriers, offering multiple shipping options, and utilizing warehouse management systems. Learn how to create a seamless delivery experience that keeps customers coming back.",
//         image: "https://i.ibb.co.com/BsbYxPy/download-10.png",
//     },
// ];
