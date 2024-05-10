import Person from "./Person"
function StudentListTable(){
    let x=[
        {
            'name':'Kalyani',
            'rollno':1
        },
        {
            'name':'Santhu',
            'rollno':2
        },
        {
            'name':'Lucky',
            'rollno':3
        }
    ]
    return(
        <div>
            {
                <ul>
                    {x.map((ele) => <li>{ele.name} {ele.rollno}</li>)}
                </ul>
            }
        </div>
    )
}
export default StudentListTable