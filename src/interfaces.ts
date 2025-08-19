// Enum para regiões
export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

// Interface para país
export interface ICountry {
  name: string;
  capital: string;
  region: Region;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
}
