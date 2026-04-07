import { useState } from "react";
import "./contact.css";
export default function Contact(){
    const[form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.email || !form.message){
            alert("Please fill all fields!");
            return;
        }

        alert("Form submitted!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>
                <input 
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value })}
                />
                <br /><br />
                 <input 
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value })}
                />
                <br /><br />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({...form,message: e.target.value})}
                />
                <br /><br />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}