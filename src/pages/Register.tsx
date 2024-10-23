import { useState } from "react";
import { AccountType } from "../enums";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [registered, setRegisted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !(
        validateEmail() &&
        validatePassword() &&
        validateName() &&
        validateAddress()
      )
    ) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          orderHistory: { orders: [] },
          type: AccountType.user,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("User registered successfully!");
        setRegisted(true);
      } else {
        console.error("Registration failed", result.error);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const validateEmail = () => {
    if (formData.email.includes("@") && formData.email.includes(".")) {
      setMessage("");
      return true;
    } else {
      setMessage("enter a valid email adress");
      return false;
    }
  };
  const validatePassword = () => {
    if (formData.password.length < 8) {
      setMessage("Password must contain at least 8 characters");
    } else if (!/[A-Z]/.test(formData.password)) {
      setMessage("Password must contain at least 1 upper case character");
    } else if (!/\d/.test(formData.password)) {
      setMessage("Password must contain at least 1 number");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      setMessage("Password must contain at least 1 special character");
    } else if (formData.password !== confirmPassword) {
      setMessage("Passwords does not match");
    } else {
      setMessage("");
      return true;
    }
    return false;
  };
  const validateName = () => {
    if (formData.name.length > 4) {
      setMessage("");
      return true;
    } else {
      setMessage("Name must contain at least 4 characters");
      return false;
    }
  };
  const validateAddress = () => {
    if (formData.address.length > 6) {
      setMessage("");
      return true;
    } else {
      setMessage("Address must contain at least 6 characters");
      return false;
    }
  };
  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <p>{message}</p>
        <button type="submit">Register</button>
        {registered ? (
          <div>
            <p>Success!</p>
            <button onClick={() => navigate("/login")}>
              Click here to login
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </main>
  );
}
