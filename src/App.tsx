import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Posts />,
  },
]);

function App() {
  return (
    <div className="App grid justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
