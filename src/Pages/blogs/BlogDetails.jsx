import { useParams } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [comments, setComments] = useState([]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setComment({ ...comment, [name]: value });
    };

    // Handle comment submission
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.name && comment.email && comment.message) {
            setComments([...comments, comment]);
            setComment({ name: "", email: "", message: "" }); // Reset form
        }
    };

    // ------------------------------------------

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    // UseEffect to find the product details based on ID
    useEffect(() => {
        const findBlog = () => {
            const blogId = parseInt(id);
            const foundBlog = blogs.find((item) => item.id === blogId);
            setBlog(foundBlog || null);
        };

        findBlog();
    }, [id]);

    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Blog not found!</p>
            </div>
        );
    }

    const { title, image, author, date, description } = blog;

    return (
        <div>
            <TinnyBanner title={"Blog Details"} currentPath={"blog-details"} />
            <div className="container mt-10 lg:mt-20">
                {/* Blog Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full rounded-lg"
                    />
                    <div className="mt-6">
                        <div className="text-sm text-navyBlue mb-4 flex items-center gap-4">
                            <h4 className="font-semibold text-blue">{author}</h4>
                            <span>|</span>
                            <span>{date}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-navyBlue mb-4">
                            {title}
                        </h2>
                        <p className="text-gray-600 leading-7 lato">{description}</p>
                    </div>
                </div>

                {/* Comment Section */}
                <div className="mt-10">
                    <h3 className="text-2xl font-bold text-navyBlue mb-4">
                        Leave a Comment
                    </h3>
                    <form
                        className="bg-white p-6 rounded-lg shadow-md"
                        onSubmit={handleCommentSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name*"
                                className="border p-3 rounded-lg w-full"
                                value={comment.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email*"
                                className="border p-3 rounded-lg w-full"
                                value={comment.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Write your comment*"
                            className="border p-3 rounded-lg w-full my-4 h-28"
                            value={comment.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <SecondaryButton title={"Submit Comment"} />
                    </form>

                    {/* Display Comments */}
                    <div className="mt-10 max-h-96 overflow-y-auto">
                        <h3 className="text-2xl font-bold text-navyBlue mb-4">
                            {comments.length > 0
                                ? `${comments.length} Comment(s)`
                                : "No Comments Yet"}
                        </h3>
                        {comments.map((comment, index) => (
                            <div
                                key={index}
                                className="bg-lightPurple p-4 rounded-lg shadow-sm mb-4"
                            >
                                <p className="font-bold text-navyBlue">
                                    {comment.name}{" "}
                                    <span className="text-sm lato text-gray-400">
                                        ({comment.email})
                                    </span>
                                </p>
                                <p className="text-gray-600 mt-2 line-clamp-1 lato">{comment.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default BlogDetails;


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
