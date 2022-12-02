import React from "react";

export default function Input({ onChange, getValueOnEnter }) {
  const onKeyUp = (event) => {
    const value = event.target.value;
    if (getValueOnEnter) {
      if (event.key == "Enter") {
        onChange(value);
        event.target.value = "";
      }
      return;
    }

    onChange(value);
  };

  return (
    <div className="form-group">
      <input
        onKeyUp={onKeyUp}
        type="text"
        placeholder="Type & Press Enter"
        className="form-control"
        name=""
        id=""
      />
    </div>
  );
}
