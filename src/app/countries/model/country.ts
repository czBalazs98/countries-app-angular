export interface Country {
    name: Name;
    population: number;
    region: string;
    subregion: string;
    flags: Flag;
    capital: string[];
    borders: string[];
    tld: string[];
    currencies: Currency;
    languages: Language;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface NativeName {
    [key: string]: {
        official: string;
        common: string;
    }
}

export interface Flag {
    png: string;
    svg: string;
    alt: string;
}

export interface Currency {
    [key: string]: {
        name: string;
        symbol: string;
    }
}

export interface Language {
    [key: string]: string
}