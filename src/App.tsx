import React from "react";
import { Toaster } from "react-hot-toast";
import Timeline from "./views/timeline/Timeline";

function App() {
  return (
    <React.Fragment>
      <Toaster />
      <Timeline />
    </React.Fragment>
  );
}

export default App;
