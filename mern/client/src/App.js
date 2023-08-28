import React from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import IssueList from "./components/issueList";
// import Edit from "./components/edit";
import Create from "./components/create";
// import Admin from "./components/admin";
import Home from "./components/home";



const App = () => {
  return (
    <div>
     <Navbar />
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/issues" element={<IssueList />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */ }
        <Route path="/create" element={<Create />} />
        {/*<Route path="/admin" element={<Admin />} /> */}

      </Routes>
      </div>
    </div>
  );
};

export default App;
