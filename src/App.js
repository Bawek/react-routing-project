import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project";
import History from "./page/History";

function App() {
  // Define the router with `createBrowserRouter`
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
        <Route path="history" element={<History />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
