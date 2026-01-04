import React from "react";
import Home from "./home/Home";
import Courses from "./course/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
