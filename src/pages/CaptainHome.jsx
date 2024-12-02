import { useEffect, useRef, useState } from "react";
import CaptainsDetails from "../component/captains/CaptainsDetails";
import RidePopup from "../component/captains/RidePopup";
import { IoIosArrowDown } from "react-icons/io";
import {gsap} from "gsap"
import AcceptedRidePopup from "../component/captains/AcceptedRidePopup";
const CaptainHome = () => {
 const [ridePopup,setridePopup]= useState(true)
 const [acceptedRidePopup,setacceptedRidePopup]= useState(false)
 const acceptedRef = useRef(null)
 const rideRef = useRef(null)
   // Animation for the looking for driver panel
   useEffect(() => {
    gsap.to(rideRef.current, {
      y: ridePopup ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [ridePopup]);
  useEffect(() => {
    gsap.to(acceptedRef.current, {
      y: acceptedRidePopup ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [acceptedRidePopup]);
  return (
    <div className="relative">
      <div className="flex flex-col justify-between">
        <div className="h-screen">
          {/* <div className="h-screen w-screen" onClick={() => settoggleCar(false)}> */}
          <img
            className="h-full w-full object-cover"
            src="https://community-cdn.openstreetmap.org/uploads/default/original/3X/d/6/d61dcc266a636eb2ada0eab47553bec1619fb014.jpeg"
            alt="Map"
          />
        </div>
        <div className="">
          <CaptainsDetails />
        </div>
        <div
          ref={rideRef}
          className="fixed  translate-y-full  w-full p-5 z-10 bg-white bottom-0"
        >
          <div
            className="flex justify-center"
            onClick={() => setridePopup(false)}
          >
            <IoIosArrowDown  />
          </div>
          <h1 className="font-bold text-[25px] mb-4">New Ride Available</h1>
          <RidePopup setridePopup={setridePopup} setacceptedRidePopup = {setacceptedRidePopup} />
        </div>
        <div
          ref={acceptedRef}
          className="fixed  translate-y-full h-screen w-full p-5 z-10 bg-white bottom-0"
        >
          <div
            className="flex justify-center"
            onClick={() => setacceptedRidePopup(false)}
          >
            <IoIosArrowDown  />
          </div>
          <h1 className="font-bold text-[25px] mb-4">Confirm this ride to start</h1>
          <AcceptedRidePopup setacceptedRidePopup={setacceptedRidePopup} setRidePopup={setridePopup} />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
