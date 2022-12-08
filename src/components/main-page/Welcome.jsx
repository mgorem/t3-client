import React from "react";
import Typed from "react-typed";
import Button from "./Button";
// import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
// import Image from "../../../public/images/t3-welcome.jpg";

const Welcome = () => {
  return (
    <>
      <div className="bg-tertiary py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div className="flex flex-col gap-8 text-center items-center md:text-left md:items-start">
            <h1 className="text-5xl text-center items-center md:text-left md:text-8xl font-primary font-semibold text-primary">
              <span className="text-primary decoration-solid">
                Track and trace gemstones
              </span>{" "}
              <span className="text-secondary text-bold underline decoration-solid">
                from mine to market
              </span>
            </h1>
            <div className="flex justify-center items center">
              <p className="text-primary md:text-2xl">T3 guarantees</p>
              <Typed
                className="text-primary-500 md:text-2xl font-bold pl-2"
                strings={["Unmatched Traceability", "Unmatched Transparency"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <div className="flex justify-between w-3/4">
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">5</h1>
                <p className="text-sm md:text-base">Women Miners</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">8</h1>
                <p className="text-sm md:text-base">Contributors</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">5</h1>
                <p className="text-sm md:text-base">Gemstones Tracked</p>
              </div>
            </div>
            <div>
              <Link to="/requestaccess">
                <Button
                  text="Start Browsing"
                  size="lg"
                  variant="primary-outline"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* <Spline
              scene="https://prod.spline.design/oirhpA0XLqMdADmc/scene.splinecode"
              className="cursor-pointer"
            /> */}
            {/* <img className="w-full" src={welcome3} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
