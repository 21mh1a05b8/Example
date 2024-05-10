import Person from "./Person";
function UnorderedList(){
    let x=[
        {
            name:"Kalyani",
            rollno:1
        },
        {
            name:"Santhu",
            rollno:2
        },
        {
            name:"Lucky",
            rollno:3
        }
    ]
    return(
        <div>
            {
                x.map((ele) =>{
                    return (<li>{ele.name} {ele.rollno}</li>)
                })
            }
        </div>
    )
}