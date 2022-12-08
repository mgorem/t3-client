import React, { useState } from "react";
import { explore_gems_data } from "../../data/explore-gems-data";
import { gemsData } from "../../data/gems";
import { FaGem } from "react-icons/fa";
import { Link } from "react-router-dom";
import GemJourney from "./GemJourney";

const SingleGem = () => {
  const [gems] = useState(explore_gems_data);
  const [value, setValue] = useState(0);
  const { mainImage } = gems[value];

  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article
          className="border-2 md:border-4 bg-background rounded-2xl 
          border-tertiary w-full p-3 flex flex-col gap-4 
          transition-all cursor-pointer px-8 pb-10 mt-20 mb-10"
        >
          <img src={mainImage} alt="" className="w-full rounded-2xl" />
          <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
            {gems.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-dark-400 opacity-60"
                } border-2 border transparent rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article className=" px-8 pb-10 font-primary text-tertiary mt-20 mb-10">
          <h2
            className="bg-gray py-1 text-secondary uppercase 
    tracking-wide text-md font-bold inline-block rounded shadow mb-5"
          >
            More Gem Details
          </h2>
          <h1 className="font-primary text-tertiary mb-10 font-bold text-3xl lg:text-4xl">
            Gem ID: TT-0001-AWE
          </h1>
          <p className="font-primary text-tertiary text-xl font-bolder mb-10 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            dolorum tempore saepe esse aliquid similique nam, dolore alias enim,
            tenetur minus
          </p>
          <ul>
            <li className="text-tertiary text-xl">
              Weight: <span className="text-secondary">7.58 Carats</span>
            </li>
            <li className="text-tertiary text-xl">
              Measurement:{" "}
              <span className="text-secondary">14.09 * 9.79 * 7.37mm</span>
            </li>
            <li className="text-tertiary text-xl">
              Hue: <span className="text-secondary">Violetish-Red-Hue</span>
            </li>
            <li className="text-tertiary text-xl">
              Tone:{" "}
              <span className="text-secondary">Medium to Medium Deep Tone</span>
            </li>
            <li className="text-tertiary text-xl">
              Intensity: <span className="text-secondary">Strong</span>
            </li>
            <li className="text-tertiary text-xl">
              Cut and Polish: <span className="text-secondary">Excellent</span>
            </li>
            <li className="text-tertiary text-xl">
              Shape: <span className="text-secondary">Oval</span>
            </li>
          </ul>
          {/* <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center mb-10">
              <li className=" text-4xl font-bold">$125.00</li>
            </ul>
          </div> */}
          <div className="text-center">
            <Link to="/checkout">
              <button
                className="flex items-center justify-center gap-4 bg-tertiary 
                            text-primary font-bold py-2 px-4 rounded-lg shadow mt-5 w-1/2"
              >
                <FaGem />
                <span className="text-xl text-semibold">
                  Gem Tracking History
                </span>
              </button>
            </Link>
          </div>
        </article>
      </section>

      <GemJourney />
    </>
  );
};

export default SingleGem;
