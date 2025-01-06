import { CHARACTERS } from "@/lib/consts";
import type { APIRoute } from "astro";
import { object, safeParse, string } from "valibot"
import { getSession } from "auth-astro/server";
import { prisma } from "prisma/client";
import { generateUserId } from "@/lib/users";

const RankSchema = object({
    rankId: string(),
    characterFirstName: string(),
})


const res = (
    body: string,
    { status, statusText, headers }: { status?: number; statusText?: string; headers?: Headers }
) => new Response(body, { status, statusText, headers });

export const POST: APIRoute = async ({ params, request }) => {
    const session = await getSession(request)
    if (!session || session?.user?.email == null) {
        return res("Unauthorized", { status: 401 })
    }

    const { characterId } = params
    if (!characterId) return res("Bad Request", { status: 400 })

    const characterData = CHARACTERS.find(character => character.id === Number(characterId))
    if (!characterData) return res("Not Found", { status: 404 })

    const { success, output } = safeParse(RankSchema, await request.json())
    if (!success) return res("Bad Request", { status: 400 })

        
    const { rankId, characterFirstName } = output


    const userId = generateUserId(session.user)
    const createdAt = new Date()

    const newId = `${userId}-${characterId}`
    const rank = { id: newId, rankId, characterId, characterFirstName, userId, createdAt }

    try {
        await prisma.rankings.upsert({
            where: { id: newId },
            update: {
                rankId: rank.rankId,
                characterId: rank.characterId,
                characterFirstName: rank.characterFirstName,
                userId: rank.userId,
                createdAt: rank.createdAt,
            },
            create: {
                id: rank.id,
                rankId: rank.rankId,
                characterId: rank.characterId,
                characterFirstName: rank.characterFirstName,
                userId: rank.userId,
                createdAt: rank.createdAt,
            },
        })

    } catch (error) {
        console.error(error)
        return res("Error inserting rank", { status: 500 })
    }

    return res("OK", { status: 200 })
}