import { useFetcher } from "../utils/useFetcher";

const Users = () => {
  const users = useFetcher("https://jsonplaceholder.typicode.com/users");
  if (users.length === 0) return <>Loading</>;
  return <div>Users</div>;
};

export default Users;
