import { createRoot } from "react-dom/client";

import "@web/global.css";

function App() {
  return <main></main>;
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
