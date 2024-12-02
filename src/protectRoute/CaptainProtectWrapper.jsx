import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const captainToken = localStorage.getItem("captainToken");
  console.log(captainToken)
  useEffect(() => {
    if (!captainToken) {
      return navigate("/captainLogin");
    }
  }, []);
  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
