import React from "react";
import ShowMap from "../components/map";

const fullStyle = {
  width: "100vw",
  height: "100vh",
};

const FullMap = () => {
  return (
    <div>
      <ShowMap style={fullStyle} />
    </div>
  );
};

export default FullMap;
