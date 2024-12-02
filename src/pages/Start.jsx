import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearch from "../component/LocationSearch";
import ChooseVehical from "../component/ChooseVehical";
import ConfirmridePanel from "../component/ConfirmridePanel";
import LookingDriver from "../component/LookingDriver";
import WaitingForDriver from "../component/WaitingForDriver";

const Start = () => {
  // State variables for managing UI behavior
  const [openPanel, setOpenPanel] = useState(false); // Toggles the location search panel
  const [toggleCar, settoggleCar] = useState(false); // Toggles the vehicle selection panel
  const [chooseVehical, setChooseVehical] = useState(false); // Toggles the confirm ride panel
  const [lookingDriver, setLookingDriver] = useState(false); // Toggles the looking for a driver panel
  const [waitingForDriver,setWaitingForDriver]= useState(false) // Toggle the waiting For  a driver panel
  // References to DOM elements for GSAP animations
  const panelRef = useRef(null);
  const carRef = useRef(null);
  const confirmPanel = useRef(null);
  const lookingRef = useRef(null);
  const waitingDriverRef = useRef(null)

  // Animation for the location search panel
  useEffect(() => {
    gsap.to(panelRef.current, {
      height: openPanel ? "470px" : "0px", // Expands or collapses the panel
      duration: 0.5,
      ease: "power1.out",
    });
  }, [openPanel]);

  // Animation for the vehicle selection panel
  useEffect(() => {
    gsap.to(carRef.current, {
      y: toggleCar ? "-25%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [toggleCar]);

  // Animation for the confirm ride panel
  useEffect(() => {
    gsap.to(confirmPanel.current, {
      y: chooseVehical ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [chooseVehical]);

  // Animation for the looking for driver panel
  useEffect(() => {
    gsap.to(lookingRef.current, {
      y: lookingDriver ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [lookingDriver]);
   // Animation for the Waiting for  driver panel
   useEffect(() => {
    gsap.to(waitingDriverRef.current, {
      y: waitingForDriver ? "0%" : "100%", // Slide in or out
      duration: 0.5,
      ease: "power1.out",
    });
  }, [waitingForDriver]);

  return (
    <div className="relative w-full h-screen">
      {/* Background map */}
      <div className="h-screen w-screen" onClick={() => settoggleCar(false)}>
        <img
          className="h-full w-full object-cover"
          src="https://community-cdn.openstreetmap.org/uploads/default/original/3X/d/6/d61dcc266a636eb2ada0eab47553bec1619fb014.jpeg"
          alt="Map"
        />
      </div>

      {/* Bottom panels */}
      <div className="absolute bottom-0 flex w-full flex-col">
        {/* Location Search Form */}
        <form>
          <div className="bg-white bottom-0 items-center relative w-full p-3">
            {/* Close Panel Button */}
            <div
              className="absolute right-2 top-4"
              onClick={() => setOpenPanel(false)}
            >
              <IoIosArrowDown
                className={`cursor-pointer ${
                  openPanel ? "opacity-60" : "opacity-0"
                }`}
              />
            </div>
            {/* Input fields for pickup and destination */}
            <h3 className="font-bold text-[20px]">Find a Trip</h3>
            <input
              className="bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
              onClick={() => setOpenPanel(true)}
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
              type="text"
              placeholder="Enter your destination"
            />
          </div>
          {/* Animated Panel for Location Search */}
          <div ref={panelRef} className="bg-white overflow-hidden">
            <LocationSearch toggleCar={toggleCar} settoggleCar={settoggleCar} />
          </div>
        </form>

        {/* Vehicle Selection Panel */}
        <div
          ref={carRef}
          className="fixed translate-y-full w-full p-5 z-10 bg-white bottom-0"
        >
          <div
            className="flex justify-center"
            onClick={() => settoggleCar(false)}
          >
            <IoIosArrowDown />
          </div>
          <h3 className="font-bold text-[25px]">Choose a Vehicle</h3>
          <ChooseVehical setChooseVehical={setChooseVehical} />
        </div>

        {/* Confirm Ride Panel */}
        <div
          ref={confirmPanel}
          className="fixed translate-y-full w-full p-5 z-10 bg-white bottom-0"
        >
          <div
            className="flex justify-center"
            onClick={() => setChooseVehical(false)}
          >
            <IoIosArrowDown />
          </div>
          <h3 className="font-bold text-[25px]">Confirm Ride</h3>
          <ConfirmridePanel setLookingDriver={setLookingDriver} />
        </div>

        {/* Looking for Driver Panel */}
        <div
          ref={lookingRef}
          className="fixed translate-y-full w-full p-5 z-10 bg-white bottom-0"
        >
          <div className="flex justify-center"
           onClick={() => setLookingDriver(false)}>
           
            <IoIosArrowDown />
          </div>
          <h3 className="font-bold text-[25px]">Looking for Driver</h3>
          <LookingDriver />
        </div>
         {/* Waiting  Driver Panel */}
         <div
          ref={waitingDriverRef}
          className="fixed translate-y-full  w-full p-5 z-10 bg-white bottom-0"
        >
          <div className="flex justify-center"
           onClick={() => setLookingDriver(false)}>
           
            <IoIosArrowDown />
          </div>
          <h3 className="font-bold text-[25px]">Looking for Driver</h3>
         <WaitingForDriver/>
        </div>
      </div>
    </div>
  );
};

export default Start;
