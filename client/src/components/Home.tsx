import React from "react";
import axios from "axios";


const Home = () => {

  let cookieData = document.cookie;


  console.log(cookieData,"cookieData");
  const handleLogout = async () => {
    
    await axios.post("http://localhost:8080/api/auth/signout",{
      csrfToken: cookieData
    });

  };
  return (
    <>
      <div>Home</div>

     
    </>
  );
};

export default Home;


