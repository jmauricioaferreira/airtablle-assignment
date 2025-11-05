import ReactDOM from "react-dom/client";

import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div>
      <Timeline />
    </div>
  );
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element with id 'root' not found");
}
const root = ReactDOM.createRoot(container);
root.render(<App />);
