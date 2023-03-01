import Link from "next/link";

function Users({ users }) {
  console.log(users);
  return (
    <div>
      All User
      <br />
      {users.users.map((user) => {
        const { id, firstName } = user;
        return (
          <div key={id}>
            <Link href={`users/${id}`} passHref>
              <h1>{firstName}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
