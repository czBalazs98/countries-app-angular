export interface Country {
    name: Name;
    population: number;
    region: string;
    flags: Flag;
    capital: string[];
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