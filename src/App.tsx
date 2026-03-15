import "./styles.css";
import ParentTabs from "./ParentTabs";

export default function App() {
  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <div className="inner flex red">
        <ParentTabs />
      </div>
    </div>
  );
}
