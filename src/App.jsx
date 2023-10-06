import {createBrowserRouter, createRoutesFromElements,  NavLink, Route, RouterProvider} from "react-router-dom"

// styles
import './App.css'
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact, { contactAction } from "./pages/help/Contact"

// Pages
import RootLayout from "./layouts/RootLayout"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CareersLayout from "./layouts/CareersLayout"
import Careers, { careersLoader } from "./pages/careers/Careers"
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from "./pages/careers/CareersError"
// import CareerDetails from "./pages/careers/CareerDetails"


// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout />}>
      <Route index element = {<Home/>}></Route>
      <Route path = "about" element = {<About/>}></Route>

      <Route path="help" element = {<HelpLayout/>}>
        <Route path = "faq" element = {<Faq/>}/>
        <Route path = "contact" element = {<Contact/>} action={contactAction}/>
      </Route>

      <Route path="careers" element = {<CareersLayout/>} errorElement = {<CareersError/>}>
        <Route // Loaders (they help to load data into a component before they render, APIs generally)
          index 
          element = {<Careers/>}
          loader={careersLoader}
        />

        <Route // Route parameters
          path=":id"
          element = {<CareerDetails/>}
          loader={careerDetailsLoader}
        />
      </Route>

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
