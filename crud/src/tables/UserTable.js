
const UserTable = (props)=>(
    <table className="table table-hover table-dark table-striped">
        <thead>
            <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
              
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                     
                        <button  onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button me-2 btn btn-success">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button ms-2 btn btn-danger">Delete</button>
                        </td>
                     
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
);

export default UserTable;