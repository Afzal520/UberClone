import React from "react";
import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/api/auth/register`; //  your API endpoint
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await fetch(url, {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });

      if (!response.status == 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between  flex-col h-screen p-2">
          <h1 className=" font-bold text-[25px] ">FastRide</h1>
          <div className="content-center">
            <div className="max-w-full">
              <div className="grid gap-7  grid-cols-2">
                <div className="">
                  <h2 className="font-medium text-[18px]">FirstName</h2>
                  <input
                    onChange={(e) => setfirstName(e.target.value)}
                    className=" bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="firstName"
                  />
                </div>
                <div className="">
                  <h2 className="font-medium text-[18px]">LastName</h2>
                  <input
                    onChange={(e) => setlastName(e.target.value)}
                    className=" bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="lastName"
                  />
                </div>
              </div>
              <h2 className="font-medium text-[18px] mt-2">
                What's your Email
              </h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
                type="email"
                name="email"
                value={email}
                placeholder="email"
              />

              <h2 className="font-medium text-[18px]">Enter your password</h2>
              <input
                className=" bg-[#eeeeee] border-2 w-full p-2 mt-3 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="email"
                value={password}
                placeholder="passworrd"
              />

              <div className=" mt-4">
                <div className="max-w-full">
                  <button className="bg-black text-white w-full h-10">
                    Signup{" "}
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-2 font-medium">
                <p>Already have a account? </p>
                <Link to={"/userLogin"} className="text-blue-300">
                  Login Here
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-full">
              <Link
                to={"/captainLogin"}
                className="bg-black text-center  content-center inline-block w-full text-white px-6 h-10"
              >
                Login Captain
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSignup;
