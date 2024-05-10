
function Click()
{
    const handleClick = () =>{
        alert("clicked")
    }
    const handleClick2 =(name) =>{
        alert(name)
    }
    const handleInput =(e) =>{
        console.log(e.target.value)
    }
    const HandleImage = (e) =>{
        e.target.style.height='350px'
        e.target.style.width='350px'
    }
    const HandleImage2 = (e) =>{
        e.target.style.height='100px'
        e.target.style.width='100px'
    }
    const HandleColor =() =>{
        document.body.style.backgroundColor="pink";
    }
    return(
        <div>
                <button onClick={handleClick}>Click Here</button>
                <br></br>
                <button onClick={() =>handleClick2('kalyani')}>ClickHere</button>
                <br></br>
                <input type="text" name="fname" onChange={handleInput}/>
                <br></br>
                <img src="../logo192.png" alt='' onMouseOver={HandleImage} onMouseOut={HandleImage2}/>
                <br></br>
                <button onMouseOver={HandleColor}>ClickHere</button>
        </div>
    )
}
export default Click;