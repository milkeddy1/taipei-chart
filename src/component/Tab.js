import React from "react";

const Tab = ({ data, search }) => {
  let allTowns = data.map((item) => {
    return item.site_id;
  });
  let towns = allTowns.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  return (
    <div className="p-8 flex justify-center">
      <select
        name="search"
        className="border-gray-300 border-2 rounded cursor-pointer p-2"
        onChange={(e) => {
          search(e.target.value);
        }}
      >
        {towns.map((town, index) => {
          return <option key={index}>{town}</option>;
        })}
      </select>
    </div>
  );
};

export default Tab;
