import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, thumbnail_url: image_url, details } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read More....
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
