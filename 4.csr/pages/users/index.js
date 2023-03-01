import Link from "next/link";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState(null);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      All User
      <br />
      {users?.map((user) => {
        console.log(user)
        const { id, name } = user;
        return (
          <div key={id}>
            <Link href={`users/${id}`} passHref>
              <h1>{name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}


export default Users;
