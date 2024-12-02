import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";
import FinishRide from "./FinishRide";
const CaptainRiding = () => {
  const [finishRide, setFinishRide] = useState(false);
  const finishRef = useRef(null);
  useEffect(() => {
    gsap.to(finishRef.current, {
      y: finishRide ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [finishRide]);
  return (
    <div className="relative w-full h-screen">
      {/* Background map */}
      <div className="h-screen w-screen" onClick={() => settoggleCar(false)}>
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
      <div className="relative w-full">
        <div className="absolute bottom-0 w-full bg-red-500">
          <div
            className="flex justify-center"
            // onClick={() => settoggleCar(false)}
          >
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between h-20 items-center p-2">
            <div className="font-semibold text-[22px]">10 km away</div>
            <div className="">
              <button
                onClick={() => setFinishRide(true)}
                className="bg-yellow-400  font-semibold text-white p-2 rounded-lg"
              >
                Complete Ride
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={finishRef}
        className="fixed  translate-y-full h-screen w-full p-5 z-10 bg-white bottom-0"
      >
        <div
          className="flex justify-center"
          onClick={() => setFinishRide(false)}
        >
          <IoIosArrowDown />
        </div>
        <h1 className="font-bold text-[25px] mb-4">
          Finish this ride 
        </h1>
        <FinishRide />
      </div>
    </div>
  );
};

export default CaptainRiding;
