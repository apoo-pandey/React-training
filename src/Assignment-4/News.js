import { Outlet, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const News = () => {
  const { loc } = useParams();
  const cities = useOutletContext();
  return (
    <div>
      <Link
        className="link-home"
        to={"/Assignment-4/ReduxCity/" + loc + "/description"}
      >
        <strong>News:</strong>
        {cities[loc].news}
      </Link>
      {/* {console.log(cities[loc])} */}
      <Outlet context={cities} />
    </div>
  );
};

export default News;
