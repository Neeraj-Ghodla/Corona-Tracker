import axios from "axios";

import { GlobalSummary, CountrySummary, Country, Dayone } from "../types/types";

const URL = "https://api.covid19api.com";

export const fetchSummary = async (
  slug?: string
): Promise<GlobalSummary | undefined> => {
  try {
    const { data } = await axios.get(`${URL}/summary`);
    const global: GlobalSummary = {
      ...data["Global"],
      Date: new Date(data["Date"]).toDateString(),
    };
    return global;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountrySummary = async (
  slug: string
): Promise<CountrySummary | undefined> => {
  try {
    const { data } = await axios.get(`${URL}/summary`);
    const countries: CountrySummary[] = data["Countries"];
    const res: CountrySummary[] = countries.filter(
      (country: CountrySummary) => country.Slug === slug
    );
    res[0]["Date"] = new Date(res[0]["Date"]).toDateString();
    return res[0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async (): Promise<Country[] | undefined> => {
  try {
    const { data } = await axios.get(`${URL}/summary`);
    const countries: CountrySummary[] = data["Countries"];
    return countries.map((country: CountrySummary) => {
      return { Country: country.Country, Slug: country.Slug };
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async (country: string | undefined) => {
  if (!country) return fetchDailyGlobalData();
  try {
    const { data } = await axios.get(`${URL}/total/dayone/country/${country}`);

    const confirmedList: number[] = data.map((day: Dayone) => day.Confirmed);
    const deathList: number[] = data.map((day: Dayone) => day.Deaths);
    const recoveredList: number[] = data.map((day: Dayone) => day.Recovered);
    const activeList: number[] = data.map((day: Dayone) => day.Active);
    const dateList: string[] = data.map((day: Dayone) =>
      new Date(day.Date).toDateString()
    );

    return { confirmedList, deathList, recoveredList, activeList, dateList };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyGlobalData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

    const res: { confirmed: number; deaths: number; date: string }[] = data.map(
      (dailyData: any) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      })
    );
    const confirmedList = res.map((data) => data.confirmed);
    const deathList = res.map((data) => data.deaths);
    const dateList = res.map((data) => data.date);
    return { confirmedList, deathList, dateList };
  } catch (error) {
    console.log(error);
  }
};

export const fetchSummaryOfAllCountries = async (): Promise<
  CountrySummary[] | undefined
> => {
  try {
    const { data } = await axios.get(`${URL}/summary`);
    return data["Countries"];
  } catch (error) {
    console.log(error);
  }
};
