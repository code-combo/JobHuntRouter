import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

  return ( 
    <div className='career-details'>
        <h2>Career Details For {career.title}</h2>
        <p>starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ex accusamus soluta animi saepe! Ipsum necessitatibus quis illum incidunt. Commodi dignissimos, vel laboriosam, quos dolore tempore adipisci sunt quam corporis, id animi nesciunt?</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:3000/careers/' + id);

    return res.json();
}
