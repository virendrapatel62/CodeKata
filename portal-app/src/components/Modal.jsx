import React, { Fragment } from "react";
import Modal from "react-bootstrap/Modal";

function MyAppModal({ show, onHide, children, title }) {
  return show ? (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      <div className="container mt-4">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: 40,
          }}
        >
          <span
            onClick={onHide}
            style={{
              cursor: "pointer",
            }}
          >
            ✖️
          </span>
        </div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  ) : (
    <Fragment />
  );
}

export { MyAppModal };
