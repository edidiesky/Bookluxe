import React from "react";
import HomeIndex from "../components/search";
import Meta from "@/components/common/Meta";
const Search = () => {
  return (
    <div className="overflow-hidden">
      <Meta title={"Search Homes - BookLuxe"} />
      <HomeIndex />
    </div>
  );
};

export default Search;
