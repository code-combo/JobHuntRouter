import {createBrowserRouter, createRoutesFromElements,  NavLink, Route, RouterProvider} from "react-router-dom"

// Pages
import RootLayout from "./layouts/RootLayout"
import About from "./pages/About"
import Home from "./pages/Home"
// styles
import './App.css'
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout />}>
      <Route index element = {<Home/>}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path="help" element = {<HelpLayout/>}>
        <Route path = "faq" element = {<Faq/>}/>
        <Route path = "contact" element = {<Contact/>}/>
      </Route>
    </Route>
  )
)

function App() {

  return (
    // <>
    // <h1>hey there!</h1>
    // </>
    <RouterProvider router = {router}/>

  )
}

export default App
