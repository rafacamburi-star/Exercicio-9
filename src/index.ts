import { CountryService } from "./countryService";
import { Region } from "./interfaces";

async function main() {
  const service = new CountryService();

  const countries = await service.fetchCountries();
  console.log("Total de países:", countries.length);

  const searchResult = service.searchByName(countries, "br");
  console.log("Pesquisa 'br':", searchResult.map(c => c.name));

  const regionResult = service.filterByRegion(countries, Region.Americas);
  console.log("Países das Américas:", regionResult.map(c => c.name));
}

main();
