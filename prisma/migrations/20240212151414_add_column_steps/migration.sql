/*
  Warnings:

  - Added the required column `steps` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "food1" TEXT NOT NULL,
    "food2" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Recipe" ("createdAt", "description", "food1", "food2", "id", "image", "title", "updatedAt") SELECT "createdAt", "description", "food1", "food2", "id", "image", "title", "updatedAt" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE UNIQUE INDEX "Recipe_food1_food2_key" ON "Recipe"("food1", "food2");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
