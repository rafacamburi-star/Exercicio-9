import axios from "axios";
import { ICountry, Region } from "./interfaces";

export class CountryService {
  private apiUrl = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";

  // Busca todos os países
  async fetchCountries(): Promise<ICountry[]> {
    try {
      const response = await axios.get(this.apiUrl);
      const countries: ICountry[] = response.data.map((c: any) => ({
        name: c.name.common,
        capital: c.capital?.[0] || "N/A",
        region: c.region as Region,
        population: c.population,
        flags: c.flags,
      }));
      return countries;
    } catch (error) {
      console.error("Erro ao buscar países:", error);
      return [];
    }
  }

  // Pesquisa por nome
  searchByName(countries: ICountry[], term: string): ICountry[] {
    return countries.filter((c) =>
      c.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Filtra por região
  filterByRegion(countries: ICountry[], region: Region): ICountry[] {
    return countries.filter((c) => c.region === region);
  }
}
