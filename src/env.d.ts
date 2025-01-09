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