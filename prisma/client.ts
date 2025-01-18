import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import dotenv from 'dotenv';

// const libsql = createClient({
//   url: `${process.env.TURSO_DB_REMOTE_URL}`,
//   authToken: `${process.env.TURSO_DB_APP_TOKEN}`,
// })

// const adapter = new PrismaLibSQL(libsql)

// export const prisma = new PrismaClient({ adapter })

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config();
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  const libsql = createClient({
    url: `${process.env.DATABASE_URL}`,
    authToken: `${process.env.TURSO_DB_APP_TOKEN}`,
  });

  const adapter = new PrismaLibSQL(libsql);
  prisma = new PrismaClient({ adapter });
} else {
  prisma = new PrismaClient();
}

export { prisma };