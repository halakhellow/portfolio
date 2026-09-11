import "./BlogCard.css";

type BlogCardProps = {
  imgSrc: string;
  time: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const BlogCard = ({ imgSrc, time, title, date, description, link }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="blog-card-body">
        <div className="reading-time">
          <i className="fas fa-solid fa-clock"></i>
          <span>{time} min read</span>
        </div>
        <a className="blog-title" href={link} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <span className="blog-date">{date}</span>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
