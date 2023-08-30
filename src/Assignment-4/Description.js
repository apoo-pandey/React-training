import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Description = () => {
  const { loc } = useParams();
  const cities = useOutletContext();
  return (
    <div>
      <strong>Description:</strong>
      {cities[loc].description};
    </div>
  );
};

export default Description;
