import React from "react";

function Notes({ contents }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "200px",
          resize: "horizontal",
          overflow: "auto",
        }}
      ></div>
      <div
        style={{ backgroundColor: "green", width: "50px", height: "100px" }}
      ></div>
    </>
  );
}

export default Notes;
