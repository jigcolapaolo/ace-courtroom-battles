import type { Character } from "@/env";

const CHARACTER_TYPES = {
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        id: 9,
        name: 'Simon Blackquill',
        img: '/characters/simon-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Hmph. Enough jabbering. Get on with it, already.",
            "I shall cut down your lies with the blade of logic!",
            "You should fear the Twisted Samurai, for my blade strikes true!"
        ]
    },
    {
        id: 10,
        name: 'Nahyuta Sahdmadhi',
        img: '/characters/nahyuta-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Karmic retribution is inevitable. It is the way of the universe.",
            "Justice is an illusion born of human desire.",
            "I will cleanse this court with the flames of purification."
        ]
    },
    {
        id: 11,
        name: 'Winston Payne',
        img: '/characters/winston-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "I may not look it, but I'm a pro when it comes to getting my way!",
            "Don't underestimate the rookie killer!",
            "Objection! ...Oh wait, I don't actually have one..."
        ]
    },
    {
        id: 12,
        name: 'Gaspen Payne',
        img: '/characters/gaspen-sm-select.webp',
        type: CHARACTER_TYPES.PROSECUTOR,
        quotes: [
            "Unlike my brother, I am the true epitome of prosecution!",
            "I will crush you like the vermin you are!",
            "The Payne family's reputation will soar under my watch!"
        ]
    }
]