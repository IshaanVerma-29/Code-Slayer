import React from "react";
import BadgeGenerator from "./components/BadgeGenerator";
import "./App.css"; // rename to batch-generator.css if you want clearer scoping

/**
 * BatchGenerator page
 * - Acts as a wrapper route/page for the BadgeGenerator UI.
 * - This is what your router (App.tsx) will load at /batch-generator.
 */
const BatchGenerator: React.FC = () => {
  return (
    <main className="badge-generator-page">
      <BadgeGenerator />
    </main>
  );
};

export default BatchGenerator;
