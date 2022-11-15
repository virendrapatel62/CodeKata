import React from "react";

function ErrorComponent({ message }) {
  return (
    <div className="display-3 text-center mt-5 text-danger">
      <p className="font-200">{message}</p>
    </div>
  );
}

export { ErrorComponent };
