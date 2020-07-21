import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import { CountrySummary } from "../../types/types";
import { fetchSummaryOfAllCountries } from "../../api";

const SummaryTable = () => {
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
    <Table striped responsive="sm" className="mb-5">
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
    </Table>
  );
};

export default SummaryTable;
