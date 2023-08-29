import React from "react";
import Profile from "./Profile";
import Comment from "./Comment";
import CompanyContext from "./CompanyContext";
const Blog = () => {
  const companyOb = {
    name: "Skillcone",
    city: "Bangalore",
  };
  return (
    <div>
      <CompanyContext.Provider value={companyOb}>
        <Profile />
        <Comment />
      </CompanyContext.Provider>
    </div>
  );
};
export default Blog;
