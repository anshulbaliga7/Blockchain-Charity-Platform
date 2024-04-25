import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dapp } from "./components/Dapp";
import Homepage from "./homepage";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
 <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dapp" element={<Dapp />} />
      </Routes>
    </Router>
 </React.StrictMode>,
 document.getElementById("root")
);
