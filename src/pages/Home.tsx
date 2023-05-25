import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";

 

const Home = () => {
  const [data, setData] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    const { users } = response.data;
    setData(users);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>Welcome to home</h1>
      <UserList users={data} />
    </>
  );
};

export default Home;
