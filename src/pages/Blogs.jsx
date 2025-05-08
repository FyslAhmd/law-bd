import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../components/Blog";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-bold">Blogs</h1>
      <p className="text-gray-600 font-medium text-center my-5">
        Let's explore some basic concept that will make you a good developer.{" "}
      </p>
      <div>
        {data.map((data) => (
          <Blog key={data.questionId} item={data}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
