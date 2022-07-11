import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <img
        className="my-3"
        src={loading}
        alt="Loading"
        style={{ width: "35px" }}
      />
    </div>
  );
};

export default Spinner;
