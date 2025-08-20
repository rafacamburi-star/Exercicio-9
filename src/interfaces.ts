export interface ICountry {
  name: string;
  region: Region;
  capital?: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}
