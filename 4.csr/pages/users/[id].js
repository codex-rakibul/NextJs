import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function SingleUser({ user }) {
  const [users, setUsers] = useState("");
  const { id } = useRouter().query;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [id]);
  const { name, email,} = users;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
}

export default SingleUser;
