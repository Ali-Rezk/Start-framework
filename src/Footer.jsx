import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-indigo footer">
        <div className="row group">
          <div className="col-md-4 item">
            <div className=" text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4 item text-white ">
            <div className=" text-center">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook mx-1 icon" />
                <i className="fa-brands fa-twitter mx-1 icon" />
                <i className="fa-brands fa-linkedin-in mx-1 icon" />
                <i className="fa-solid fa-globe mx-1 icon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div className=" text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rights text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
