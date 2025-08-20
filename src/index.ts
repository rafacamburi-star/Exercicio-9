import { CountryService } from "./countryService";
import { Region } from "./interfaces";

const countryService = new CountryService();

(async () => {
  await countryService.fetchCountries();

  console.log("Total de países:", countryService.getAll().length);

  const resultadoPesquisa = countryService.searchByName("uni");
  console.log("Pesquisa 'uni':", resultadoPesquisa.map((c) => c.name));

  const resultadoRegiao = countryService.filterByRegion(Region.Americas);
  console.log("Países das Américas:", resultadoRegiao.map((c) => c.name));
})();

