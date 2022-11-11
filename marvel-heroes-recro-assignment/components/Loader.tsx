import React from "react";

function Loader() {
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>
        <p
          className="fs-1"
          style={{
            fontWeight: 200,
          }}
        >
          Loading
        </p>
      </div>
    </div>
  );
}

export { Loader };
