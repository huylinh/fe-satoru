import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import List from "../../Components/Proposal/Proposal";
import ListWorkspace from "../../Components/ListWorksapce/ListWorkspace";

const Home = () => {
  return (
    <>
        <Navbar/>
        {/* <Search/> */}
        <ListWorkspace/>
        <List/>
    </>
  )
};

export default Home;
