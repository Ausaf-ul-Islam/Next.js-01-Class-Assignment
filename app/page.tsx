import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/About" className="text-white hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/Services" className="text-white  hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="text-white hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <br />
      <div className="text-center text-xl font-semibold my-32">
        Home Page Content Here!
      </div>
    </>
  );
};

export default HomePage;
