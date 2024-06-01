import React from "react";
import Skeleton from "../../../components/Skeleton";

const AvatarSkeleton: React.FC = (): React.ReactElement => {
  return (
    <a className="inline-block mr-4" href="/">
      <Skeleton circle width={56} height={56} />
    </a>
  );
};

export default AvatarSkeleton;
