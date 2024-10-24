import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white">
      <div className="font-bold text-2xl hover:text-blue-700 duration-300">
        <a href="#">Namık Korona </a>
      </div>
      <div className="flex justify-between gap-8">
        <ul className="flex justify-between gap-8 text-lg">
          <li className="hover:text-blue-700 duration-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-700 duration-300">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-blue-700 duration-300">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-700 duration-300">
            <a href="#">Contacts</a>
          </li>
        </ul>

        <div>
          <ul className="flex justify-between gap-8">
            <li>
              <a href="#">
                <img src="/prime_github.png" alt="github" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/linkedin.png" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/instagram.png" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
