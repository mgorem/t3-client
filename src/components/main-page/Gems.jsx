import React, { useState } from "react";
import Button from "./Button";
// import { FaCheckCircle } from "react-icons/fa";
import data from "../../data/item-gem.json";
import { Link } from "react-router-dom";
import { explore_gems_data } from "../../data/explore-gems-data";

const Gems = () => {
  // const [gems] = useState(explore_gems_data);
  return (
    <>
      <div className="container mx-auto py-4 md:py-20 px-3 md:px-0">
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-4xl">
            Tracked Gems
          </h1>
          <Button text="View More" variant="secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="
                border-2 md:border-4 bg-background rounded-2xl 
                border-tertiary w-full p-3 flex flex-col gap-4 hover:scale-105 
                transition-all cursor-pointer"
              >
                {/* image */}
                <img
                  src={`/img/${item.image}`}
                  alt=""
                  className="w-full rounded-xl"
                />
                {/* title and username */}
                <div>
                  <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                    {item.title}
                  </h1>
                  <p className="text-tertiary">@{item.username}</p>
                </div>
                {/* status of the item */}
                <div className="flex justify-between items-center">
                  <p className="text-tertiary font-bold">{item.status}</p>
                  <Link to="/exploregems/exploregem">
                    <Button text="View Gem" variant="secondary" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gems;
