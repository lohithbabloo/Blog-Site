import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Router exact path="/">
            <Home />
          </Router>
          <Router path="/Create">
            <Create />
          </Router>
          <Router path="/blogs">
            <BlogDetails />
          </Router>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
