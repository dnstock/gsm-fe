import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withRoot from "./modules/withRoot";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Terms from "./Terms";
import Privacy from "./Privacy";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default withRoot(App);
