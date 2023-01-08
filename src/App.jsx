import { useState } from "react";
import Button from "./components/Button";

const App = () => {
    const userCredential={
        email:"lili@mail.cl",
        password:"qwerty"
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(!email.trim()&&!password.trim()){
            alert("Llene los campos")
        }
        console.log({email,password})
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="email"></input>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password"></input>
                <button type="submit" disabled >Submit</button>
            </form>
            {password==="252525"&&(<Button/>)}
            
            <p>{email}-{password}</p>
        </>

    );
};

export default App;