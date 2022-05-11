import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withRoot from "./modules/withRoot";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Terms from "./Terms";
import Privacy from "./Privacy";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </Router>
  );
}

export default withRoot(App);
