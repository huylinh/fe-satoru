import Navigation from "../../Components/Navigaton/Navigation";
import AutoCompleteSearch from "../../Components/AutoCompleteSearch/AutoCompleteSearch";
import List from "../../Components/Proposal/Proposal";
import ListWorkspace from "../../Components/ListWorksapce/ListWorkspace";

const Home = () => {
  return (
    <>
      <Navigation />
      <AutoCompleteSearch />
      <ListWorkspace />
      <List />
    </>
  );
};

export default Home;
