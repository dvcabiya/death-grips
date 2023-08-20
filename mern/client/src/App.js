import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
// import Navbar from "./components/navbar";
import IssueList from "./components/issueList";
// import Edit from "./components/edit";
import Create from "./components/create";
import Admin from "./components/admin";


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<IssueList />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */ }
        <Route path="/create" element={<Create />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      </div>
    </div>
  );
};

export default App;
