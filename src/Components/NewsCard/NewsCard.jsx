import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaEye,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md rounded-lg">
      
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.length > 250
            ? details.slice(0, 250) + "..."
            : details}
        </p>

        <button className="text-orange-500 font-semibold text-sm mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

