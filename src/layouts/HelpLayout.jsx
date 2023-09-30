import { NavLink, Outlet, } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h1>Website help!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis distinctio necessitatibus obcaecati!</p>
        <nav>
            <NavLink to = "faq">View The FAQ</NavLink>
            <NavLink to = "contact">Contact Us</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}
