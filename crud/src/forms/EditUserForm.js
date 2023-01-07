import { useEffect, useState } from "react"

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <div className="d-flex flex-column bg-dark ps-5 pe-5 pt-3 pb-3">
                <div className="d-flex flex-column">
                <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
                </div>
                <div className="d-flex flex-column">
                <label>Username</label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username} />
                </div>
                <div className="d-flex justify-content-evenly p-2 mt-2 ">
                <div className="me-2">
                    <button className="btn btn-success">Update user</button>
                </div>
                <div className="ms-2">
                    <button className="btn btn-danger" onClick={() => {
                props.setEditing(false)
                    }}>Cancel</button>
                </div>
                </div>
           
           
           
                </div>
          </form>
    )
}

export default EditUserForm;