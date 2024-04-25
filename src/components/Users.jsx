import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id =>{
    // Sure to delete
    fetch(`http://localhost:5000/user/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        alert('Deleted successfully')
        // remove the user from the UI
        const remainingUsers = users.filter(user=> user._id !==id);
        setUsers(remainingUsers);
      }
    })
  }
  
  return (
    <div>
      <h2 className="text-3xl font-bold my-8 text-center">Total users: {loadedUsers['length']}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
         {
            users.map((user, idx) =>   <tr key={user._id}>
              <th>{idx}</th>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastLoggedAt}</td>
              <td><button onClick={()=>handleDelete(user._id)} className="btn">X</button></td>
            </tr>)
         }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
