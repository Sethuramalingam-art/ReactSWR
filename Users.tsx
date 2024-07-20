import useSWR from 'swr';

function Users() {
  
  const {data, error} = useSWR("http://localhost:3001/users");

  if (error) return <h1>Error</h1>  

  return (
    <>
      <h2>users</h2>
      {
        data? data.map((user:any)=>{
          return <h3>{user}</h3>
        }):<h2>Loading</h2>
      }
    </>
  )
}

export default Users;
