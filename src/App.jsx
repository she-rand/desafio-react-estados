import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
    const userCredential={
        user:"lili@mail.cl",
        password:"252525"
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(!user.trim()&&!password.trim()){
            alert("Llene los campos")
        }
        if(user===userCredential.user&&password===userCredential.password){
            alert("Bienvenido")
        }else{
            alert("Usuario incorrecto")
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

            <div className="principal">
            <h1>Desafio Estado de los Componentes y Eventos</h1>

                <Input accionSubmit={handleSubmit} accionUser={handleOnChangeUser} accionPassword={handleOnChangePassword}/>
                {password==="252525"&&(<Button accionSubmit={handleSubmit}/>)}
                
            </div>
            
        </>

    );
};

export default App;