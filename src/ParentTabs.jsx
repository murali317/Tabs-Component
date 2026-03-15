import { useState } from "react";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

export default function ParentTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Dashboard", component: Dashboard },
    { label: "Profile", component: Profile },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="container">
      {/* should not call the fxn result directly, instead call the fxn that has the result like this */}
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`buttons-class ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
      <ActiveComponent />
    </div>
  );
}
