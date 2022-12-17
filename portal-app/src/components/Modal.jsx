import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function MyAppModal({ show, onHide, children, title }) {
  useEffect(() => {
    document.getElementById("root").setAttribute("aria-hidden", show);
  }, [show]);
  return show ? (
    createPortal(
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
      </div>,
      document.querySelector("#modal-root")
    )
  ) : (
    <Fragment />
  );
}

export { MyAppModal };
