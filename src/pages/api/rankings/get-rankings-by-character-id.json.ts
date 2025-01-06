import type { APIRoute } from "astro";

import { prisma } from "prisma/client";

export const GET: APIRoute = async ({ url }) => {
    const characterId = url.searchParams.get("id")
    if (!characterId || typeof characterId !== "string") 
        return new Response(JSON.stringify({ error: "Invalid characterId" }), { status: 400, statusText: "Bad Request" })

    const characterRankings = await prisma.rankings.findMany({
        where: { characterId: characterId },
        select: {
            rankId: true,
            characterId: true,
            characterFirstName: true,
        },
    })

    const groupedRankings: Record<string, number> = {}

    characterRankings.forEach((ranking) => {
        if (!groupedRankings[ranking.rankId]) groupedRankings[ranking.rankId] = 0
        groupedRankings[ranking.rankId]++
    })

    const totalRankings = characterRankings.length
    Object.entries(groupedRankings).forEach(([rankId, count]) => {
        groupedRankings[rankId] = Math.round((count / totalRankings) * 100)
    })

    return new Response(JSON.stringify({ groupedRankings }))
}