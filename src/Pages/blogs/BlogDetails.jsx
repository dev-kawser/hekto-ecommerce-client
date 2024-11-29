import { useParams } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import SecondaryButton from "../../ui/shared/SecondaryButton";
import TinnyBanner from "../../ui/shared/TinnyBanner";
import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../ui/shared/Loading";

const BlogDetails = () => {

    const { id } = useParams();

    const { data: singleBlog, isLoading } = useQuery({
        queryKey: "singleBlog",
        queryFn: async () => {
            const response = await axiosPublic.get(`/blogs/${id}`);
            return response.data;
        }
    })

    if (isLoading) return <Loading />;

    if (!singleBlog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Blog not found!</p>
            </div>
        );
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const comment = e.target.message.value;

        const NewComment = {
            name,
            comment
        }

        console.log(NewComment);
    }

    const { title, image, author, date, description, comments } = singleBlog;

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
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            className="border p-3 rounded-lg w-full"
                            required
                        />
                        <textarea
                            name="comment"
                            placeholder="Write your comment*"
                            className="border p-3 rounded-lg w-full my-4 h-28"
                            required
                        ></textarea>
                        <SecondaryButton title={"Submit Comment"} />
                    </form>

                    {/* Display Comments */}
                    <div className="mt-10 max-h-96 overflow-y-auto">
                        <h3 className="text-2xl font-bold text-navyBlue mb-4">
                            {comments?.length > 0
                                ? `${comments?.length} Comment(s)`
                                : "No Comments Yet"}
                        </h3>
                        {comments?.map((com, index) => (
                            <div
                                key={index}
                                className="bg-lightPurple p-4 rounded-lg shadow-sm mb-4"
                            >
                                <p className="font-bold text-navyBlue">
                                    {com.name}{" "}
                                </p>
                                <p className="text-gray-600 mt-2 line-clamp-1 lato">{com.comment}</p>
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