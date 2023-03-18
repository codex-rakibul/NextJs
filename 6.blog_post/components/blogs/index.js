const Users = ({ data }) =>{
    console.log(data)
  return (
    <div>
      All User
      <br />
      {
      data.map((user) => {
        const { id, title } = user;
        return (
          <div key={id}>
              <h1>{title}</h1>
          </div>
        );
      })
      }
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Users;
