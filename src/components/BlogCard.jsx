import React from "react";
import avatar from "../assets/images/image-avatar.webp";
import topImage from "../assets/images/illustration-article.svg";

const BlogCard = () => {
  return (
    <div className="card md:min-h-screen sm:min-h-screen sm:m-12 border-2 border-b-16 border-r-16 rounded-xl">
      <img className="img-card" src={topImage} alt="Avatar" />
      <p>
        <h1>Learning</h1>
        <h2>Published 21 Dec 2023</h2>
        <h3>HTML & CSS Foundation</h3>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex flex-row">
          <img className="" src={avatar} alt="Avatar" />
          <h1>Greg Hooper</h1>
        </div>
      </p>
    </div>
  );
};

export default BlogCard;
