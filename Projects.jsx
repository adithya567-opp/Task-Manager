import { useState } from "react";
import projectsData from "../data/projects";
import "./Projects.css";
export default function Projects(){
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"? projectsData : projectsData.filter((item) => item.category === filter)

    return (
        <div style={{ padding: "20px" }}>
            <h1>Projects</h1>

            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Web development")}>Web development</button>
            <button onClick={() => setFilter("Robotics")}>Robotics</button>
            <button onClick={() => setFilter("LLM")}>LLM</button>
            <div className="grid">
                {filteredProjects.map((proj) => (
                <div className="card" key={proj.id}>
                    <h3>{proj.title}</h3>
                    <p>{proj.category}</p>
                </div>
            ))}
            </div>
        </div>
    );
}