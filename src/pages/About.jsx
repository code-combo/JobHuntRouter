import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function About() {

  const [user, setUser] = useState("Mario");

  if(!user) {
    return <Navigate to = "/" replace/>
  }

  return (
    <div className="about">
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, velit fugit aperiam ut quis maxime a dicta cumque sequi impedit doloribus excepturi tempore. Sunt nostrum ab alias excepturi exercitationem unde molestias. Labore aliquam, explicabo, excepturi quibusdam praesentium architecto qui iusto sapiente perspiciatis iste dolorum saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, velit fugit aperiam ut quis maxime a dicta cumque sequi impedit doloribus excepturi tempore. Sunt nostrum ab alias excepturi exercitationem unde molestias. Labore aliquam, explicabo, excepturi quibusdam praesentium architecto qui iusto sapiente perspiciatis iste dolorum saepe.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, velit fugit aperiam ut quis maxime a dicta cumque sequi impedit doloribus excepturi tempore. Sunt nostrum ab alias excepturi exercitationem unde molestias. Labore aliquam, explicabo, excepturi quibusdam praesentium architecto qui iusto sapiente perspiciatis iste dolorum saepe.</p>
        <button onClick = {() => setUser(null)}>Logout</button>
    </div>
  )
}
