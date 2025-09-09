import React from "react";
import BadgeGenerator from "./components/BadgeGenerator";
import "./App.css"; // keep this if your badge generator styles live here

const BatchGenerator: React.FC = () => {
  return (
    <div className="App">
      <BadgeGenerator />
    </div>
  );
};

export default BatchGenerator;
