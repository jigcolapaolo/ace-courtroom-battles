import type { CharacterRanking } from "@/env";
import type { APIRoute } from "astro";

import { prisma } from "prisma/client";

export const GET: APIRoute = async () => {

    const characterRankings = await prisma.rankings.findMany({
        select: {
            rankId: true,
            characterId: true,
            characterFirstName: true,
        },
    })

    const groupedCharacters: CharacterRanking[] = []

    characterRankings.forEach((ranking) => {
        if (!groupedCharacters.find((character) => character.characterId === ranking.characterId)) {
            groupedCharacters.push({
                characterId: ranking.characterId,
                characterFirstName: ranking.characterFirstName,
                totalRankings: 0,
                ranks: {
                    "LIKE": 0,
                    "DISLIKE": 0
                }
            })
        }

        const existingCharacter = groupedCharacters.find((character) => character.characterId === ranking.characterId)
        if (existingCharacter) {
            existingCharacter.totalRankings++
            existingCharacter.ranks[ranking.rankId]++
        }
    })


    groupedCharacters.forEach((ranking) => {
        Object.entries(ranking.ranks).forEach(([rankId, count]) => {
            ranking.ranks[rankId] = Math.round((count / ranking.totalRankings) * 100)
        })
    })

    groupedCharacters.sort((a, b) => {
        if (a.totalRankings > b.totalRankings) return -1
        if (a.totalRankings < b.totalRankings) return 1
        if (a.ranks.LIKE > b.ranks.LIKE) return -1
        if (a.ranks.LIKE < b.ranks.LIKE) return 1
        return 0
    })

    return new Response(JSON.stringify({ groupedCharacters }))
}