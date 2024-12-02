import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const LocationSearch = ({toggleCar,settoggleCar}) => {
  
  return (
    <div className="flex flex-col items-center p-3">
      <div onClick={()=>settoggleCar(true)} className="font-semibold mt-2 text-[17px] border-2 flex justify-center items-center h-24">
        <span className="p-3">
          {" "}
          
          <MdOutlineMyLocation className="text-[23px]" />
        </span>{" "}
        <p className="p-1"> 201 , Near bansi siddhartNagar bansi, Pin 272153</p>
      </div>
      <div className="font-semibold mt-2 text-[17px] border-2 flex justify-center items-center h-24">
        <span className="p-3">
          {" "}
          
          <MdOutlineMyLocation className="text-[23px]" />
        </span>{" "}
        <p className="p-1"> 201 , Near bansi siddhartNagar bansi, Pin 272153</p>
      </div>
      <div className="font-semibold mt-2 text-[17px] border-2 flex justify-center items-center h-24">
        <span className="p-3">
          {" "}
          
          <MdOutlineMyLocation className="text-[23px]" />
        </span>{" "}
        <p className="p-1"> 201 , Near bansi siddhartNagar bansi, Pin 272153</p>
      </div>
    </div>
  );
};

export default LocationSearch;
