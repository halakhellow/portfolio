import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogPostsDetails from "../../appsDetails/blogPostsDetails";

import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blogs-page page">
      <div className="page-content">
        <Header />
        <h3>
          Check my published articles on{" "}
          <a
            className="link-in-text"
            href="https://medium.com/@halakhellow"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>{" "}
          platform
        </h3>
        <div className="blogs">
          {blogPostsDetails.map((post) => (
            <BlogCard
              key={post.link}
              imgSrc={post.imgSrc}
              title={post.title}
              description={post.description}
              link={post.link}
              time={post.time}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
