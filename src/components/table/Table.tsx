import React, { useState, useEffect } from "react";

import { CountrySummary } from "../../types/types";
import { fetchSummaryOfAllCountries } from "../../api";

const Table = () => {
  const [allSummary, setAllSummary] = useState<CountrySummary[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchAPI = async () => {
      setAllSummary(await fetchSummaryOfAllCountries());
    };
    fetchAPI();
  }, []);

  return (
    <table className="table table-striped table-responsive-sm mb-5">
      <thead>
        <tr>
          <th>Country</th>
          <th>New Confirmed</th>
          <th>Total Confirmed</th>
          <th>New Deaths</th>
          <th>Total Deaths</th>
          <th>New Recovered</th>
          <th>Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        {allSummary?.map((item, index) => (
          <tr key={index}>
            <td>{item.Country}</td>
            <td>{item.NewConfirmed}</td>
            <td>{item.TotalConfirmed}</td>
            <td>{item.NewDeaths}</td>
            <td>{item.TotalDeaths}</td>
            <td>{item.NewRecovered}</td>
            <td>{item.TotalRecovered}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
