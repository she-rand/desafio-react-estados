const App = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log('hola click')
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>{console.log(e.target.value)}} type="text" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default App;