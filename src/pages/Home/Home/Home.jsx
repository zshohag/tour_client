import { useOutletContext } from "react-router-dom";
import Banner from "../../../components/Banner/Banner";
const Home = () => {
  const { searchQuery } = useOutletContext(); // Access searchQuery from context

  return (
    <div>
      <Banner searchQuery={searchQuery} /> {/* Pass searchQuery to Banner */}
    </div>
  );
};

export default Home;


