import { RouterProvider } from "react-router-dom";

import router from "./router/router";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="router_content">
          <RouterProvider router={router} />
        </main>
      </header>
    </div>
  );
}

export default App;
