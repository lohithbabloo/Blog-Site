import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Notfound from "./notfound";

function App() {
  return (
    <Router>
      <Navbar />
        <div className="content">
        <Routes>
          <Route  path="/" element={<Home />}>
          </Route>
          <Route path="Create" element={<Create />}>
          </Route>
          <Route path="/blogs/:id" element={<BlogDetails />}>
          </Route>
          <Route path="*" element={<Notfound />}>
          </Route>
        </Routes>
        </div>

    </Router>
  );
}

export default App;
