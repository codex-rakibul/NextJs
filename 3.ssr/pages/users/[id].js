function SingleUser({user}) {
    const {firstName, email,image,university} = user
    console.log(user)
  return (
    <div>
      
      <img src={image} />
      <h1>Name: {firstName}</h1>
      <h1>Email: {email}</h1>
      <h1>University: {university}</h1>
      
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
}

export default SingleUser;
