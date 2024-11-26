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
                        className="w-full h-96 object-cover rounded-lg"
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


const blogs = [
    {
        id: 1,
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        date: "Aug 02 2024",
        author: "Kawser",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/800x400",
    },
    {
        id: 2,
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        date: "Aug 05 2024",
        author: "Kawser",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/800x400",
    },
    {
        id: 3,
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        date: "Aug 08 2024",
        author: "Kawser",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/800x400",
    },
    {
        id: 4,
        title: "Fusce venenatis lacus a massa ultrices commodo.",
        date: "Aug 10 2024",
        author: "Kawser",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/800x400",
    },
    {
        id: 5,
        title: "Aliquam eget magna et sapien sagittis ultrices.",
        date: "Aug 12 2024",
        author: "Kawser",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/800x400",
    },
];