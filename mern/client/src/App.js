import React from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import IssueList from "./components/issueList";
import Create from "./components/create";
import About from "./components/about";
import Home from "./components/home";



const App = () => {
  return (
    <div>
     <Navbar />
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/issues" element={<IssueList />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
