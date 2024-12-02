import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { HiCurrencyRupee } from "react-icons/hi2";

const ConfirmridePanel = ({setLookingDriver}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between  flex-col">
        <div className="">
          <img
            width={300}
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
        </div>

        <div className="flex h-20 px-2 items-center  border-2">
          <CgProfile className="mt-1" />  <p className="px-4">
           <h1 className="font-semibold">1231/43</h1>
           <h3>Arji siddharth Nagar</h3>
          </p>
        </div>
        <div className="flex h-20 mt-2 px-2 items-center  border-2">
          <FaLocationDot className="mt-1" /> 
          <p className="px-4">
           <h1 className="font-semibold">17647/43</h1>
           <h3>Bansi siddharth Nagar</h3>
          </p>
         
        </div>
        <div className="flex h-20 px-2 mt-2 items-center  border-2">
        <HiCurrencyRupee className="mt-1" /> 
       
        <p className="px-4">
           <h1 className="font-semibold"> ₹ 176.43</h1>
           <h3>Payment Cash</h3>
          </p>
        </div>
        <div className="w-full mt-3">
          <button onClick={()=>setLookingDriver(true)} className="px-5 p-2 text-white font-semibold bg-green-700 w-full">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmridePanel;
