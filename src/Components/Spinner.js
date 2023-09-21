import React from "react";
import loading from "./spinner.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={loading}
        style={{ margin: " 2rem  0rem 4rem  0rem" }}
        alt="loading"
      />
    </div>
  );
}
