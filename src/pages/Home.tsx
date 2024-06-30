import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import LinkCard from "../components/LinkCard";

function Home() {
  const navigate = useNavigate();

  const routeSeries = () => navigate("/series");
  const routeMovies = () => navigate("/movies");
  return (
    <div className="w-full">
      <PageHeader title="Popular Titles" />

      <div className="w-full mt-6 px-7 py-8 lg:px-20 h-[58vh]">
        <div className="flex gap-8">
          <LinkCard
            title="SERIES"
            description="Popular Series"
            handleClick={routeSeries}
          />

          <LinkCard
            title="MOVIES"
            description="Popular Movies"
            handleClick={routeMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
