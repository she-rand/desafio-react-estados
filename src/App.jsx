import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
    const userCredential={
        user:"lili@mail.cl",
        password:"qwerty"
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(!user.trim()&&!password.trim()){
            alert("Llene los campos")
        }
        console.log({user,password})
    };
    const handleOnChangeUser = (e) => {
        setUser(e.target.value);
        console.log(e.target.value);
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Input accionSubmit={handleSubmit} accionUser={handleOnChangeUser} accionPassword={handleOnChangePassword}/>
            {password==="252525"&&(<Button accionSubmit={handleSubmit}/>)}
            
        </>

    );
};

export default App;