import React from "react";
import img from "./assets/avataaars.svg";

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white">
      <div className="text-center space-top">
        <img
          src={img}
          alt="a drawing of a boy smiling"
          className="mb-3 image"
        />
        <div className="text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            start Framework
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" />
            <i className="fa-solid fa-star" />
            <div className="line ms-3" />
          </div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
