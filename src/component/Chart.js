import React, { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ search, data }) => {
  let totalSingleMale = 0;
  let totalSingleFemale = 0;
  let totalOrdinaryMale = 0;
  let totalOrdinaryFemale = 0;
  data.forEach((item) => {
    if (item.site_id === search) {
      totalSingleMale =
        parseInt(totalSingleMale, 10) + parseInt(item.household_single_m, 10);
    }
  });
  data.forEach((item) => {
    if (item.site_id === search) {
      totalSingleFemale =
        parseInt(totalSingleFemale, 10) + parseInt(item.household_single_f, 10);
    }
  });
  data.forEach((item) => {
    if (item.site_id === search) {
      totalOrdinaryMale =
        parseInt(totalOrdinaryMale, 10) +
        parseInt(item.household_ordinary_m, 10);
    }
  });
  data.forEach((item) => {
    if (item.site_id === search) {
      totalOrdinaryFemale =
        parseInt(totalOrdinaryFemale, 10) +
        parseInt(item.household_ordinary_f, 10);
    }
  });
  let ordinaryObj = {
    name: "共同生活戶",
    male: totalOrdinaryMale,
    female: totalOrdinaryFemale,
  };
  let singleObj = {
    name: "獨立生活",
    male: totalSingleMale,
    female: totalSingleFemale,
  };
  let arr = [];
  arr.push(ordinaryObj, singleObj);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-screen sm:w-9/12 md:w-7/12 lg:w-5/12">
        <ResponsiveContainer height={400} width="80%">
          <BarChart data={arr}>
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" fill="#2894FF	" />
            <Bar dataKey="female" fill="#FF359A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
