import Person from "./Person"
function StudentList(){
    let x=[
        {
            name:"Kalyani",
            id:1
        },
        {
            name:"Lucky",
            id:2
        },
        {
            name:"Santhu",
            id:3
        }
    ]
    return(
        <div>
            {
                x.map((ele) =>{
                    return (<p>{ele.name} {ele.id}</p>)
                })
            }
        </div>
    )
}
export default StudentList