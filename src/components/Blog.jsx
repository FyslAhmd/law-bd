import React from "react";

const Blog = ({ item }) => {
  const { question, answer, date } = item;
  return (
    <div className="bg-gray-100 my-4 p-4 rounded-xl space-y-2">
      <h1 className="text-xl font-bold">{question}</h1>
      <hr className="border-dashed"/>
      <div>
        <p className="text-lg font-medium text-blue-800">Answer:</p>
        <p className="text-justify">{answer}</p>
      </div>
      <hr className="border-dashed"/>
      <p className="text-lg text-red-900 font-bold underline">Added at {date}</p>
    </div>
  );
};

export default Blog;
