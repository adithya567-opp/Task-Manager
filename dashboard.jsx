import { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`dashboard ${dark ? "dark" : ""}`}>
      <h1>Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>Projects</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Skills</h3>
          <p>6</p>
        </div>
      </div>
      <div className="card activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>Added new project</li>
          <li>Updated portfolio</li>
        </ul>
      </div>
    </div>
  );
}
