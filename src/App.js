import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/pages/home/Profile";
import EmailVerification from "./components/pages/email-verification/EmailVerification";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="email-verify" element={<EmailVerification />} />
      </Routes>
    </div>
  );
}

export default App;

/*

<Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />

*/
