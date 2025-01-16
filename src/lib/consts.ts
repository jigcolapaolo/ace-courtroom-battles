import type { Battle, Case, Character, Courtroom } from "@/env";

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

const ROOMS = {
    DCN1: "Courtroom No. 1",
    DCN2: "Courtroom No. 2",
    DCN3: "Courtroom No. 3",
    DCN4: "Courtroom No. 4",
    DCN5: "Courtroom No. 5",
    DCN6: "Courtroom No. 6",
    DCN7: "Courtroom No. 7",
}

const COURTROOMS: Courtroom[] = [
    {
        id: 0,
        name: "District Court",
        imgUrl: "/courtrooms/district-courtroom.webp",
        theme: "/courtrooms/district-court-theme.mp3",
    },
    {
        id: 1,
        name: "High Court of Khura'in",
        imgUrl: "/courtrooms/khurain-courtroom.webp",
        theme: "/courtrooms/khurain-court-theme.mp3",
    }
]

const GAMES = {
    MAIN: "Main Game",
    JFA: "Justice for All",
    TAT: "Trials and Tribulations",
    AJ: "Apollo Justice",
    DD: "Dual Destinies",
    SOJ: "Spirit of Justice"
}

const CASES: Case[] = [
    {
        id: 0,
        caseName: "The First Turnabout",
        incidentType: "Violent Death",
        victim: "Cindy Stone",
        cause: "Head trauma caused by a blow to the head with a 'The Thinker' clock"
    },
    {
        id: 1,
        caseName: "Turnabout Sisters",
        incidentType: "Violent Death",
        victim: "Mia Fey",
        cause: "Blow to the head with a statue/clock of 'The Thinker'"
    },
    {
        id: 2,
        caseName: "Turnabout Goodbyes",
        incidentType: "Violent Death",
        victim: "Robert Hammond",
        cause: "Shot with a pistol"
    },
    {
        id: 3,
        caseName: "The Stolen Turnabout",
        incidentType: "Stolen Treasure",
        victim: "Fey Clan",
        cause: "The Fey Clan's Sacred Urn was stolen."
    },
    {
        id: 4,
        caseName: "Bridge to the Turnabout",
        incidentType: "Violent Death",
        victim: "Elise Deauxnim",
        cause: "Stabbed in the back with a sword."
    },
    {
        id: 5,
        caseName: "Turnabout Beginnings",
        incidentType: "Violent Death",
        victim: "Valerie Hawthorne",
        cause: "Stabbed in the back with a knife."
    },
    {
        id: 6,
        caseName: "Turnabout Corner",
        incidentType: "Violent Death",
        victim: "Pal Meraktis",
        cause: "Pistol shot to the right temple."
    },
    {
        id: 7,
        caseName: "The Monstrous Turnabout",
        incidentType: "Violent Death",
        victim: "Rex Kyubi",
        cause: "Stab wound from a spear."
    },
    {
        id: 8,
        caseName: "The Rite of Turnabout",
        incidentType: "Violent Death",
        victim: "Tahrust Inmee",
        cause: "Blood loss due to a stab wound to the stomach."
    },
    {
        id: 9,
        caseName: "Turnabout Countdown",
        incidentType: "Violent Death, Destruction of Courtroom No. 4",
        victim: "Candice Arme",
        cause: "Struck with a heavy object."
    }
]

export const BATTLES: Battle[] = [
    {
        id: `${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[12].name.split(' ')[0].toLowerCase()}`,
        case: CASES[0],
        attorney: CHARACTERS[0].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[12].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[12].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[12].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN2,
        game: GAMES.MAIN,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/llFJfjngSXs?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'The First Turnabout' case."
            },
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Ahem... Mr. Wright, it's almost amusing to see a rookie step into the courtroom for the first time. Do you truly believe you can handle a case of this magnitude?"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "I believe the truth is what matters most in any case, Mr. Payne. And I intend to bring it to light, no matter how inexperienced I may seem."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph! Bold words for someone so green. You'll find that this courtroom isn't so forgiving to amateurs like yourself"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Maybe so, but even amateurs can uncover the truth when they believe in their client. Let's see if you're as confident when the evidence speaks for itself"
            },
        ]
    },
    {
        id: `${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[1].name.split(' ')[0].toLowerCase()}`,
        case: CASES[1],
        attorney: CHARACTERS[0].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[1].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN1,
        game: GAMES.MAIN,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/YEEAOsAzrUE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'Turnabout Sisters' case."
            },
            
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "So, we meet again, Wright. I see you're still clinging to your misguided sense of justice. I wonder how long that naïveté will last in this courtroom."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Edgeworth... It's been a while. I'm here to uncover the truth, no matter how determined you are to bury it"
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Truth? Don't make me laugh. The courtroom is a battlefield, and only the strongest prevail. Sentimentality won’t save your client"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Maybe, but I'm not here to fight. I'm here to defend the innocent. And if that means going toe-to-toe with you, then so be it!"
            },
        ]
    },
    {
        id: `${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[5].name.split(' ')[0].toLowerCase()}`,
        case: CASES[2],
        attorney: CHARACTERS[0].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[5].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[5].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[5].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN3,
        game: GAMES.MAIN,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/UC1rDiyw8_4?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'Turnabout Goodbyes' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph. So, you are the one daring to stand against me? How quaint. Let me make one thing clear: I have never lost, and I do not intend to start now."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Winning isn't everything, Von Karma. I'm here to defend my client and uncover the truth, no matter how intimidating you think you are."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Foolish fool! The truth is whatever I dictate it to be. You are merely a speck under my heel, Wright. Prepare to be crushed."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Maybe you've silenced others, but you won't silence me. If there's a flaw in your case, I'll find it, no matter how perfect you claim to be!"
            },
        ]
    },
    {
        id: `${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[7].name.split(' ')[0].toLowerCase()}`,
        case: CASES[3],
        attorney: CHARACTERS[0].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[7].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[7].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[7].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN6,
        game: GAMES.TAT,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/OuyhKcQLSOE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'The Stolen Turnabout' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Ah... So, the rookie returns for another round. You may have survived this courtroom before, Trite, but today, you're up against the aroma of perfection. Let's see if your coffee's strong enough for this brew."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Godot... I don't care how much coffee you drink or how many riddles you speak. I'm here to uncover the truth and defend my client."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph. Truth, you say? The truth is like the perfect cup of coffee—rich, complex, and hard to get right. Let's see if you can handle the heat without spilling the beans."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "I don't need perfect coffee to win this case. All I need is evidence, logic, and the will to see justice served. Let's get to it!"
            },
        ]

    },
    {
        id: `${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[3].name.split(' ')[0].toLowerCase()}`,
        case: CASES[4],
        attorney: CHARACTERS[1].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[3].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[3].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[3].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN7,
        game: GAMES.TAT,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/4XzAogjMAqI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Fragment of 'The Stolen Turnabout' case with Miles and Franziska."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Miles Edgeworth! What is the meaning of this disgraceful charade? You—a prosecutor—daring to stand at the defense's bench? Have you finally lost your edge?"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Hmph. Franziska, I assure you, my edge is as sharp as ever. I'm simply here to ensure justice is served, something you seem to confuse with blind perfection."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Foolish fool! Justice does not need your meddling! A von Karma delivers flawless victories, not excuses for defending the weak!"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "If pursuing the truth means standing on this side of the courtroom, then so be it. I'm here because someone must uncover what truly happened, regardless of appearances."
            },
        ]
    },
    {
        id: `${CHARACTERS[6].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[1].name.split(' ')[0].toLowerCase()}`,
        case: CASES[5],
        attorney: CHARACTERS[6].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[6].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[6].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[1].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[1].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN4,
        game: GAMES.TAT,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/08hLBVJXseo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'Turnabout Beginnings' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph. Mia Fey... A fledgling defense attorney, I see. Don't expect any leniency from me. A trial is a contest of skill, and only the superior side deserves to prevail."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Edgeworth, I see you've inherited more than just Manfred Von Karma's teachings. But justice isn't a contest or a game—it's about uncovering the truth, something your approach seems to overlook."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Foolish idealism. The truth is irrelevant if the prosecution's case is flawless. My mentor has taught me that perfection leaves no room for doubt."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "And yet, no case is truly perfect. There's always more beneath the surface. I'll show you, Edgeworth, that justice isn't about perfection—it's about fairness and truth."
            },
        ]
    },
    {
        id: `${CHARACTERS[4].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[8].name.split(' ')[0].toLowerCase()}`,
        case: CASES[6],
        attorney: CHARACTERS[4].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[4].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[4].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[8].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[8].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[8].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN4,
        game: GAMES.AJ,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/VKS75TzBgIo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'Turnabout Corner' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Achtung, baby! Ready to face the music, Herr Forehead? Let's see if your chords are in tune today."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "I'm here to seek the truth, not to play games, Prosecutor Gavin. Your theatrics won't distract me from defending my client."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph. Always so serious, ja? Remember, the courtroom is a stage, and every performance needs a bit of flair."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Flair won't change the facts. Let's focus on the evidence and let justice take the lead."
            },
        ]
    },
    {
        id: `${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[10].name.split(' ')[0].toLowerCase()}`,
        case: CASES[7],
        attorney: CHARACTERS[2].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[10].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[10].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[10].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN4,
        game: GAMES.DD,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/es3-u05vXyc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'The Monstrous Turnabout' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Hmph. Cykes-dono, do you truly believe you have what it takes to stand against me in this courtroom? The battlefield of wits is no place for the faint-hearted."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "I know you're tough Simon, but I'm not backing down! I've trained for this, and I'm ready to face whatever you throw my way."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Bold words, little kitten. But boldness alone won't save you from the talons of the hawk. The truth is a blade, sharp and unforgiving."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Then it's a good thing I've got my own weapons—logic, psychology, and the strength to fight for the truth! Let's do this!"
            },
        ]
    },
    {
        id: `${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[11].name.split(' ')[0].toLowerCase()}`,
        case: CASES[8],
        attorney: CHARACTERS[0].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-3d-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[0].name.split(' ')[0].toLowerCase()}-3d-talking.webp`
        },
        prosecutor: CHARACTERS[11].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[11].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[11].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[1],
        room: "",
        game: GAMES.SOJ,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/JRecGHGNdfs?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'The Rite of Turnabout' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Your presence here is as unexpected as a lotus blooming in the desert. Do you truly believe your misguided defense can alter the karmic course of justice?"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Prosecutor Sahdmadhi, justice isn't about predetermined paths or fate. It's about uncovering the truth and ensuring a fair trial for all. I won't be swayed by your cryptic proverbs."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Your earthly attachments cloud your judgment, rendering you blind to the divine order. Cease this futile struggle and accept the inevitable verdict."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "I respect your beliefs, but I can't stand by and let an innocent person be condemned. I'll challenge fate itself if that's what it takes to reveal the truth."
            },
        ]
    },
    {
        id: `${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-vs-${CHARACTERS[13].name.split(' ')[0].toLowerCase()}`,
        case: CASES[9],
        attorney: CHARACTERS[2].name,
        attorneySpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[2].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        prosecutor: CHARACTERS[13].name,
        prosecutorSpriteUrls: {
            idle: `/characters-sprites/${CHARACTERS[13].name.split(' ')[0].toLowerCase()}-idle.webp`,
            talking: `/characters-sprites/${CHARACTERS[13].name.split(' ')[0].toLowerCase()}-talking.webp`
        },
        courtroom: COURTROOMS[0],
        room: ROOMS.DCN5,
        game: GAMES.DD,
        scenesLinks: [
            {
                id: 1,
                iframe: `<iframe src="https://www.youtube.com/embed/X1RFdH24VpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                description: "Complete walkthrough of 'Turnabout Countdown' case."
            }
        ],
        openingStatementLines: [
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "So, the so-called 'new talent' graces us with her presence. Do you truly believe your psychological gimmicks can stand up to my prosecutorial prowess?"
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "Mr. Payne, underestimating me would be a mistake. My analytical psychology and the Mood Matrix are here to uncover the truth, beyond mere facts."
            },
            {
                speaker: CHARACTER_TYPES.PROSECUTOR,
                line: "Tch. Such arrogance from a fledgling attorney. Your reliance on emotions will be your downfall in this courtroom."
            },
            {
                speaker: CHARACTER_TYPES.ATTORNEY,
                line: "We'll see about that. I'm ready to face your challenges head-on and prove that understanding emotions is key to justice."
            },
        ]
    }
]