import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi2";
import { Link } from "react-router-dom";
const FinishRide = () => {
  return (
    <div className="bg-white">
      <div className="flex rounded-lg  p-2 bg-yellow-500  justify-between h-20 items-center">
        <div className="flex gap-2 justify-center items-center">
          <img
            className="rounded-xl"
            width={50}
            src="https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231"
            alt=""
          />
          <p className="font-semibold">User Ride</p>
        </div>
        <div className="">
          <p className="font-semibold">2.8 KM</p>
        </div>
      </div>
      <div className="flex h-20 px-2 items-center  border-b-2">
        <CgProfile className="mt-1" />{" "}
        <p className="px-4">
          <h1 className="font-semibold">1231/43</h1>
          <h3>Arji siddharth Nagar</h3>
        </p>
      </div>
      <div className="flex h-20 mt-2 px-2 items-center  border-b-2">
        <FaLocationDot className="mt-1" />
        <p className="px-4">
          <h1 className="font-semibold">17647/43</h1>
          <h3>Bansi siddharth Nagar</h3>
        </p>
      </div>
      <div className="flex h-20 px-2 mt-2 items-center  border-b-2">
        <HiCurrencyRupee className="mt-1" />

        <p className="px-4">
          <h1 className="font-semibold"> ₹ 176.43</h1>
          <h3>Payment Cash</h3>
        </p>
      </div>

        <div className="flex flex-col mt-2 gap-4 text-white font-semibold text-[20px]">
          <Link
            to={"/captainHome"}
            className="bg-green-600 text-center w-full p-2 rounded-lg "
          >
           Finish Ride
          </Link>
         
        </div>
        <p className='mt-2 text-red-600 font-medium'>Click Finish ride button  if you have completed the  payment </p>
     
    </div>
  )
}

export default FinishRide