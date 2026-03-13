import { useState } from "react";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

export default function ParentTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Dashboard", component: "Dashboard" },
    { label: "Profile", component: "Profile" },
  ];

  return (
    <div className="container">
      <button
        className={activeTab === 0 ? "red" : "black"}
        onClick={() => setActiveTab(0)}
      >
        Dashboard
      </button>{" "}
      {/* should not call the fxn result directly, instead call the fxn that has the result like this */}
      <button onClick={() => setActiveTab(1)}>Profile</button>
      {activeTab === 0 ? <Dashboard /> : <Profile />}
    </div>
  );
}
