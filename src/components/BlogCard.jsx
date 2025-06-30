import React from "react";
import avatar from "../assets/images/image-avatar.webp";
import topImage from "../assets/images/illustration-article.svg";

const BlogCard = () => {
  return (
    <div className="card border-1 rounded-xl ">
      <img className="img-card" src={topImage} alt="Avatar" />
      <section className="flex flex-row items-start justify-start">
        <div className="bg-yellow-400 rounded-sm p-1 mt-2">
          <h3 className="text-xs font-bold px-1">Learning</h3>
        </div>
      </section>
      <h2 className="text-xs font-base">Published 21 Dec 2023</h2>
      <h1 className="font-extrabold text-lg hover:text-yellow-400">
        HTML & CSS Foundation
      </h1>
      <p className="text-xs font-light tracking-wide">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
        <div className="flex flex-row gap-3 mt-4">
          <img className="w-6" src={avatar} alt="Avatar" />
          <h1 className="text-xs flex flex-row items-center font-bold">
            Greg Hooper
          </h1>
        </div>
      </p>
    </div>
  );
};

export default BlogCard;
