import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Country, Dailydata } from "../../types/types";
import { fetchDailyData } from "../../api";
import Container from "react-bootstrap/Container";

export const Chart = ({ country }: { country: Country | undefined }) => {
  const [dailyData, setDailyData] = useState<Dailydata | undefined>(undefined);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData(country ? country.Slug : undefined));
    };
    fetchAPI();
  }, [country]);

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData!.dateList,
        datasets: [
          {
            data: dailyData!.confirmedList,
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData!.deathList,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
          {
            data: dailyData!.recoveredList,
            label: "Recovered",
            borderColor: "green",
            fill: true,
          },
          {
            data: dailyData!.activeList,
            label: "Active",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <Container>
      <div className="row justify-content-center mt-3 mb-5">{lineChart}</div>
    </Container>
  );
};

export default Chart;
