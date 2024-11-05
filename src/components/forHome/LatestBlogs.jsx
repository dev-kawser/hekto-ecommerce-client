import LatestBlogCard from "../../ui/shared/LatestBlogCard";
import SectionTitle from "../../ui/shared/SectionTitle";


const LatestBlogs = () => {
    return (
        <div className="container">
            <SectionTitle title={"Latest Blogs"} />
            <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {blogs.map((blog, index) => (
                    <LatestBlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;


const blogs = [
    {
        "author": "Kawser",
        "image": "https://i.ibb.co.com/nPWNndW/JIUjvqe2-ZHg.png",
        "date": "21 August, 2024",
        "title": "Top Essential Trends in 2021",
        "description": "The digital landscape is constantly evolving, and 2021 is no exception. From artificial intelligence to the increasing importance of eCommerce platforms, businesses need to stay ahead of the curve. In this article, we dive deep into the essential trends that are expected to define 2021, including the rise of remote work, the growing demand for digital marketing expertise, and the continued innovation in technologies like 5G and blockchain. Stay ahead by understanding how these trends will impact industries worldwide, from startups to global enterprises. This is your ultimate guide to navigating the future."
    },
    {
        "author": "Kawser",
        "image": "https://i.ibb.co.com/nPWNndW/JIUjvqe2-ZHg.png",
        "date": "15 March, 2024",
        "title": "Understanding the Future of Work in a Digital Age",
        "description": "The future of work is no longer confined to traditional office spaces. As companies pivot to remote-first models, the need for agile, adaptable, and digitally-savvy teams has never been greater. This article explores how technology is reshaping work culture, the role of automation, and what the future holds for various industries. We will also examine how to prepare for the next wave of digital transformation and how businesses can foster an environment of continuous learning to thrive in this new reality. Whether you're a business leader or an employee, understanding these shifts is key to success."
    },
    {
        "author": "Kawser",
        "image": "https://i.ibb.co.com/nPWNndW/JIUjvqe2-ZHg.png",
        "date": "30 November, 2024",
        "title": "Innovations in Digital Marketing: What’s Next?",
        "description": "Digital marketing is evolving rapidly, and staying up-to-date with the latest innovations is crucial for any brand looking to maintain its competitive edge. In this article, we examine the cutting-edge technologies and strategies that will shape the future of digital marketing, including AI-driven campaigns, voice search optimization, augmented reality experiences, and influencer marketing. With the rise of social media platforms and digital content consumption, brands must rethink their marketing approaches and leverage new tools to effectively engage with consumers. Join us as we explore the exciting innovations that will transform digital marketing in the coming years."
    }
];