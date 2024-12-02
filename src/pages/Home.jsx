import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext"; // Import the context

const Home = () => {
  const us = useContext(UserContext)
  console.log(us)
  return (
    <div className="bg-red-500 bg-bottom  bg-cover bg-[url(https://img.freepik.com/premium-photo/traffic-light-that-is-street-with-lights_975681-254390.jpg)] h-screen flex justify-between flex-col">
      <div>
        <h1 className="text-white font-bold text-[25px] p-5">FastRide</h1>
      </div>

      <div className="bg-white  ">
        <h2 className="text-black mt-4 px-4 text-[20px] font-semibold">
          Get Started With FastRide
        </h2>
        <div className="flex px-4 h-20 justify-center  items-center">
          <Link
            to={"/userLogin"}
            className="bg-black text-center  content-center w-full h-10 px-10 text-white "
          >
            Continoue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
