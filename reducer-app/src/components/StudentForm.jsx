import React, { useRef, useState } from "react";

export default function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "virnedra",
    lastName: "patel",
    email: `patelvirendra${Date.now()}@gmail.com`,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div class="mb-3">
        <label class="form-label">First Name</label>
        <input
          onChange={handleOnChange}
          type="text"
          name="firstName"
          class="form-control"
          value={formData.firstName}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name</label>
        <input
          onChange={handleOnChange}
          type="text"
          name="lastName"
          class="form-control"
          value={formData.lastName}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          class="form-control"
          value={formData.email}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
