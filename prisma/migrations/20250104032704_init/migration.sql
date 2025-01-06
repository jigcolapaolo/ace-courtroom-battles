-- CreateTable
CREATE TABLE "RankSelections" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Rankings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rankId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "characterFirstName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rankings_characterFirstName_fkey" FOREIGN KEY ("characterFirstName") REFERENCES "RankSelections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RankSelections_id_key" ON "RankSelections"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rankings_id_key" ON "Rankings"("id");
