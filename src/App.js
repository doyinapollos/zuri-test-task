import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/pages/home/Profile";
import EmailVerification from "./components/pages/email-verification/EmailVerification";
import SignUp2 from "./components/pages/SignUp2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="email-verify" element={<EmailVerification />} />
        <Route path="sign-up-2" element={<SignUp2 />} />
      </Routes>
    </div>
  );
}

export default App;

/*

<Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />

*/
