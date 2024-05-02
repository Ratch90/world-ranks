type WorldRegion = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
type AmericaRegion = 'North America' | 'South America';

type Continents = AmericaRegion | WorldRegion | 'Antarctica';

type Status = 'Member of the United Nations' | 'Independent';

type Languages = {
    [key: string]: string; // key is language code
};

type CurrencyDetail = {
    name: string;
    symbol: string;
};
type Currencies = {
    [key: string]: CurrencyDetail; // key is currency code
};

export interface Country {
    name: string;
    region: WorldRegion;
    population: number;
    area: number;
    status: Status;
    capital: string;
    subregion: string;
    currencies: Currencies;
    continents: Continents[];
    languages: Languages;
}
