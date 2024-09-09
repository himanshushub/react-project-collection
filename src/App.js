import { RouterProvider } from "react-router-dom";

import router from "./router/router";

import "./App.css";

function App() {
  return (
    <div>
      <header className="app-header">
        <a
          href="/react-project-collection"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </a>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
