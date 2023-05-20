import React from "react";
import axios from "axios"
 export default class  ClassComponent extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
    }
    deleteStudent(id){
        axios.delete("http://localhost:3030/students/"+id)
        this.showItems()
        
    }
    showItems(){
        axios.get("http://localhost:3030/students")
        .then(res=>{
            this.setState({students:res.data})
        })
    }
    componentDidMount(){
        this.showItems()
    }
    render() {
        return (
           <table className="table table-bordered table-striped ">
            <thead className="bg-secondary">
                <tr  >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Branch</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.students.map((student)=>
                        <tr  key={student.id}>
                            <td  >{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.branch}</td>
                            <td><button className="btn btn-danger"  onClick={()=> this.deleteStudent(student.id)}>Delete</button>
                            <button className="btn btn-info" onClick={()=> this.createStudent(student.id)}>Edit</button>
                            </td>
                             
                        </tr>
                    )
                }
            </tbody>
           </table>
        )
    }
    
}
 