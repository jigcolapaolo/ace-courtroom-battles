declare global {
    interface Window {
        toast: function;
    }
}

export interface Character {
    id: number;
    name: string;
    img: string;
    type: string;
    quotes: string[];
    alias: string;
    birthYear: number;
    eyeColor: string;
    hairColor: string;
    height: string;
    debutEpisode: string;
    objectionSound: string;
    musicalTheme: string;
    musicalThemeLink: string;
}

export interface CharacterRanking {
    characterId: string;
    characterFirstName: string;
    totalRankings: number;
    ranks: Record<string, number>;
}

export interface Case {
    id: number,
    caseName: string,
    incidentType: string,
    victim: string,
    cause: string
}

export interface Courtroom {
    id: number;
    name: string;
    imgUrl: string;
    theme: string;
}

type OpeningStatementLine = {
    speaker: string;
    line: string;
};

type SceneLink = {
    id: number;
    iframe: string;
    description: string;
}

type Sprites = {
    idle: string;
    talking: string;
}

export interface Battle {
    id: string,
    case: Case,
    attorney: string,
    attorneySpriteUrls: Sprites,
    prosecutor: string,
    prosecutorSpriteUrls: Sprites,
    courtroom: Courtroom,
    room: string,
    game: string,
    scenesLinks: SceneLink[],
    openingStatementLines: OpeningStatementLine[]
}