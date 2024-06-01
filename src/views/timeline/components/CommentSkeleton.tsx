import React from "react";
import Skeleton from "../../../components/Skeleton";
import AvatarSkeleton from "./AvatarSkeleton";
const CommentSkeleton: React.FC = ({}): React.ReactElement => {
  return (
    <React.Fragment>
      <div className="media flex pb-4">
        <a className="inline-block mr-4" href="/">
          <AvatarSkeleton />
        </a>
        <div className="media-body">
          <div>
            <a className="inline-block text-base font-bold mr-2" href="/">
              <Skeleton width={150} />
            </a>
            <span className="text-slate-500 dark:text-slate-300">
              <Skeleton width={150} />
            </span>
          </div>
          <p>
            <Skeleton width={"100%"} count={3} />
          </p>
          <div className="mt-2 flex items-center">
            <a className="inline-flex items-center py-2 mr-3" href="/">
              <span className="mr-2">
                <Skeleton width={24} height={24} />
              </span>
              <span className="text-base font-bold">
                <Skeleton width={24} height={24} />
              </span>
            </a>
            <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
              <Skeleton width={100} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentSkeleton;
