export enum ActiveFilter {
    AUTHOR = 'author',
    WORK = 'work',
    CURATOR = 'curator'
}


export interface Frammento {
    numero: number;
    testo: string;
}

export interface Opera {
    titolo: string;
    autore?: string;
    dataCaricamento?: string;
    frammenti?: Frammento[];
}

export interface Autore {
    autore: string;
    opere: Opera[];
}

