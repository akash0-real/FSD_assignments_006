import { useState } from "react";
import FormField from "./FormField";
import StatusMessage from "./StatusMessage";

function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [status, setStatus] = useState({ type: "", text: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, age } = form;

    if (!name.trim()) {
      setStatus({ type: "error", text: "Please enter your name." });
    } else if (!email.trim()) {
      setStatus({ type: "error", text: "Please enter your email." });
    } else if (!email.includes("@")) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
    } else if (!age) {
      setStatus({ type: "error", text: "Please enter your age." });
    } else if (Number(age) < 18) {
      setStatus({ type: "error", text: "You must be at least 18 years old." });
    } else {
      setStatus({
        type: "success",
        text: `Welcome, ${name}! Registration successful.`,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="name"
        name="name"
        label="Name"
        type="text"
        value={form.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={form.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <FormField
        id="age"
        name="age"
        label="Age"
        type="number"
        value={form.age}
        placeholder="Enter your age"
        onChange={handleChange}
      />

      <button type="submit">Register</button>

      {status.text && (
        <StatusMessage type={status.type}>{status.text}</StatusMessage>
      )}
    </form>
  );
}

export default RegistrationForm;
