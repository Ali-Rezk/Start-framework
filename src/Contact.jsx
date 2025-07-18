import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="contact mb-4 space-top">
      <div className="pt-3 conatiner">
        <div className="text-center pt-4" style={{ color: "rgb(44, 62, 80)" }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            contact section
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
        <form className="w-50 p-3 mx-auto mt-5">
          <div className="floating-label mb-4 position-relative">
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className={userName ? "float" : ""}>userName :</label>
          </div>

          <div className="floating-label mb-4 position-relative">
            <input
              id="userAge"
              type="text"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
            <label className={userAge ? "float" : ""}>userAge :</label>
          </div>
          <div className="floating-label mb-4 position-relative">
            <input
              id="userEmail"
              type="text"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label className={userEmail ? "float" : ""}>userEmail :</label>
          </div>
          <div className="floating-label  position-relative">
            <input
              id="userPassword"
              type="text"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <label className={userPassword ? "float" : ""}>
              userPassword :
            </label>
          </div>
          <button
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}
