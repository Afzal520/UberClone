import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/userLogin";
import UserSignup from "./pages/userSignup";
import CaptainLogin from "./pages/captainLogin";
import CaptainSignup from "./pages/captainSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./protectRoute/UserProtectWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./protectRoute/CaptainProtectWrapper";
import CaptainRiding from "./pages/CaptainRiding";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userSignup" element={<UserSignup />} />
        <Route path="/captainLogin" element={<CaptainLogin />} />
        <Route path="/captainSignup" element={<CaptainSignup />} />
        <Route path="/captainRiding" element={<CaptainRiding/>}/>

        <Route
          path="/captainHome"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Start />
            </UserProtectWrapper>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
