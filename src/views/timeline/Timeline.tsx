import React from "react";
import { TimelineContextProvider } from "./store";
import Posts from "./components/Posts";

const Timeline: React.FC = (): React.ReactElement => {
  return (
    <TimelineContextProvider>
      <Posts />
    </TimelineContextProvider>
  );
};

export default Timeline;
