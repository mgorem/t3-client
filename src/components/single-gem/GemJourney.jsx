import React from "react";
import Miner1 from "../../assets/Miner1.jpeg";
import OtherContributors from "./OtherContributors";

const GemJourney = () => {
  return (
    <>
      <div>
        {/* Miner */}
        <div>
          <h1 className="font-primary text-center text-tertiary font-bold text-3xl md:text-6xl mt-10 mb-10">
            The Gem Journey
          </h1>
          <div className="flex flex-col items-center justify-center mt-5 mb-5">
            <h1 className="text-tertiary">Gem Process</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article>
            <div className="text-tertiary">
              <h1 className="text-tertiary md:text-4xl font-semibold md:leading-snug text-3xl leading-normal">
                Miner Profile
              </h1>
              <p className="text-xl py-4">
                Name: <span className="text-secondary">Mama Neema</span>
              </p>
              <p className="text-xl  py-4">
                Location:{" "}
                <span className="text-secondary">
                  Kuranze, Kasigau, Taita Taveta County, Kenya
                </span>
              </p>
              <p className="text-xl  py-4">
                Group/Organization:{" "}
                <span className="text-secondary">
                  Organization for Artisinal Miners (AWEIK)
                </span>
              </p>

              <h2 className="text-2xl py-1">Bio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                magnam explicabo sed obcaecati nulla distinctio, hic culpa amet
                soluta repellendus laboriosam totam, eum, incidunt omnis cum
                velit error iure inventore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur nihil nostrum culpa!
                Eveniet pariatur aspernatur ullam hic eos commodi dolore
                adipisci porro mollitia dolores, possimus, voluptate, iusto
                laborum quaerat. Aliquam. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aperiam ad totam delectus
                voluptate ab. Placeat enim nam, sed impedit iure libero veniam,
                fugit deserunt esse nihil quas repudiandae aut ab.
              </p>
            </div>
          </article>
          <article>
            <div className="flex items-center gap-3 mr-12 cursor-pointer transition-all">
              <img
                className="md:h-[550px] h-full object-cover border-3 rounded-2xl"
                src={Miner1}
                alt="Miner1"
              />
            </div>
          </article>
        </div>

        <div className="mt-10">
          <OtherContributors />
        </div>
      </div>
    </>
  );
};

export default GemJourney;
