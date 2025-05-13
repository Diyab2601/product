
import React from "react";
import newsData from "./Newsdata";


const Component2 = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4">
      {newsData.map((news, index) => (
        <div key={index} className="border p-4 shadow-md rounded-xl bg-white">
          <img
            src={news.image}
            alt="news"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-2">{news.title}</h2>
          <p className="text-gray-600 mt-2">{news.description}</p>
          <div className="flex justify-end mt-4">
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read more
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Component2;
