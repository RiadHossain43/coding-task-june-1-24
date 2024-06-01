import React from "react";
interface AvatarProps {
  src: string;
}
const Avatar: React.FC<AvatarProps> = ({ src }): React.ReactElement => {
  return (
    <a className="inline-block mr-4" href="/">
      <img
        className="rounded-full max-w-none w-14 h-14"
        src={src || "https://randomuser.me/api/portraits/men/9.jpg"}
        alt="title"
      />
    </a>
  );
};

export default Avatar;
