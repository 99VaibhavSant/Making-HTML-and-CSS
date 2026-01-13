import "./Card.css"
import Vaibhav from "../assets/Vaibhav.jpg"
export default function Card(){
    return(
        <div className="Card">
            <img src={Vaibhav} title="Vaibhav" />
          <h1>My name is Vaibhav</h1>
            <h2>I Am 26 years old</h2>
            <h2>I Am Front End Developer</h2>
            <h3>Look for job</h3>
        </div>
    )
}