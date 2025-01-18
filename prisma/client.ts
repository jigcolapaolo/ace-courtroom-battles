import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `${process.env.DATABASE_URL}`,
  authToken: `${process.env.TURSO_DB_APP_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)

export const prisma = new PrismaClient({ adapter })




// prisma = new PrismaClient();

// export const prisma = new PrismaClient();