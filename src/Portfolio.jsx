import React, { useState } from "react";
import img1 from "./assets/port1.png";
import img2 from "./assets/port2.png";
import img3 from "./assets/port3.png";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  function modalToggle(imgSrc) {
    // document.getElementById("modal").classList.contains("d-none")
    //   ? document.getElementById("modal").classList.remove("d-none")
    //   : document.getElementById("modal").classList.add("d-none");
    if (imgSrc === null) {
      document.getElementById("modal").classList.add("d-none");
    } else if (imgSrc !== null) {
      document.getElementById("modal").classList.remove("d-none");
      setSelectedImg(imgSrc);
    }
  }

  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <div className="mb-4">
      <div className="pt-4 space-top">
        <div className="text-center pt-4" style={{ color: "rgb(44, 62, 80)" }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div
              className="line me-3"
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            />
            <i className="fa-solid fa-star" />
            <div
              className="line ms-3"
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            />
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            {images.map((img, ids) => (
              <div className="col-lg-4 col-md-6" key={ids}>
                <div
                  onClick={() => modalToggle(img)}
                  className="rounded-3 overflow-hidden position-relative"
                  style={{ cursor: "pointer" }}
                >
                  <img alt="" className="w-100 rounded-3" src={img} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={() => modalToggle(null)}
        className="modal position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none"
        id="modal"
      >
        <img
          onClick={(e) => e.stopPropagation()}
          className="image"
          src={selectedImg}
        />
      </div>
    </div>
  );
}
