// import { CHARACTERS } from '@/lib/consts';
// import { db, RankSelections } from 'astro:db';

// // https://astro.build/db/seed
// export default async function seed() {
// 	const characterNames = CHARACTERS
// 		.flatMap(({ name }) => name.split(' ')[0].toLowerCase())
// 		.map((id) => ({ id }));

// 	await db.insert(RankSelections).values(characterNames);
// }
