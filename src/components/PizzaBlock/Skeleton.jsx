import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="150" r="130" />
    <rect x="0" y="295" rx="10" ry="10" width="260" height="24" />
    <rect x="0" y="335" rx="10" ry="10" width="260" height="88" />
    <rect x="0" y="440" rx="10" ry="10" width="94" height="30" />
    <rect x="123" y="441" rx="10" ry="10" width="135" height="45" />
  </ContentLoader>
);

export default Skeleton;
