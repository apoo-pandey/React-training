import CompanyContext from "./CompanyContext";
import { useContext } from "react";

const Comment = () => {
  const companyOb = useContext(CompanyContext);
  return (
    <div>
      <h2> this is comment component</h2>
      <div>
        Company Name: {companyOb.name}
        <br />
        Company City:{companyOb.city} <br />
      </div>
    </div>
  );
};
export default Comment;
