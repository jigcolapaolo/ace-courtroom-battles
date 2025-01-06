import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
});



// import { column, defineDb } from 'astro:db';

// const RankSelections = {
//   columns: {
//     id: column.text({ primaryKey: true}),
//   }
// }

// const Rankings = {
//   columns: {
//     id: column.text({ primaryKey: true}),  //userId-characterId
//     rankId: column.text(),
//     characterId: column.text(),
//     characterFirstName: column.text({ references: () => RankSelections.columns.id }),
//     userId: column.text(),
//     createdAt: column.date(),
//   }
// }

// // https://astro.build/db/config
// export default defineDb({
//   tables: {
//     RankSelections,
//     Rankings
//   }
// });
