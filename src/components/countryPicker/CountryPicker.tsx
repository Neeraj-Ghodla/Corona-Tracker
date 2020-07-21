import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import { Country } from "../../types/types";
import { fetchCountries } from "../../api";

const CountryPicker = ({
  onCountryChange,
}: {
  onCountryChange: (country: Country | undefined) => void;
}) => {
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div className="row justify-content-center">
      <Form className="col-lg-6 col-sm-10">
        <Form.Group>
          <Form.Control
            as="select"
            onChange={(e) => {
              if (e.target.value === "Global") onCountryChange(undefined);
              const country = countries?.filter(
                (country: Country) => country.Country === e.target.value
              )[0];
              onCountryChange(country!);
            }}
          >
            <option value="global">Global</option>
            {countries?.map((country: Country) => (
              <option key={country.Country} value={country.Country}>
                {country.Country}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CountryPicker;
