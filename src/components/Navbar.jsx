import React, { useState } from "react";
import { BiMenu, BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "./main-page/Button";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <nav className="fixed w-full bg-tertiary px-2 sm:px-2 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="text-3xl font-bold text-primary">
          T3
        </a>
        <div className="flex md:order-2 md:hidden">
          <button type="button" onClick={() => setActive(!active)}>
            {active ? <BiMenu size={30} /> : <BiXCircle size={30} />}
          </button>
        </div>
        <div
          className={`${
            active ? `hidden` : ``
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8:mt-0 text-xl text-primary">
            <li className="py-2 md:py-0">
              <a
                href="/"
                className="py-4 pr-6 p1-0 hover:opacity-80 transition-all"
              >
                Home
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="/exploregems"
                className="py-4 pr-6 p1-0 hover:opacity-80 transition-all"
              >
                Explore Gems
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="/"
                className="py-4 pr-6 p1-0 hover:opacity-80 transition-all"
              >
                About Gemfund
              </a>
            </li>
            <li>
              <Link className="px-3" to="/requestaccess">
                <Button text="Request Access" size="md" variant="primary" />
              </Link>
              <Link to="/login">
                <Button text="Login" size="md" variant="primary" />
              </Link>
            </li>
            {/* <li>
              <a
                href="/"
                className="py-4 pr-6 p1-0 hover:opacity-80 transition-all"
              >
                <Link to="/requestaccess">
                  <Button text="Request Access" />
                </Link>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
