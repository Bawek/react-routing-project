import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";
import History from "./page/History";
import ContactInfo from "./page/ContactInfo.jsx";
import ContactForm from "./page/ContactForm.jsx";
import ContactLayout from "./Layout/ContactLayout.js";
import PageNotFound from "./page/PageNotFound.jsx";
import UserLayout from "./Layout/UserLayout.jsx";
import User, { UserLoader } from "./page/User.jsx";
import UserDetail, { UserLoaderDetail } from "./page/UserDetail.jsx";
function App() {
  // Define the router with `createBrowserRouter`
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />} >
        <Route path="info" element={<ContactInfo/>}/>
        <Route path="form" element={<ContactForm/>}/>

        
        </Route>
        <Route path="project" element={<Project />} />
        <Route path="history" element={<History />} />

        <Route path="user" element={<UserLayout/>}>
        <Route index element={<User />} loader={UserLoader} />
        <Route path=":id" element={<UserDetail/>} loader={UserLoaderDetail}/>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
