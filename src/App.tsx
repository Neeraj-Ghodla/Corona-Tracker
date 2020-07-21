import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "./components/card/Card";
import CountryPicker from "./components/countryPicker/CountryPicker";
import Chart from "./components/chart/Chart";
import Table from "./components/table/Table";
import Container from "react-bootstrap/Container";

import { fetchSummary, fetchCountrySummary } from "./api/index";
import { GlobalSummary, CountrySummary, Country } from "./types/types";
import coronaImage from "./images/image.png";

export default function App() {
  const [summary, setSummary] = useState<GlobalSummary | undefined>(undefined);
  const [countrySummary, setCountrySummary] = useState<
    CountrySummary | undefined
  >(undefined);
  const [currentCountry, setCurrentCountry] = useState<Country | undefined>(
    undefined
  );

  // for global summary
  useEffect(() => {
    const fetchAPI = async () => {
      setSummary(await fetchSummary());
    };
    fetchAPI();
  }, []);

  // for the summary of a specific country
  useEffect(() => {
    const fetchAPI = async () => {
      if (currentCountry)
        setCountrySummary(await fetchCountrySummary(currentCountry.Slug));
    };
    fetchAPI();
  }, [currentCountry]);

  return (
    <Container>
      <div className="row justify-content-center my-3 mb-5">
        <img className="img-fluid" src={coronaImage} alt="COVID-19" />
      </div>
      <Card
        summary={currentCountry === undefined ? summary : undefined}
        countrySummary={
          currentCountry !== undefined ? countrySummary : undefined
        }
      ></Card>
      <CountryPicker onCountryChange={setCurrentCountry} />
      <Tabs defaultActiveKey="chart" className="justify-content-center">
        <Tab eventKey="chart" title="Chart">
          <Chart country={currentCountry} />
        </Tab>
        <Tab eventKey="table" title="Table">
          <Table />
        </Tab>
      </Tabs>
    </Container>
  );
}
