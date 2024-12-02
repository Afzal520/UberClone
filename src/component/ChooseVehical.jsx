import React from "react";
import { BsPeopleFill } from "react-icons/bs";
const ChooseVehical = ({setChooseVehical}) => {
  return (
    <div>
      <div onClick={()=>setChooseVehical(true)} className="flex w-full mt-2 border-2  hover:border-black rounded-md justify-start h-24 items-center">
        <img
          width={120}
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
          srcset=""
        />
        <div className="">
          <div className="flex items-start">
            <h2 className="font-bold">Ride Go </h2>
            <BsPeopleFill className="m-1" />
          </div>
          <div className="flex ">
            <div className="">
              <p className="font-bold">3 min away . 1:30</p>
              <p>afforable campact rides</p>
            </div>

            <p className="font-bold">₹ 320</p>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-2 border-2  hover:border-black rounded-md justify-start h-24 items-center">
        <img
          width={120}
          src="https://5.imimg.com/data5/XQ/BN/BX/GLADMIN-82341070/tinypng-ashx-500x500.png"
          alt=""
          srcset=""
        />
        <div className="">
          <div className="flex items-start">
            <h2 className="font-bold">Ride Go </h2>
            <BsPeopleFill className="m-1" />
          </div>
          <div className="flex ">
            <div className="">
              <p className="font-bold">3 min away . 1:30</p>
              <p>afforable campact rides</p>
            </div>

            <p className="font-bold">₹ 320</p>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-2  border-2  hover:border-black rounded-md justify-start h-24 items-center">
        <img
          width={120}
          src="https://www.pngitem.com/pimgs/m/13-137122_transparent-food-delivery-png-uber-eats-car-png.png"
          alt=""
          srcset=""
        />
        <div className="">
          <div className="flex items-start">
            <h2 className="font-bold">Ride Go </h2>
            <BsPeopleFill className="m-1" />
          </div>
          <div className="flex ">
            <div className="">
              <p className="font-bold">3 min away . 1:30</p>
              <p>afforable campact rides</p>
            </div>

            <p className="font-bold">₹ 320</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseVehical;
