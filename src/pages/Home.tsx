import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserList from "../components/UserList";
// import { GlobalInfo } from "../App";
 

const Home = () => {
  const [data, setData] = useState([]);
  // const {appColor,handleColor}=useContext(GlobalInfo)
  const loadProducts = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    const { users } = response.data;
    setData(users);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
       <h1>Welcome to home</h1>
      <UserList users={data} />
    </div>
  );
};

export default Home;
