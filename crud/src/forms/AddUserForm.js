import { useState } from "react";

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    }
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.name||!user.username) return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
            <div className=" d-flex flex-column justify-content-evenly bg-dark ps-5 pe-5 pt-3 pe-3 pb-2 mb-5">
                <div className="d-flex flex-column justify-content-between">
                <label>Name :</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
                </div>
                <div  className="d-flex flex-column justify-content-between">
                <label>Username :</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username} />
       </div>
                <div className="d-flex flex-column justify-content-between mt-3">
                <button className="btn btn-primary">Add new user</button>
        </div>
               
                </div> 
      </form>
    )
 }

export default AddUserForm;