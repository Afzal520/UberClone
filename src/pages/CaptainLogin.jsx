import React from "react";
import { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/api/captain/login`; //  your API endpoint
    const data = {
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
      if (result.success) {
        localStorage.setItem("captainToken", result.token);
        navigate("/captainHome");
      }
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between  flex-col h-screen p-2">
          <img
            width={130}
            height={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVV0gSOae_NqQkSGu9lPwEf2DZrWzW8JZ-A&s"
            alt="logo"
           
          />
          <div className="content-center">
            <div className="max-w-full">
              <h2 className="font-medium text-[18px]">What's your Email</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-[#eeeeee] border-2 w-full p-2 mt-3"
                type="email"
                name="email"
                value={email}
                placeholder="email"
              />
              <div className="mt-3">
                <h2 className="font-medium text-[18px]">Enter your password</h2>
                <input
                  className=" bg-[#eeeeee] border-2 w-full p-2 mt-3"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="email"
                  value={password}
                  placeholder="passworrd"
                />
              </div>
              <div className=" mt-4">
                <div className="max-w-full">
                  <button className="bg-black text-white w-full h-10">
                    Captain Login{" "}
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-2 font-medium">
                <p>New Here ? </p>
                <Link to={"/captainSignup"} className="text-blue-300">
                  Register as a Captain
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-full">
              <Link
                to={"/userLogin"}
                className="bg-black inline-block text-center  content-center w-full text-white px-6 h-10"
              >
                Login User
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CaptainLogin;
