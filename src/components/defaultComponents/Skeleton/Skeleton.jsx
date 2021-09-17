import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <div className="Card-wrapper">
    <ContentLoader
      speed={2}
      width={300}
      height={85}
      viewBox="0 0 300 85"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="59" y="16" rx="3" ry="3" width="165" height="24" />
      <rect x="9" y="56" rx="3" ry="3" width="276" height="20" />
      <circle cx="25" cy="23" r="22" />
    </ContentLoader>
  </div>
);

export default Skeleton;
