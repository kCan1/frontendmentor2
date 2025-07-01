import React from "react";
import avatar from "../assets/images/image-avatar.webp";
import topImage from "../assets/images/illustration-article.svg";

const BlogCard = () => {
  return (
    <div className="card border-1 rounded-xl ">
      <img className="img-card" src={topImage} alt="Avatar" />
      <section className="flex flex-row items-start justify-start">
        <div className="bg-[#F4D04E] rounded-sm p-1 mt-2">
          <h3 className="font-extrabold px-1">Learning</h3>
        </div>
      </section>
      <h2 className="font-medium">Published 21 Dec 2023</h2>
      <h1 className="font-extrabold text-md hover:text-yellow-400 hover:cursor-pointer">
        HTML & CSS foundations
      </h1>
      <p className=" text-stone-600 -tracking-tight leading-3">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex flex-row gap-3 mt-4">
        <img className="w-6" src={avatar} alt="Avatar" />
        <h2 className="flex flex-row items-center font-bold">Greg Hooper</h2>
      </div>
    </div>
  );
};

export default BlogCard;
