import {createBrowserRouter, createRoutesFromElements,  NavLink, Route, RouterProvider} from "react-router-dom"

// styles
import './App.css'
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"

// Pages
import RootLayout from "./layouts/RootLayout"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CareersLayout from "./layouts/CareersLayout"
import Careers, { careersLoader } from "./pages/careers/Careers"
import CareerDetails from "./pages/careers/CareerDetails"


// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout />}>
      <Route index element = {<Home/>}></Route>
      <Route path = "about" element = {<About/>}></Route>

      <Route path="help" element = {<HelpLayout/>}>
        <Route path = "faq" element = {<Faq/>}/>
        <Route path = "contact" element = {<Contact/>}/>
      </Route>

      <Route path="careers" element = {<CareersLayout/>}>
        <Route 
          index 
          element = {<Careers/>}
          loader={careersLoader}
        />
      </Route>
      <Route
        path=":id"
        element = {<CareerDetails/>}
      />

      <Route path="*" element = {<NotFound/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
