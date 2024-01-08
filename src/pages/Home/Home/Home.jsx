import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Doc House </title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
