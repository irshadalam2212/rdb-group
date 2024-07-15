// src/CoreValuesImage.js
import React from "react";

const CoreValuesImage = () => {
  const coreImage = "/assets/images2/Core.jpg";
  return (
    <div className="position-relative text-center text-white">
      <img
        src={coreImage}
        alt="Core Values"
        className="img-fluid"
        style={{ height: "100vh", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="position-absolute top-0 start-0 p-3">
          {/* <i className="fa-regular fa-lightbulb"></i> */}
          <h2 className="main-color4 main-colorbg3 px-2 mx-2 rounded">
            Our Core Values
          </h2>
        </div>
        <div
          className="main-colorbg3 position-absolute bottom-0 start-0 end-0 d-flex justify-content-around p-3"
          style={{
            // backgroundColor: "#000",
            opacity: 0.8,
          }}
        >
          <div className="text-center">
            <i className="fas fa-lightbulb fs-1 main-color4"></i>
            <p className="text-light">INNOVATION</p>
          </div>
          <div className="text-center">
            <i className="fas fa-puzzle-piece fs-1 main-color4"></i>
            <p className="text-light">COMMITMENT</p>
          </div>
          <div className="text-center">
            <i className="fas fa-handshake fs-1 main-color4"></i>
            <p className="text-light">INTEGRITY</p>
          </div>
          <div className="text-center">
            <i className="fas fa-medal fs-1 main-color4"></i>
            <p className="text-light">QUALITY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesImage;
