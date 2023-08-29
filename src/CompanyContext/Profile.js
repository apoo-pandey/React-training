import CompanyContext from "./CompanyContext";
import { useContext } from "react";
const Profile = () => {
  const companyOb = useContext(CompanyContext);
  console.log(companyOb);
  return (
    <div>
      <h2> This is profile component</h2>
      <div>
        Compnay Name: {companyOb.name}
        <br />
        Company City: {companyOb.city} <br />
      </div>
    </div>
  );
};

export default Profile;
