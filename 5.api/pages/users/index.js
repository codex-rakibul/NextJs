import HeaderCom from "@/components/HeaderCom";
import { useState } from "react";

function users() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const loadData = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const handleAddUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
    loadData();
  };

  const handleDeleteBtn = (id) => {
    fetch(`/api/users/${id}`, {
      method: "DELETE",

    })
    loadData();
  }
  return (
    <div>
      <h1>All Users</h1>
      <div>
        <input onChange={(e) => setUser(e.target.value)} type="text"></input>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <br />
      <button onClick={loadData}>See all users</button>
      <br />
      {users.map((user) => {
        console.log(user);
        return (
          <div key={user.id}>
            <h3>
              {user.id}. {user.name}
            </h3>
            <button onClick={()=>handleDeleteBtn(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
users.getLayout = function getLayout(page) {
  return (
    <>
    <HeaderCom/>
      {page}
    </>
  )
}
export default users;
