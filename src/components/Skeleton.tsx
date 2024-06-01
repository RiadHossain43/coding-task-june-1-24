import React from "react";
import Skeleton, { SkeletonProps, SkeletonTheme } from "react-loading-skeleton";
interface WrappedSkeletonProps extends SkeletonProps {}
const WrappedSkeleton: React.FC<WrappedSkeletonProps> = ({
  ...rest
}): React.ReactElement => {
  return (
    <SkeletonTheme baseColor="#334155" highlightColor="#475569">
      <Skeleton {...rest} />
    </SkeletonTheme>
  );
};

export default WrappedSkeleton;
