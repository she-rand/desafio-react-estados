const Input=({accionSubmit,accionUser,accionPassword})=>{
    return (
        <form className="form-style" onSubmit={accionSubmit}>
        <div className="input-style">
            <label for="emailid">Email:</label>
            <input onChange={accionUser} id="emailid"  type="text" placeholder="email"></input>
        </div>
        <div className="input-style">
            <label for="passwordid">Password:</label>
            <input onChange={accionPassword}id="passwordid"  type="password" placeholder="password"></input>
        </div>
        
    </form> 
    )
};
export default Input;