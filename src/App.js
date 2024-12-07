import React from "react";
import MembersSection from "./components/User";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow"></div> {/* White blank space */}
      <MembersSection />
    </div>
  );
}

export default App;
