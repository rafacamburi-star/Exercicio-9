import axios from "axios";
import { ICountry, Region } from "./interfaces";

export class CountryService {
  private countries: ICountry[] = [];

  async fetchCountries(): Promise<void> {
    try {
      const response = await axios.get<ICountry[]>(
        "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags"
      );

      this.countries = response.data.map((c: any) => ({
        name: c.name.common,
        region: c.region as Region,
        capital: c.capital ? c.capital[0] : undefined,
        population: c.population,
        flags: c.flags,
      }));
    } catch (error) {
      console.error("Erro ao buscar países:", error);
      this.countries = [];
    }
  }

  searchByName(name: string): ICountry[] {
    return this.countries.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  filterByRegion(region: Region): ICountry[] {
    return this.countries.filter((c) => c.region === region);
  }

  getAll(): ICountry[] {
    return this.countries;
  }
}

