import { CHARACTERS } from '@/lib/consts';
import { prisma } from './client';


async function seed() {
  const characterNames = CHARACTERS
    .flatMap(({ name }) => name.split(' ')[0].toLowerCase())
    .map((id) => ({ id }));

  await prisma.rankSelections.createMany({
    data: characterNames,
  });

  console.log('Finished seeding.');
}

seed()
  .catch((error) => {
    console.error('Error seeding the database', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());