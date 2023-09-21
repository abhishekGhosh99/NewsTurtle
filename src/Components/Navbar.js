import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              NewsTurtle
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              {/* Enable dark mode */}
              <div className="form-check mx-3 form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light"
                    ? "Enable Dark Mode"
                    : "Enable Light Mode"}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
