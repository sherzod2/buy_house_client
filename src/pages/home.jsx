import React from "react";
import Header from "../components/header";
import House from "../components/house";
import Choose from "../components/choose";
import useToken from "../Hooks/useToken";

const Home = () => {
  const { token } = useToken();
  if (token) window.location.href = "http://localhost:3001/admin/companies";
  return (
    <>
      <Header />
      <main className="main">
        <House />
        <Choose />
      </main>
    </>
  );
};

export default Home;
