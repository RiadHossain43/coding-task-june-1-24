import React from "react";
import Avatar from "../../../components/Avatar";
import Skeleton from "../../../components/Skeleton";
import AvatarSkeleton from "./AvatarSkeleton";

const PostSkeleton: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <AvatarSkeleton />
            <div className="flex flex-col">
              <div className="flex items-center">
                <a className="inline-block text-lg font-bold mr-2" href="/">
                  <Skeleton width={170} />
                </a>
                <span className="text-slate-500 dark:text-slate-300">
                  <Skeleton style={{ width: 100 }} />
                </span>
              </div>
              <div className="text-slate-500 dark:text-slate-300">
                <Skeleton width={120} />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold">
          <Skeleton width={"80%"} />
        </h2>
        <div className="py-4">
          <p>
            <Skeleton width={"100%"} count={10} />
          </p>
        </div>
        <div className="py-4">
          <a className="inline-flex items-center" href="/">
            <span className="mr-2">
              <Skeleton width={24} height={24} />
            </span>
            <span className="text-lg font-bold">
              {" "}
              <Skeleton width={24} height={24} />
            </span>
          </a>
        </div>
        <div className="relative">
          <Skeleton className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center"></span>
        </div>
        <div className="pt-6">
          <div className="w-full">
            <Skeleton className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75" />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default PostSkeleton;
