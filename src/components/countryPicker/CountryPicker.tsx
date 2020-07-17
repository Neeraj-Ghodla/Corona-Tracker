import React, { useState, useEffect } from "react";

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
      <div className="form-group col-md-6">
        <select
          className="form-control"
          id="exampleFormControlSelect1"
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
            <option key={country.Country}>{country.Country}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryPicker;
