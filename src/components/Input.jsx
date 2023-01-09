const Input=({accionSubmit,accionUser,accionPassword})=>{
    return (
        <form onSubmit={accionSubmit}>
        <input onChange={accionUser} type="text" placeholder="email"></input>
        <input onChange={accionPassword} type="password" placeholder="password"></input>
        
    </form> 
    )
};
export default Input;