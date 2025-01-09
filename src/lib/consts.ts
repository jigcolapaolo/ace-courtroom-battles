import type { Character } from "@/env";

export const NAVBAR_LINKS = [
    {
        name: "HOME",
        url: "/"
    },
    {
        name: "CHARACTERS",
        url: "/characters"
    },
    {
        name: "BATTLES",
        url: "/battles"
    },
    {
        name: "RANKINGS",
        url: "/rankings"
    }
]

export const RANK_TYPES = {
    LIKE: "LIKE",
    DISLIKE: "DISLIKE"
}

export const CHARACTER_TYPES = {
    ATTORNEY: "attorney",
    PROSECUTOR: "prosecutor"
}

export const CHARACTERS: Character[] = [
    {
        id: 0,
        name: 'Phoenix Wright',
        img: '/characters/phoenix-sm-select.webp',
        type: CHARACTER_TYPES.ATTORNEY,
        quotes: [
            "Objection!",
            "The sky is blue, and so am I...",
            "Whether in the courtroom or cleaning my toilet, it's always nice to feel like I've fought a good fight"
        ],
        alias: "Nick, Spiky-head",
        birthYear: 1992,
        eyeColor: "Dark Blue",
        hairColor: "Black",
        height: `5'9"; 176 cm`,
        debutEpisode: "The First Turnabout",
        objectionSound: "/characters-audio/phoenix-objection.mp3",
        musicalTheme: "Phoenix Wright ~ Objection! 2001",
        musicalThemeLink: "https://www.youtube.com/watch?v=ANcuqk7x33o"
    },
    {
        id: 1,
        name: 'Miles Edgeworth',
        img: '/characters/miles-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "You're not a clown; you're the entire circus.",
            "Just sit back, relax... and enjoy the sound of the noose tightening around your own neck.",
            "A prosecutor's job is to prove the guilt of the defendant."
        ],
        alias: "Edgey, Conviction Machine",
        birthYear: 1992,
        eyeColor: "Gray",
        hairColor: "Dark Gray",
        height: `5'10"; 178 cm`,
        debutEpisode: "Turnabout Sisters",
        objectionSound: "/characters-audio/miles-objection.mp3",
        musicalTheme: "Great Revival ~ Miles Edgeworth",
        musicalThemeLink: "https://www.youtube.com/watch?v=QI55FRv28Kw"
    },
    {
        id: 2,
        name: 'Athena Cykes',
        img: '/characters/athena-sm-select.webp',
        type: CHARACTER_TYPES.ATTORNEY,
        quotes: [
            "Let's listen to the voice of the heart!",
            "Let's turn the tables with psychology!",
            "I'll bring a smile to everyone's faces, one verdict at a time!"
        ],
        alias: "Thena, Spring Chick",
        birthYear: 2009,
        eyeColor: "Blue",
        hairColor: "Orange-red",
        height: `5'4"; 162 cm`,
        debutEpisode: "Turnabout Countdown",
        objectionSound: "/characters-audio/athena-objection.mp3",
        musicalTheme: "Athena Cykes ~ Let's Do This!",
        musicalThemeLink: "https://www.youtube.com/watch?v=w9ep6aD7AQM"
    },
    {
        id: 3,
        name: 'Franziska Von Karma',
        img: '/characters/franziska-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "I don't fight for the truth, I fight for perfection!",
            "Foolish fool who foolishly fools around!",
            "I'll show you the error of your ways, with my whip!"
        ],
        alias: "Franzy, Whip Lady",
        birthYear: 1992,
        eyeColor: "Gray",
        hairColor: "Silver-blue",
        height: `5'4"; 162* cm`,
        debutEpisode: "Reunion, and Turnabout",
        objectionSound: "/characters-audio/franziska-objection.mp3",
        musicalTheme: "Great Revival ~ Franziska von Karma",
        musicalThemeLink: "https://www.youtube.com/watch?v=kkfX4Y-WkDs"
    },
    {
        id: 4,
        name: 'Apollo Justice',
        img: '/characters/apollo-sm-select.webp',
        type: CHARACTER_TYPES.ATTORNEY,
        quotes: [
            "I'm fine!",
            "The power of perception can cut through any lie!",
            "If you committed a crime, you'd better be ready to do the time. Be you a priest, a saint, a queen or a god"
        ],
        alias: "Polly, Herr Forehead",
        birthYear: 2003,
        eyeColor: "Dark brown",
        hairColor: "Dark brown",
        height: `5'5"; 165 cm`,
        debutEpisode: "Turnabout Trump",
        objectionSound: "/characters-audio/apollo-objection.mp3",
        musicalTheme: "Apollo Justice ~ I'm Fine!",
        musicalThemeLink: "https://www.youtube.com/watch?v=pznMi0VqOBY"
    },
    {
        id: 5,
        name: 'Manfred Von Karma',
        img: '/characters/manfred-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Victory is everything.",
            "The courtroom is no place for amateurs!",
            "I set my ATM card's number to 0001 because I'm number one!",
        ],
        alias: "God of Prosecution",
        birthYear: 1951,
        eyeColor: "Grey",
        hairColor: "Grey",
        height: `5'10"; 177 cm`,
        debutEpisode: "Turnabout Goodbyes",
        objectionSound: "/characters-audio/manfred-objection.mp3",
        musicalTheme: "The Invincible Manfred von Karma",
        musicalThemeLink: "https://www.youtube.com/watch?v=u7EDuM0UipY"
    },
    {
        id: 6,
        name: 'Mia Fey',
        img: '/characters/mia-sm-select.webp',
        type: CHARACTER_TYPES.ATTORNEY,
        quotes: [
            "You must never give up hope, no matter how bleak it looks.",
            "The truth is always worth fighting for.",
            "For a lawyer, the worst of times are when you have to force your biggest smiles."
        ],
        alias: "Mystic Mia",
        birthYear: 1989,
        eyeColor: "Brown",
        hairColor: "Brown",
        height: `5'6"; 168 cm`,
        debutEpisode: "The First Turnabout",
        objectionSound: "/characters-audio/mia-objection.mp3",
        musicalTheme: "Turnabout Sisters Ballad",
        musicalThemeLink: "https://www.youtube.com/watch?v=Sz-m7l_QoEo"
    },
    {
        id: 7,
        name: 'Godot',
        img: '/characters/godot-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Blacker than a moonless night, hotter and more bitter than Hell itself... That is coffee",
            "The only time a lawyer can cry is when it's all over",
            "The weak get washed away by the tides of fate...The strong drink it up"
        ],
        alias: "Goggles, Coffee Aficionado",
        birthYear: 1985,
        eyeColor: "??? (Originally Brown)",
        hairColor: "White (Originally Black)",
        height: `6'1"; 185 cm`,
        debutEpisode: "The Stolen Turnabout",
        objectionSound: "/characters-audio/godot-objection.mp3",
        musicalTheme: "Godot ~ The Fragrance of Black Coffee",
        musicalThemeLink: "https://www.youtube.com/watch?v=2DTjNriHboA"
    },
    {
        id: 8,
        name: 'Klavier Gavin',
        img: '/characters/klavier-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Achtung baby! Today we play it my way!",
            "The law is “absolute”…? You can't be serious.",
            "Sometimes you have to get on up in order to get down… to prosecuting!"
        ],
        alias: "Mr.Rock Star Prosecutor, Rock-boy",
        birthYear: 2001,
        eyeColor: "Dark blue",
        hairColor: "Blond",
        height: `5'11"; 180 cm`,
        debutEpisode: "Turnabout Corner",
        objectionSound: "/characters-audio/klavier-objection.mp3",
        musicalTheme: "Klavier Gavin ~ Guilty Love",
        musicalThemeLink: "https://www.youtube.com/watch?v=RWi4FogixcQ"
    },
    {
        id: 9,
        name: 'Kristoph Gavin',
        img: '/characters/kristoph-sm-select.webp',
        type: CHARACTER_TYPES.ATTORNEY,
        quotes: [
            "The law is ABSOLUTE!",
            "There is only room for two in this court: me, and the law! Keep the riff-raff out! Out, I say!",
            "Owning the same nail polish does not a murderer make"
        ],
        alias: "The Devil",
        birthYear: 1993,
        eyeColor: "Light grayish-blue",
        hairColor: "Platinum blond",
        height: `6'1"; 185 cm`,
        debutEpisode: "Turnabout Trump",
        objectionSound: "/characters-audio/kristoph-objection.mp3",
        musicalTheme: "Solitary Confinement ~ Darkness Theme",
        musicalThemeLink: "https://www.youtube.com/watch?v=zAf5yfgICrE"
    },
    {
        id: 10,
        name: 'Simon Blackquill',
        img: '/characters/simon-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Hmph. Enough jabbering. Get on with it, already.",
            "I shall cut down your lies with the blade of logic!",
            "You should fear the Twisted Samurai, for my blade strikes true!"
        ],
        alias: "Twisted Samurai, Panda",
        birthYear: 1992,
        eyeColor: "Gray",
        hairColor: "Black with white patch in the front right",
        height: `6'2"; 188 cm`,
        debutEpisode: "The Monstrous Turnabout",
        objectionSound: "/characters-audio/simon-objection.mp3",
        musicalTheme: "Simon Blackquill ~ Distorted Swordsmanship",
        musicalThemeLink: "https://www.youtube.com/watch?v=8Q0BwOvHzTk"
    },
    {
        id: 11,
        name: 'Nahyuta Sahdmadhi',
        img: '/characters/nahyuta-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Karmic retribution is inevitable. It is the way of the universe.",
            "Justice is an illusion born of human desire.",
            "I will cleanse this court with the flames of purification."
        ],
        alias: "Last Rites Prosecutor, Yuty",
        birthYear: 2003,
        eyeColor: "Green",
        hairColor: "Light lavender",
        height: `6'0"; 182 cm`,
        debutEpisode: "The Magical Turnabout",
        objectionSound: "/characters-audio/nahyuta-objection.mp3",
        musicalTheme: "Nahyuta Sahdmadhi ~ The Last Rites Prosecutor",
        musicalThemeLink: "https://www.youtube.com/watch?v=JNpRPEY1D4E"
    },
    {
        id: 12,
        name: 'Winston Payne',
        img: '/characters/winston-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "I may not look it, but I'm a pro when it comes to getting my way!",
            "Don't underestimate the rookie killer!",
            "Objection! ...Oh wait, I don't actually have one..."
        ],
        alias: "Rookie Killer",
        birthYear: 1964,
        eyeColor: "???",
        hairColor: "Greying Black",
        height: `5'4½"; 164 cm`,
        debutEpisode: "The First Turnabout",
        objectionSound: "/characters-audio/winston-objection.mp3",
        musicalTheme: "Odd Folk",
        musicalThemeLink: "https://www.youtube.com/watch?v=uwtVcLWGO-4"
    },
    {
        id: 13,
        name: 'Gaspen Payne',
        img: '/characters/gaspen-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Unlike my brother, I am the true epitome of prosecution!",
            "I will crush you like the vermin you are!",
            "The Payne family's reputation will soar under my watch!"
        ],
        alias: "Rookie Humiliator, The Incredible Payne",
        birthYear: 1972,
        eyeColor: "???",
        hairColor: "Bald (Wears black toupée)",
        height: `5'4½"; 164 cm`,
        debutEpisode: "Turnabout Countdown",
        objectionSound: "/characters-audio/gaspen-objection.mp3",
        musicalTheme: "Odd Folk",
        musicalThemeLink: "https://www.youtube.com/watch?v=uwtVcLWGO-4"
    }
]