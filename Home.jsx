import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import "./Home.css";
export default function Home() {
    const navigate = useNavigate();
    return(
        <div className="hero">
            <img
              src={profile}
              className="profile"
            />  
            
           <h1>Hello, I'm Adithya</h1>
           <h2>Aspiring AI & ML Engineer</h2>
           <p>Welcome to my portfolio dashboard</p>

           <div className="buttons">
                 <button
              onClick={() => navigate("/projects")}
              style={{ marginRight: "10px" }}>
                View Projects</button>
            <button style={{marginLeft: "10px"}}
            onClick={() => navigate("/contact")}>Contact Me</button>
            </div>
        </div>
    )
}