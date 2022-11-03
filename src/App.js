import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { MsalProvider } from "@azure/msal-react";
import { NavBar } from "./components/Navbar";

function App({ msalInstance }) {
  return (
    <div>
      <MsalProvider instance={msalInstance}>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </MsalProvider>
    </div>
  );
}
export default App;
