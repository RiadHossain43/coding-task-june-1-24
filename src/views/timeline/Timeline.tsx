import React from "react";
import { TimelineContextProvider } from "./store";
import Posts from "./components/Posts";

const Timeline: React.FC = (): React.ReactElement => {
  return (
    <TimelineContextProvider>
      <div className="my-20 container mx-auto text-black dark:text-slate-100 bg-slate-200 dark:bg-slate-900">
        <Posts />
      </div>
    </TimelineContextProvider>
  );
};

export default Timeline;
