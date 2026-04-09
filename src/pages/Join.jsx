// src/pages/Join.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  const [plan, setPlan] = useState("monthly");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate membership creation
    setTimeout(() => {
      navigate("/member-portal");
    }, 1200);
  };

  return (
    <div className="join-page">
      <div className="join-container">
        <h1 className="join-title">Join Ocean Tide Drop</h1>
        <p className="join-subtitle">
          Choose your membership path and step into the realm.
        </p>

        <form className="join-form" onSubmit={handleJoin}>
          <label className="join-label">Email Address</label>
          <input
            type="email"
            className="join-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="join-label">Membership Plan</label>
          <select
            className="join-select"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="monthly">Monthly – $12</option>
            <option value="yearly">Yearly – $99</option>
          </select>

          <button className="join-button" disabled={loading}>
            {loading ? "Processing..." : "Enter the Realm"}
          </button>
        </form>
      </div>

      <style>{`
