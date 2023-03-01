import { useState } from "react";

function users() {
  const [users, setUsers] = useState([]);
  const loadData = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  return (
    <div>
      <h1>All Users</h1>
      <button onClick={loadData}>See all users</button>
      <br />
      {users.map((user) => {
        console.log(user)
        return <div key={user.id}>
            <h3>{user.id}. {user.name}</h3>
        </div>;
      })}
    </div>
  );
}
export default users;
