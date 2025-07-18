import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> },
        { path: "/portfolio", element: <Portfolio></Portfolio> },
        { path: "/portfolio", element: <h2>Not found</h2> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
