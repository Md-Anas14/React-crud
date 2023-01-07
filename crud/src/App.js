import { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";
import './App.css'


function App() {

const usersData = [
    {id:1,name:'Logesh',username:'jvlogesh'},
    {id:2,name:'Ramesh',username:'rameshtr'},
    {id:3,name:'Daniel',username:'danielradcliff'},
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',username:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <div className="container-fluid  ">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
          <div>
            <h1 className="mb-5">CRUD App with Hooks</h1>
          </div>
    
          <div className=" d-flex flex-row">
            <div className="me-5">
        <div className=" ">
            {editing?(<div className="d-flex flex-column mt-5">
                <h2 className="text-white">Edit User</h2>
                <EditUserForm xs
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
              </div>) : (<div className="d-flex flex-column text-white ps-5 pe-5 mt-5 pt-1 pb-1">
                  <div className="">
                <h2>Add user</h2>
                    </div>
                
          <AddUserForm  addUser={addUser} />
          </div>
            ) 
        }
              </div>
            </div>
            <div className="ms-5 mt-5">
            <div className="d-flex flex-column">
              <div className="ms-4">
              <h2 className="text-white">View users</h2>
              </div>
        
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
              </div>
              </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;
