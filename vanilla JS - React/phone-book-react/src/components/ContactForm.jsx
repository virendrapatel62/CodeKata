import React from "react";
import { useState } from "react";
import { Contact } from "../models/Contact";

export default function ContactForm({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    name: "Virendra",
    phone: "989484944849",
  });

  const { name, phone } = formValues;

  const handleOnChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(new Contact(name, phone));
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleOnChange}
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="input-wrapper">
          <button type="submit">Save Contact</button>
        </div>
      </form>
    </div>
  );
}
