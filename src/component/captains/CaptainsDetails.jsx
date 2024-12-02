import React from 'react'
import { SlSpeedometer } from "react-icons/sl";
const CaptainsDetails = () => {
  return (
    <div className="absolute bottom-0 h-64 bg-white w-full">
    <div className="">
      <div className="flex  justify-between p-3">
        <div className=" flex items-center ">
          <img
            width={100}
            src="https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231"
            alt=""
          
          />
          <p className="font-bold text-[26px]">Aadil Driver</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="font-semibold text-[20px]">₹ 900.32</h2>
          <p className="">Earned</p>
        </div>
      </div>
      <div className="flex justify-evenly  ">
        <div className="w-[33%] flex flex-col justify-center items-center">
          <div className="">
            <SlSpeedometer className="text-[30px] mb-2" />
          </div>
          <div className="text-center">
            <p>10.2</p>
            <p>Hours Online</p>
          </div>
        </div>
        <div className="w-[33%] flex flex-col justify-center items-center">
          <div className="">
            <SlSpeedometer className="text-[30px] mb-2" />
          </div>
          <div className="text-center">
            <p>10.2</p>
            <p>Hours Online</p>
          </div>
        </div>
        <div className="w-[33%] flex flex-col justify-center items-center">
          <div className="">
            <SlSpeedometer className="text-[30px] mb-2" />
          </div>
          <div className="text-center">
            <p>10.2</p>
            <p>Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CaptainsDetails